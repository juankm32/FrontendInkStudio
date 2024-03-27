"use client";

import type { AppointmentContent } from "@/content/functions/types";
import { createContext, useState } from "react";
import type {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { useForm } from "react-hook-form";

interface Data {
  serviceId: string;
  styleId: string;
  artistId: string;
  date: string;
  time: string;
}

interface Store {
  step: number;
  data: Data | null;
  content: AppointmentContent;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  setters: {
    setData: React.Dispatch<React.SetStateAction<Data | null>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    setValue: UseFormSetValue<FieldValues>;
  };
}

export const AppointmentContext = createContext<Store | null>(null);

interface Props {
  children: React.ReactNode;
  content: AppointmentContent;
}

const AppointmentContextProvider: React.FC<Readonly<Props>> = ({
  children,
  content,
}) => {
  const [step, setStep] = useState<number>(0);
  const [data, setData] = useState<Data | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const store: Store = {
    step,
    data,
    content,
    register,
    handleSubmit,
    errors,
    setters: { setStep, setData, setValue },
  };

  return (
    <AppointmentContext.Provider value={store}>
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContextProvider;
