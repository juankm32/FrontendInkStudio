import AuthContextProvider from "@/components/context/Auth";
import GlobalContextProvider from "@/components/context/Global";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/header/Header";
import { getFooterContent, getHeaderContent } from "@/content";
import { urls } from "@/settings";
import type { UserSchema } from "@/settings/@types";
import { getData } from "@/utils";
import { getCookie } from "@/utils/server";
import { getTranslations } from "next-intl/server";
import { Inter } from "next/font/google";
import type { FC } from "react";
import "./globals.css";

const { api } = urls;

interface MetaProps {
  params: {
    locale: string;
  };
}

export const generateMetadata = async ({ params: { locale } }: MetaProps) => {
  const base = await getTranslations({ locale, namespace: "Metadata" });
  const home = await getTranslations({ locale, namespace: "home.metadata" });

  return {
    title: `${base("title")} ${home("title")}`,
  };
};

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const RootLayout: FC<Readonly<LayoutProps>> = async ({
  children,
  params: { locale },
}) => {
  const headerContent = getHeaderContent(
    await getTranslations("header"),
    locale
  );
  const footerContent = getFooterContent(
    await getTranslations("footer"),
    locale
  );

  const token = (await getCookie("session").then((res) => res?.value)) || null;
  const user =
    (token &&
      (await getData<UserSchema>(
        `${api.base}${api.users.base}${api.users.byToken}/${token}`
      ).catch(console.error))) ||
    null;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <GlobalContextProvider>
          <AuthContextProvider token={token} user={user}>
            <Header content={headerContent} />
            {children}
            <Footer content={footerContent} locale={locale} />
          </AuthContextProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
