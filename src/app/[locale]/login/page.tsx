import LoginForm from "@/components/forms/login/LoginForm";
import AuthForm from "@/components/pages/auth/AuthForm";
import { getLoginContent } from "@/content/functions/login";
import { linkColors } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import type { FC } from "react";

interface Props {
  params: { locale: string };
}

const LoginPage: FC<Readonly<Props>> = ({ params: { locale } }) => {
  const loginContent = getLoginContent(useTranslations("login.page"), locale);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <AuthForm
        title={loginContent.title}
        underSubmit={
          <Link
            href={`/${locale}/forgotPassword`}
            className={`${linkColors} text-sm`}
          >
            {loginContent.forgotPassword}
          </Link>
        }
        have={{
          label: loginContent.noAccount.label,
          linkLabel: loginContent.noAccount.linkLabel,
          href: `/${locale}/register`,
        }}
      >
        <LoginForm content={loginContent.form} />
      </AuthForm>
    </main>
  );
};

export default LoginPage;
