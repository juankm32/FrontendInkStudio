import type { FC } from "react";
import React from "react";

// *-------- THIS COMPONENT SEPARATES CONTENT FROM BORDERS --------* //

interface Props {
  as?: React.ElementType;
  className?: string;
  children: Readonly<React.ReactNode>;
}

const RowComponent: FC<Props> = ({
  as: Element = "div",
  className,
  children,
}) => {
  return (
    <Element className={`row mx-3 ${className || ""}`}>{children}</Element>
  );
};

export default RowComponent;
