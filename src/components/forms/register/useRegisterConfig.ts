"use client";

import type { RegisterContent } from "@/content/functions/types";
import { yearsToMs } from "@/lib";
import { emailPattern, numbersPattern, passwordPattern } from "@/utils";
import type { InputConfig } from "@nico2433/custom-components";
import { useForm } from "react-hook-form";

const useRegisterConfig = (
  fieldsContent: RegisterContent["form"]["fields"],
  errorsContent: RegisterContent["form"]["errors"]
) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const lengthMessage = (value: "min" | "max", length: number) => {
    const { start: minStart, end: minEnd } = errorsContent.minLength;
    const { start: maxStart, end: maxEnd } = errorsContent.maxLength;

    return value === "min"
      ? `${minStart} ${length} ${minEnd}`
      : `${maxStart} ${length} ${maxEnd}`;
  };

  const fields: InputConfig[] = [
    {
      label: fieldsContent.firstName,
      placeholder: fieldsContent.firstName,
      name: "firstName",
      rules: {
        required: errorsContent.required,
      },
    },
    {
      label: fieldsContent.lastName,
      placeholder: fieldsContent.lastName,
      name: "lastName",
      rules: {
        required: errorsContent.required,
      },
    },
    {
      type: "date",
      label: fieldsContent.birthDate,
      placeholder: fieldsContent.birthDate,
      name: "birthDate",
      rules: {
        required: errorsContent.required,
        validate: (value: Date) => {
          const dateValue = new Date(value).getTime();
          const actualDate = Date.now();
          const diff = actualDate - dateValue;

          if (diff < yearsToMs(100)) {
            if (diff >= yearsToMs(18)) {
              return true;
            } else {
              return errorsContent.notOldEnough;
            }
          } else {
            return errorsContent.invalidDate;
          }
        },
      },
    },
    {
      label: fieldsContent.email,
      placeholder: fieldsContent.email,
      name: "email",
      rules: {
        required: errorsContent.required,
        pattern: {
          value: emailPattern,
          message: errorsContent.invalidEmail,
        },
      },
    },
    {
      label: fieldsContent.telephone,
      placeholder: fieldsContent.telephone,
      name: "telephone",
      rules: {
        required: errorsContent.required,
        pattern: {
          value: numbersPattern,
          message: errorsContent.invalidTelephone,
        },
        maxLength: {
          value: 20,
          message: lengthMessage("max", 20),
        },
      },
    },
    {
      label: fieldsContent.password,
      placeholder: fieldsContent.password,
      name: "password",
      type: "password",
      rules: {
        required: errorsContent.required,
        pattern: {
          value: passwordPattern,
          message: errorsContent.invalidPassword,
        },
        minLength: {
          value: 6,
          message: lengthMessage("min", 6),
        },
        maxLength: {
          value: 20,
          message: lengthMessage("max", 20),
        },
      },
    },
    {
      label: fieldsContent.confirmPassword,
      placeholder: fieldsContent.confirmPassword,
      name: "confirmPassword",
      type: "password",
      rules: {
        required: errorsContent.required,
        minLength: {
          value: 6,
          message: lengthMessage("min", 6),
        },
        maxLength: {
          value: 20,
          message: lengthMessage("max", 20),
        },
        validate: (value: string) => {
          const originalPassword = getValues("password");
          return value === originalPassword || errorsContent.invalidPasswords;
        },
      },
    },
  ];

  return { fields, errors, register, handleSubmit, reset };
};

export default useRegisterConfig;
