import type { FC } from "react";

interface Props {
  className?: string;
}

const Separator: FC<Props> = ({ className }) => {
  return <div className={`${className}`}></div>;
};

export default Separator;
