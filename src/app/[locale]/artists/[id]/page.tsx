import PublicationCard from "@/components/cards/PublicationCard";
import DocDelimiter from "@/components/ui/DocDelimiter";
import { tattoosDevelopment } from "@/development";
import { filterOnArray } from "@/lib";
import type { FC } from "react";

interface Props {
  params: {
    locale: string;
    id: string;
  };
}

const ArtistPublications: FC<Props> = ({ params: { id, locale } }) => {
  const publications = filterOnArray(tattoosDevelopment, {
    property: "artistId",
    value: id,
  });

  return (
    <DocDelimiter
      as="section"
      containerClassName="flex flex-wrap items-center justify-center gap-5"
    >
      {publications.map((publication) => (
        <PublicationCard
          key={publication.id}
          publication={publication}
          locale={locale}
        />
      ))}
    </DocDelimiter>
  );
};

export default ArtistPublications;
