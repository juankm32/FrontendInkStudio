"use client";

import type { LoginContent } from "@/content/functions/types";
import { emailPattern, passwordPattern } from "@/utils";
import type { InputConfig } from "@nico2433/custom-components";
import { useForm } from "react-hook-form";

const useLoginConfig = (
  fieldsContent: LoginContent["form"]["fields"],
  errorsContent: LoginContent["form"]["errors"]
) => {
  const {
    register,
    handleSubmit,
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
  ];

  return { fields, errors, register, handleSubmit };
};

export default useLoginConfig;
