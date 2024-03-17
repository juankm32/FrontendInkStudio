import { getTranslations } from "next-intl/server";
import type React from "react";
import type { FC } from "react";

interface MetaProps {
  params: {
    locale: string;
  };
}

export const generateMetadata = async ({ params: { locale } }: MetaProps) => {
  const base = await getTranslations({ locale, namespace: "Metadata" });
  const contact = await getTranslations({ locale, namespace: "contact.metadata" });

  return {
    title: `${base("title")} ${contact("title")}`,
  };
};

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const ContactLayout: FC<Readonly<LayoutProps>> = ({ children }) => {
  return children;
};

export default ContactLayout;
