import type { FC } from "react";
import GradientBorder from "../ui/GradientBorder";

interface Props {
  styleName: string;
}

const StyleSmallCard: FC<Props> = ({ styleName }) => {
  return (
    <GradientBorder className="rounded-lg">
      <div className="capitalize text-sm m-0.5 rounded-lg bg-primary-bgD px-2">
        {styleName}
      </div>
    </GradientBorder>
  );
};

export default StyleSmallCard;
