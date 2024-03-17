import type { FC } from "react";
import type { Icon } from "./types";

const BackwardIcon: FC<Icon> = ({ fill, className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M245.458824 490.706824L671.442824 64.752941a30.117647 30.117647 0 0 1 42.586352 42.586353L309.368471 512l404.570353 404.570353a30.087529 30.087529 0 0 1 0.060235 42.646588 29.967059 29.967059 0 0 1-42.646588-0.030117L245.519059 533.323294a30.087529 30.087529 0 0 1-0.030118-42.61647z"
        fill={fill}
      />
    </svg>
  );
};

export default BackwardIcon;
