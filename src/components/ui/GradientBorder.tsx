import { createElement, type FC } from "react";

interface Props extends React.HTMLProps<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const GradientBorder: FC<Props> = ({
  as: Element = "div",
  children,
  className,
  ...rest
}) => {
  return createElement(
    Element,
    {
      className: `${className} bg-gradient-to-t from-primary-fromGradient to-primary-toGradient`,
      ...rest,
    },
    children
  );
};

export default GradientBorder;
