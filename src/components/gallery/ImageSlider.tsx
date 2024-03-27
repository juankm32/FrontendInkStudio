"use client";

import Image from "next/image";
import { useState } from "react";
import BackwardIcon from "../icons/BackwardIcon";
import ForwardIcon from "../icons/ForwardIcon";

interface Props {
  images: {
    title: string;
    url: string;
  }[];
  className?: string;
  width: number;
  height: number;
}

const ImageSlider: React.FC<Props> = ({
  images,
  className = "",
  width,
  height,
}) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className={`${className} relative flex items-center justify-between`}>
      <button
        onClick={() =>
          setSelected((prev) => (prev === 0 ? images.length - 1 : prev + 1))
        }
        className="hidden lg:block hover:opacity-50"
      >
        <BackwardIcon className="w-20 fill-white" />
      </button>
      {images.map(({ title, url }, idx) => (
        <Image
          key={idx}
          src={url ?? ""}
          alt={title}
          width={width}
          height={height}
          className={`${
            selected === idx ? "block" : "hidden"
          } w-fit object-cover`}
        />
      ))}
      <button
        onClick={() => setSelected((prev) => (prev + 1) % images.length)}
        className="hidden lg:block hover:opacity-50"
      >
        <ForwardIcon className="w-20 fill-white" />
      </button>
    </div>
  );
};

export default ImageSlider;
