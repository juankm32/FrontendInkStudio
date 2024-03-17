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
  const gallery = await getTranslations({
    locale,
    namespace: "gallery.metadata",
  });

  return {
    title: `${base("title")} ${gallery("title")}`,
  };
};

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const GalleryLayout: FC<Readonly<LayoutProps>> = ({ children }) => {
  return children;
};

export default GalleryLayout;
