import { smoothTransition } from "@/utils";
import { useRef, type FC } from "react";
import BackwardIcon from "../icons/BackwardIcon";
import ForwardIcon from "../icons/ForwardIcon";

interface Props {
  children: React.ReactNode;
}

const Slider: FC<Readonly<Props>> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollPage = (direction: "forward" | "backward") => {
    const container = containerRef.current;
    if (!container) return;

    const pageWidth = container.clientWidth;
    const scrollAmount = direction === "forward" ? pageWidth : -pageWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex items-center">
      <button
        onClick={() => scrollPage("backward")}
        className={`${smoothTransition} hidden hover:opacity-50 lg:block`}
      >
        <BackwardIcon className="w-20" fill="white" />
      </button>
      <div
        ref={containerRef}
        className="flex justify-center w-full overflow-x-auto custom-scroll lg:overflow-hidden"
      >
        <div className="flex gap-5 w-fit">{children}</div>
      </div>
      <button
        onClick={() => scrollPage("forward")}
        className={`${smoothTransition} hidden hover:opacity-50 lg:block`}
      >
        <ForwardIcon className="w-20" fill="white" />
      </button>
    </div>
  );
};

export default Slider;
