"use client";

import { AuthContext } from "@/components/context/Auth";
import UserIconFilled from "@/components/icons/UserIconFilled";
import type { HeaderContent } from "@/content/functions/types";
import { useGetContext } from "@/hooks";
import { btnColors } from "@/utils";
import { useEffect, useRef, useState, type FC } from "react";
import UserNav from "./UserNav";

interface Props {
  content: HeaderContent["buttons"];
}

const UserPopUp: FC<Props> = ({ content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useGetContext(AuthContext);
  const popUpRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative" ref={popUpRef}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <UserIconFilled
          username={user?.name}
          className="w-10 fill-neutral-400"
        />
      </button>
      {isOpen && (
        <nav className="flex flex-col text-center absolute top-full w-max mt-5 bg-primary-active rounded-lg animate-fadeInDown z-10">
          <UserNav
            buttons={content}
            className={`${btnColors} font-bold uppercase p-2 rounded-xl`}
          />
        </nav>
      )}
    </div>
  );
};

export default UserPopUp;
