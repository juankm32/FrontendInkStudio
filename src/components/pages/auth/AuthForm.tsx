import RowComponent from "@/components/ui/RowComponent";
import { linkColors, secondaryTitle } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface Props {
  title: string;
  have: {
    label: string;
    linkLabel: string;
    href: string;
  };
  underSubmit?: React.ReactNode;
  children: React.ReactNode;
}

const AuthForm: FC<Readonly<Props>> = async ({
  title,
  underSubmit,
  have,
  children,
}) => {
  return (
    <div className="flex justify-center w-full max-w-8xl flex-1">
      <div className="container flex">
        <Image
          src="/images/AuthForm.jpg"
          alt="Form Banner"
          width={600}
          height={1000}
          className="hidden w-fit h-full object-cover lg:block"
        />
        <div className="flex-grow">
          <RowComponent className="flex flex-col items-center justify-center h-full gap-5">
            <h2 className={`${secondaryTitle} text-center uppercase`}>
              {title}
            </h2>
            {children}
            {underSubmit}
            <span>
              {have.label}{" "}
              <Link href={have.href} className={`${linkColors}`}>
                {have.linkLabel}
              </Link>
            </span>
          </RowComponent>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
