import RegisterForm from "@/components/forms/register/RegisterForm";
import AuthForm from "@/components/pages/auth/AuthForm";
import { getRegisterContent } from "@/content";
import { useTranslations } from "next-intl";
import type { FC } from "react";

interface Props {
  params: { locale: string };
}

const RegisterPage: FC<Readonly<Props>> = ({ params: { locale } }) => {
  const registerContent = getRegisterContent(
    useTranslations("register.page"),
    locale
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <AuthForm
        title={registerContent.title}
        have={{
          label: registerContent.haveAccount.label,
          linkLabel: registerContent.haveAccount.linkLabel,
          href: `/${locale}/login`,
        }}
      >
        <RegisterForm content={registerContent.form} />
      </AuthForm>
    </main>
  );
};

export default RegisterPage;
