import DocDelimiter from "@/components/ui/DocDelimiter";
import { tattoosDevelopment } from "@/development";
import { filterOnArray } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

interface Props {
  params: {
    locale: string;
    id: string;
  };
}

const ArtistGalleryPage: FC<Props> = ({ params: { id, locale } }) => {
  const images = filterOnArray(tattoosDevelopment, {
    property: "artistId",
    value: id,
  });

  return (
    <DocDelimiter
      as="section"
      containerClassName="flex flex-wrap items-center justify-center gap-5"
    >
      {images.map(({ id, title, image }) => (
        <Link key={id} href={`/${locale}/publication/${id}`}>
          <Image
            src={image}
            alt={title}
            width={250}
            height={500}
            className="w-fit object-cover rounded-xl"
          />
        </Link>
      ))}
    </DocDelimiter>
  );
};

export default ArtistGalleryPage;
