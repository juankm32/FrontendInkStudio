"use client";

import AppIcon from "@/components/icons/AppIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import type { HeaderContent } from "@/content/functions/types";
import { btnAccentColors, btnColors, btnSm } from "@/utils";
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";
import BarsIcon from "../../icons/BarsIcon";
import DocDelimiter from "../DocDelimiter";
import RowComponent from "../RowComponent";

interface Props {
  content: HeaderContent["navigation"];
}

const Navigation: FC<Props> = ({ content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <BarsIcon className="w-10" />
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-primary-bgD z-10 transition-transform transform delay-75 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <DocDelimiter className="h-full" containerClassName="relative h-full">
          <AppIcon className="hidden lg:block absolute w-1/3 top-1/2 left-1/3 transform translate-x-full -translate-y-1/2" />
          <RowComponent className="flex flex-col items-center my-5 gap-10 h-full">
            <button className="self-end" onClick={() => setIsOpen(false)}>
              <CloseIcon className="w-10" />
            </button>
            <div className="flex flex-col items-center justify-center gap-20 h-full">
              <nav className="flex flex-col gap-5 w-60 font-bold text-2xl">
                {content.map(({ id, href, label }) => (
                  <Link
                    onClick={() => setIsOpen(false)}
                    key={id}
                    href={href}
                    className={`${
                      id === "home" ? btnAccentColors : btnColors
                    } ${btnSm}`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </RowComponent>
        </DocDelimiter>
      </div>
    </>
  );
};

export default Navigation;
