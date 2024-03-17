import ArtistCard from "@/components/cards/ArtistCard";
import ArtistNavBar from "@/components/pages/artist/ArtistNavBar";
import DocDelimiter from "@/components/ui/DocDelimiter";
import { getArtistContent } from "@/content/functions/artist";
import { usersDevelopment } from "@/development";
import { findOnArray } from "@/lib";
import { useTranslations } from "next-intl";
import type { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
    id: string;
  };
}

const ArtistLayout: FC<LayoutProps> = ({
  children,
  params: { locale, id },
}) => {
  const artist = findOnArray(usersDevelopment, {
    property: "id",
    value: id,
  });

  const artistContent = getArtistContent(
    useTranslations("artist.page"),
    locale
  );

  return (
    <main className="flex flex-col items-center min-h-screen my-20 gap-20">
      <DocDelimiter containerClassName="flex flex-col">
        {artist && <ArtistCard artist={artist} mainTitle as="div" />}
      </DocDelimiter>
      <ArtistNavBar content={artistContent.nav} id={id} />
      {children}
    </main>
  );
};

export default ArtistLayout;
