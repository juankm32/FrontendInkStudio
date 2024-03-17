import type { FC } from "react";
import React from "react";

// *-------- THIS COMPONENT LIMITS PAGE BORDERS --------* //

interface Props {
  as?: React.ElementType;
  children: Readonly<React.ReactNode>;
  className?: string;
  containerClassName?: string;
}

const DocDelimiter: FC<Props> = ({
  as: Element = "div",
  children,
  className,
  containerClassName,
}) => {
  return (
    <Element
      className={`${
        className?.includes("hidden") ? "hidden" : "flex"
      } justify-center mx-auto w-full max-w-8xl ${className || ""}`}
    >
      <div className={`container ${containerClassName || ""}`}>{children}</div>
    </Element>
  );
};

export default DocDelimiter;
