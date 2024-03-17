"use client";

import { secondsToMs } from "@/lib";
import { smoothTransition } from "@/utils";
import Image from "next/image";
import { useEffect, useState, type FC } from "react";
import CarrouselCard from "../../cards/CarrouselCard";
import DocDelimiter from "../../ui/DocDelimiter";
import CarrouselDescription from "./CarrouselDescription";

interface Props {
  images: {
    id: string;
    title: string;
    description: string;
    url: string;
  }[];
  description: {
    show: boolean;
    seeMore?: {
      label: string;
      href: string;
    };
  };
  className?: string;
}

const Carrousel: FC<Props> = ({ images, description, className }) => {
  const [selected, setSelected] = useState<number>(0);

  // *---- HANDLES AUTO CHANGE ----* //

  const handleImgAutoChange = () => {
    setSelected((selected + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleImgAutoChange, secondsToMs(10));
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <DocDelimiter
      as="section"
      className={`${className || ""} h-semiScreen`}
      containerClassName="flex flex-col justify-between mx-3 lg:gap-10 lg:flex-row"
    >
      {images.map(({ id, url, title, description: imgDescription }, idx) => (
        <div
          key={id}
          className={`${
            idx !== selected && "hidden"
          } flex flex-grow relative h-2/3 lg:h-full`}
        >
          <Image
            src={url}
            alt={title}
            width={500}
            height={250}
            className="flex-grow object-cover animate-fadeIn lg:rounded-2xl"
          />
          {description.show && (
            <CarrouselDescription
              title={title}
              description={imgDescription}
              seeMore={
                description.seeMore && {
                  ...description.seeMore,
                  href: `${description.seeMore.href}/${id}`,
                }
              }
            />
          )}
        </div>
      ))}
      <div className="h-1/3 custom-scroll overflow-x-auto lg:h-full lg:overflow-y-auto">
        <div className="flex justify-between gap-3 h-full lg:flex-col">
          {images.map((image, idx) => (
            <button key={image.id} onClick={() => setSelected(idx)}>
              <CarrouselCard
                image={image}
                className={`${smoothTransition} ${
                  selected === idx && "bg-primary-focus"
                } hover:bg-primary-focus`}
              />
            </button>
          ))}
        </div>
      </div>
    </DocDelimiter>
  );
};

export default Carrousel;
