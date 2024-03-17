import type { FC } from "react";
import type { Icon } from "./types";

const UpIcon: FC<Icon> = ({ fill, className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M983.355077 772.930954l-471.355077-471.355077L40.644923 772.930954A23.809313 23.809313 0 0 1 6.973703 739.259733l488.190687-488.190687a23.809313 23.809313 0 0 1 33.67122 0L1017.026297 739.259733A23.809313 23.809313 0 0 1 983.355077 772.930954z"
        fill={fill}
      />
    </svg>
  );
};

export default UpIcon;
