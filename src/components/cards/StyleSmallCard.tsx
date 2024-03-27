import type { FC } from "react";
import GradientBorder from "../ui/GradientBorder";

interface Props {
  as?: React.ElementType;
  styleName: string;
}

const StyleSmallCard: FC<Props> = ({ as: Element = "div", styleName }) => {
  return (
    <GradientBorder as={Element as string} className="rounded-lg">
      <div className="capitalize text-sm m-0.5 rounded-lg bg-primary-bgD px-2">
        {styleName}
      </div>
    </GradientBorder>
  );
};

export default StyleSmallCard;
