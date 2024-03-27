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
  href: string;
}

const PublicationCard: FC<Props> = ({ publication, href }) => {
  const { id, name, cover, styles } = publication;

  return (
    <GradientBorder key={publication.id} className="rounded-xl">
      <article className="flex flex-col items-center justify-between rounded-xl m-0.5 bg-primary-bgD w-60 h-100">
        <div className="relative w-full flex flex-col h-2/3">
          <Image
            src={cover?.url || ""}
            alt={name}
            width={250}
            height={200}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <Link href={`${href}?publication=${id}`} className="absolute right-0">
            <ThreePointsIcon className="w-10" />
          </Link>
          <button className="absolute bottom-0 right-0">
            <HeartIcon fill="white" className="w-10" />
          </button>
        </div>
        <div className="flex flex-col items-center text-center gap-3 m-3">
          <h4 className="uppercase">{name}</h4>
          <p className="text-sm font-bold line-clamp-2">
            {publication.description}
          </p>
          <div className="flex flex-wrap">
            {styles.map(({ id, name }) => (
              <StyleSmallCard key={id} styleName={name} />
            ))}
          </div>
        </div>
      </article>
    </GradientBorder>
  );
};

export default PublicationCard;
