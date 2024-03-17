"use client";

import AlertModal from "@/components/modals/AlertModal";
import BackdropFilter from "@/components/ui/BackdropFilter";
import GradientBorder from "@/components/ui/GradientBorder";
import type { RegisterContent } from "@/content/functions/types";
import type { FetchError } from "@/errors";
import { urls } from "@/settings";
import type { UserRegister } from "@/settings/@types";
import {
  btnAccentColors,
  btnMd,
  btnSm,
  modalColors,
  postData,
  smoothTransition,
  tertiaryTitle,
} from "@/utils";
import { FETCH_STATUS, handleStatusMessage } from "@/utils/dataFetch/status";
import type { StatusMessages } from "@/utils/dataFetch/types";
import { DateInput, TextInput } from "@nico2433/custom-inputs";
import { useState, type FC } from "react";
import type { FieldValues } from "react-hook-form";
import useRegisterConfig from "./useRegisterConfig";

const { api } = urls;

interface Props {
  content: RegisterContent["form"];
}

const RegisterForm: FC<Props> = ({ content }) => {
  const { fields, errors, register, handleSubmit, reset } = useRegisterConfig(
    content.fields,
    content.errors
  );

  // *------ STATUS MESSAGES
  const [status, setStatus] = useState<FETCH_STATUS>(FETCH_STATUS.INACTIVE);
  const statusMessages: StatusMessages = {
    [FETCH_STATUS.CONFLICT]: content.errors.alreadyExists,
    [FETCH_STATUS.ERROR]: content.errors.unknownError,
  };

  const onSubmit = async (values: FieldValues) => {
    setStatus(FETCH_STATUS.LOADING);
    const userData: UserRegister = {
      name: values.firstName,
      lastname: values.lastName,
      email: values.email,
      birthday: values.birthDate,
      phone: values.telephone,
      password: values.password,
    };

    const res = await postData<{ status: string }>(
      `${api.base}${api.auth.base}${api.auth.register}`,
      {
        body: userData,
      }
    ).catch(({ fetchStatus }: FetchError) => setStatus(fetchStatus));

    if (res) {
      setStatus(FETCH_STATUS.SUCCESS);
      reset();
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4 w-full"
      >
        <div className="flex flex-col gap-4 w-full lg:grid lg:grid-cols-2">
          {fields.map((field) => {
            return field.type === "date" ? (
              <DateInput
                key={field.name}
                config={field}
                register={register}
                errors={errors}
                className="text-center col-span-2 uppercase font-bold w-full"
                inputClassName="p-2 bg-gray-200 rounded-md w-full text-black"
              />
            ) : (
              <TextInput
                key={field.name}
                config={field}
                register={register}
                errors={errors}
                className="text-center uppercase font-bold w-full"
                inputClassName="p-2 bg-gray-200 rounded-md w-full text-black"
              />
            );
          })}
        </div>
        {status !== FETCH_STATUS.INACTIVE &&
          status !== FETCH_STATUS.LOADING &&
          status !== FETCH_STATUS.SUCCESS && (
            <p>{handleStatusMessage(status, statusMessages)}</p>
          )}

        <button
          className={`${btnAccentColors} ${btnSm} uppercase font-bold w-full`}
        >
          {content.submit}
        </button>
      </form>

      {status === FETCH_STATUS.SUCCESS && (
        <BackdropFilter className="animate-fadeIn">
          <AlertModal success>
            <div className="flex flex-col items-center gap-5 text-center">
              <h3 className={`${tertiaryTitle}`}>{content.success.title}</h3>
              <p className="font-bold uppercase">
                {content.success.description}
              </p>
              <GradientBorder
                className={`${smoothTransition} rounded-3xl hover:opacity-50`}
              >
                <button
                  onClick={() => setStatus(FETCH_STATUS.INACTIVE)}
                  className={`${btnMd} ${modalColors} rounded-3xl m-1 w-48`}
                >
                  OK
                </button>
              </GradientBorder>
            </div>
          </AlertModal>
        </BackdropFilter>
      )}
    </>
  );
};

export default RegisterForm;
