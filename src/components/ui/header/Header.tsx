import { APP_NAME } from "@/content";
import type { HeaderContent } from "@/content/functions/types";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import DocDelimiter from "../DocDelimiter";
import RowComponent from "../RowComponent";
import Navigation from "./Navigation";
import UserPopUp from "./UserPopUp";

interface Props {
  content: HeaderContent;
}

const Header: FC<Props> = ({ content }) => {
  return (
    <DocDelimiter as="header" className="bg-primary-bgD">
      <RowComponent className="flex justify-between items-center my-2">
        <Link href="/" className="flex items-center gap-5">
          <Image
            src="/images/app_logo.png"
            alt="App logo"
            width={40}
            height={40}
            className="w-fit"
          />
          <h1 className="hidden capitalize text-tertiaryTitle lg:block">
            {APP_NAME}
          </h1>
        </Link>

        <div className="flex items-center justify-center gap-5">
          <UserPopUp content={content.buttons} />
          <Navigation content={content.navigation} />
        </div>
      </RowComponent>
    </DocDelimiter>
  );
};

export default Header;
