import { modalColors, modalSm } from "@/utils";
import type { FC } from "react";
import ErrorIcon from "../icons/ErrorIcon";
import SuccessIcon from "../icons/SuccessIcon";
import GradientBorder from "../ui/GradientBorder";

interface Props {
  children: React.ReactNode;
  success?: boolean;
}

const AlertModal: FC<Props> = ({ children, success }) => {
  return (
    <GradientBorder className="rounded-xl">
      <div
        className={`${modalColors} ${modalSm} flex flex-col items-center justify-center m-0.5 p-2 rounded-xl`}
      >
        {success ? (
          <SuccessIcon className="w-40 fill-primary-active" />
        ) : (
          <ErrorIcon fill="red" className="w-40" />
        )}
        {children}
      </div>
    </GradientBorder>
  );
};

export default AlertModal;
