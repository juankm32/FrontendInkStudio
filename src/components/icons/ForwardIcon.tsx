import type { FC } from "react";
import type { Icon } from "./types";

const ForwardIcon: FC<Icon> = ({ fill, className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M778.541176 490.706824L352.557176 64.752941a30.117647 30.117647 0 0 0-42.586352 42.586353L714.631529 512 310.061176 916.570353a30.087529 30.087529 0 0 0-0.060235 42.646588 29.967059 29.967059 0 0 0 42.646588-0.030117l425.833412-425.86353a30.087529 30.087529 0 0 0 0.030118-42.61647z"
        fill={fill}
      />
    </svg>
  );
};

export default ForwardIcon;
