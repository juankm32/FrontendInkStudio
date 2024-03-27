"use client";

import { AuthContext } from "@/components/context/Auth";
import type { LoginContent } from "@/content/functions/types";
import type { FetchError } from "@/errors";
import { useGetContext } from "@/hooks";
import { urls } from "@/settings";
import type { LoginApiRes, UserSchema } from "@/settings/@types";
import { btnAccentColors, btnSm, getData, postData } from "@/utils";
import { FETCH_STATUS, handleStatusMessage } from "@/utils/dataFetch/status";
import type { StatusMessages } from "@/utils/dataFetch/types";
import { setCookie } from "@/utils/server";
import { TextInput } from "@nico2433/custom-components";
import { useRouter } from "next/navigation";
import { useState, type FC } from "react";
import type { FieldValues } from "react-hook-form";
import useLoginConfig from "./useLoginConfig";

const { api } = urls;

interface Props {
  content: LoginContent["form"];
}

const LoginForm: FC<Props> = ({ content }) => {
  const { fields, errors, register, handleSubmit } = useLoginConfig(
    content.fields,
    content.errors
  );

  const {
    setters: { setToken, setUser },
  } = useGetContext(AuthContext);

  const router = useRouter();

  // *------ STATUS MESSAGES
  const [status, setStatus] = useState<FETCH_STATUS>(FETCH_STATUS.INACTIVE);
  const statusMessages: StatusMessages = {
    [FETCH_STATUS.ERROR]: content.errors.unknownError,
  };

  const onSubmit = async (values: FieldValues) => {
    setStatus(FETCH_STATUS.LOADING);

    const res = await postData<LoginApiRes>(
      `${api.base}${api.auth.base}${api.auth.login}`,
      {
        body: values,
      }
    ).catch(({ fetchStatus }: FetchError) => setStatus(fetchStatus));

    if (res) {
      const user = await getData<UserSchema>(
        `${api.base}${api.users.base}${api.users.byToken}/${res.accessToken}`
      ).catch(({ fetchStatus }: FetchError) => setStatus(fetchStatus));

      if (user) {
        setToken(res.accessToken);
        setUser(user);
        await setCookie("session", res.accessToken, {
          secure: true,
          sameSite: "lax",
        });
        router.replace("/");
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4 w-full"
      >
        {fields.map((field) => (
          <TextInput
            key={field.name}
            config={field}
            register={register}
            errors={errors}
            className="text-center uppercase font-bold w-full"
            inputClass="p-2 bg-gray-200 rounded-md w-full text-black"
          />
        ))}
        {status !== FETCH_STATUS.INACTIVE &&
          status !== FETCH_STATUS.LOADING && (
            <p>{handleStatusMessage(status, statusMessages)}</p>
          )}

        <button
          className={`${btnAccentColors} ${btnSm} uppercase font-bold w-full`}
        >
          {content.submit}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
