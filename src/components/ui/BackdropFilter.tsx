"use client";

import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const BackdropFilter = ({ children, className = "" }: Props) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      className={`${className} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-950/40 backdrop-blur`}
    >
      {children}
    </div>
  );
};

export default BackdropFilter;
