"use client";

import { AppointmentContext } from "@/components/context";
import AppointmentStepsBar from "@/components/pages/appointment/AppointmentStepsBar";
import GradientBorder from "@/components/ui/GradientBorder";
import type { AppointmentContent } from "@/content/functions/types";
import { useGetContext } from "@/hooks";
import type { StyleSchema } from "@/settings/@types";
import { DocDelimiter } from "@nico2433/custom-components";
import React from "react";
import type { FieldValues } from "react-hook-form";
import AppointmentFirstStep from "./steps/AppointmentFirstStep";
import AppointmentSecondStep from "./steps/AppointmentSecondStep";

interface Props {
  content: AppointmentContent;
  styles: StyleSchema[];
}

const AppointmentForm: React.FC<Props> = ({ content, styles }) => {
  const {
    step,
    handleSubmit,
    setters: { setStep, setData },
  } = useGetContext(AppointmentContext);

  const onSubmit = (values: FieldValues) => {
    if (step === content.steps.length - 1) {
      console.log(values);
    } else {
      console.log(values);
      setData((prev) => (prev ? { ...prev, ...values } : (values as any)));
      setStep((prev) => prev + 1);
    }
  };

  const GetStep = () => {
    switch (step) {
      case 0: {
        return <AppointmentFirstStep />;
      }
      case 1: {
        return <AppointmentSecondStep styles={styles} />;
      }
    }
  };

  return (
    <>
      <AppointmentStepsBar
        content={content.steps}
        step={step}
        setStep={setStep}
      />

      <DocDelimiter>
        <GradientBorder className="p-0.5 rounded">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-primary-bgD w-full h-screen rounded py-5 overflow-auto custom-scroll"
          >
            <GetStep />
          </form>
        </GradientBorder>
      </DocDelimiter>
    </>
  );
};

export default AppointmentForm;
