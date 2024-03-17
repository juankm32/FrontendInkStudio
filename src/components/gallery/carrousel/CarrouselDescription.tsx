import { capitalizeFirst } from "@/lib";
import { btnAccentColors, btnSm } from "@/utils";
import Link from "next/link";
import type { FC } from "react";

interface Props {
  title: string;
  description: string;
  seeMore?: {
    label: string;
    href: string;
  };
}

const CarrouselDescription: FC<Readonly<Props>> = ({
  title,
  description,
  seeMore,
}) => {
  return (
    <div className="absolute max-h-3/4 w-full bottom-0 bg-gradient-to-t from-gray-800 to-transparent lg:left-0 lg:max-w-1/2 lg:h-full lg:rounded-2xl lg:max-h-full lg:bg-gradient-to-r">
      <div className="flex flex-col items-start justify-center h-full p-3 gap-5 text-left">
        <p className="capitalize text-4xl">{title}</p>
        <p className="line-clamp-3 max-h-1/6 lg:max-h-full lg:line-clamp-none">
          {capitalizeFirst(description)}
        </p>
        {seeMore && (
          <Link href={seeMore.href} className={`${btnAccentColors} ${btnSm}`}>
            {seeMore.label}
          </Link>
        )}
      </div>
    </div>
  );
};

export default CarrouselDescription;
