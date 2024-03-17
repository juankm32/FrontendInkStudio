import type { FC } from "react";
import type { Icon } from "./types";

const DownIcon: FC<Icon> = ({ fill, className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.644923 251.069046l471.355077 471.355077L983.355077 251.069046A23.809313 23.809313 0 0 1 1017.026297 284.740267l-488.190687 488.190687a23.809313 23.809313 0 0 1-33.67122 0L6.973703 284.740267A23.809313 23.809313 0 0 1 40.644923 251.069046z"
        fill={fill}
      />
    </svg>
  );
};

export default DownIcon;
