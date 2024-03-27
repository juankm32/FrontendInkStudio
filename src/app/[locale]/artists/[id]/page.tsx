import PublicationCard from "@/components/cards/PublicationCard";
import PublicationModal from "@/components/modals/PublicationModal";
import BackdropFilter from "@/components/ui/BackdropFilter";
import DocDelimiter from "@/components/ui/DocDelimiter";
import { getArtistContent } from "@/content/functions/artist";
import { findOnArray } from "@/lib";
import { urls } from "@/settings";
import type { TattooSchema } from "@/settings/@types";
import { getData } from "@/utils";
import { getTranslations } from "next-intl/server";
import type { FC } from "react";

const { api } = urls;

interface Props {
  params: {
    locale: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ArtistPublications: FC<Props> = async ({
  params: { id, locale },
  searchParams,
}) => {
  const publicationId = searchParams.publication;

  const artistContent = getArtistContent(await getTranslations("artist.page"));

  const tattoos =
    (await getData<TattooSchema[]>(
      `${api.base}${api.tattoos.base}${api.tattoos.byUser}/${id}`
    ).catch(console.error)) || [];

  const publication =
    (publicationId &&
      typeof publicationId === "string" &&
      findOnArray(tattoos, { property: "id", value: publicationId })) ||
    null;

  return (
    <>
      <DocDelimiter
        as="section"
        containerClassName="flex flex-wrap items-center justify-center gap-5"
      >
        {tattoos.map((tattoo) => (
          <PublicationCard
            key={tattoo.id}
            publication={tattoo}
            href={`/${locale}/artists/${id}`}
          />
        ))}
      </DocDelimiter>

      {publication && (
        <BackdropFilter>
          <PublicationModal
            content={artistContent.publication}
            publication={publication}
            closeHref={`/${locale}/artists/${id}`}
          />
        </BackdropFilter>
      )}
    </>
  );
};

export default ArtistPublications;
