import GalleryCard from "@/components/cards/GalleryCard";
import DocDelimiter from "@/components/ui/DocDelimiter";
import { urls } from "@/settings";
import type { TattooSchema } from "@/settings/@types";
import { getData } from "@/utils";
import Link from "next/link";
import type { FC } from "react";

const { api } = urls;

interface Props {
  params: {
    locale: string;
    id: string;
  };
}

const ArtistGalleryPage: FC<Props> = async ({ params: { id, locale } }) => {
  const tattoos =
    (await getData<TattooSchema[]>(
      `${api.base}${api.tattoos.base}${api.tattoos.byUser}/${id}`
    ).catch(console.error)) || [];

  return (
    <DocDelimiter
      as="section"
      containerClassName="flex flex-wrap items-center justify-center gap-5"
    >
      {tattoos.map((tattoo) =>
        [tattoo.cover, ...tattoo.images].map(({ id, name, url }) => (
          <Link key={id} href={`/${locale}/publication/${tattoo.id}`}>
            <GalleryCard title={name} src={url ?? ""} />
          </Link>
        ))
      )}
    </DocDelimiter>
  );
};

export default ArtistGalleryPage;
