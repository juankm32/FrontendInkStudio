import { stylesDevelopment } from "@/development";
import { filterOnArray } from "@/lib";
import type { TattooSchema } from "@/settings/@types";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import HeartIcon from "../icons/HeartIcon";
import ThreePointsIcon from "../icons/ThreePointsIcon";
import GradientBorder from "../ui/GradientBorder";
import StyleSmallCard from "./StyleSmallCard";

interface Props {
  publication: TattooSchema;
  locale: string;
}

const PublicationCard: FC<Props> = ({ publication, locale }) => {
  return (
    <GradientBorder key={publication.id} className="rounded-xl">
      <article className="flex flex-col items-center justify-between rounded-xl m-0.5 bg-primary-bgD w-60 h-96">
        <div className="relative w-full flex flex-col h-2/3">
          <Image
            src={publication.image}
            alt={publication.title}
            width={250}
            height={200}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <button className="absolute right-0">
            <ThreePointsIcon className="w-10" />
          </button>
          <button className="absolute bottom-0 right-0">
            <HeartIcon fill="white" className="w-10" />
          </button>
        </div>
        <div className="flex flex-col items-center text-center gap-3 m-3">
          <h4 className="uppercase hover:opacity-50">
            <Link href={`/${locale}/publication/${publication.id}`}>
              {publication.title}
            </Link>
          </h4>
          <p className="text-sm font-bold line-clamp-2">
            {publication.description}
          </p>
          <div className="flex flex-wrap">
            {filterOnArray(stylesDevelopment, {
              property: "id",
              value: publication.styleId,
            }).map((style) => (
              <StyleSmallCard key={style.id} styleName={style.name} />
            ))}
          </div>
        </div>
      </article>
    </GradientBorder>
  );
};

export default PublicationCard;
