import AppointmentContextProvider from "@/components/context/Appointment";
import { getAppointmentContent } from "@/content";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { FC } from "react";
import React from "react";

interface MetaProps {
  params: {
    locale: string;
  };
}

export const generateMetadata = async ({ params: { locale } }: MetaProps) => {
  const base = await getTranslations({ locale, namespace: "Metadata" });
  const appointment = await getTranslations({
    locale,
    namespace: "appointment.metadata",
  });

  return {
    title: `${base("title")} ${appointment("title")}`,
  };
};

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const ContactLayout: FC<Readonly<LayoutProps>> = ({ children }) => {
  const content = getAppointmentContent(useTranslations("appointment.page"));

  return (
    <AppointmentContextProvider content={content}>
      {children}
    </AppointmentContextProvider>
  );
};

export default ContactLayout;
