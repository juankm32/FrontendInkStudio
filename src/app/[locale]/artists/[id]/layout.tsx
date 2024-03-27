import ArtistCard from "@/components/cards/ArtistCard";
import ArtistNavBar from "@/components/pages/artist/ArtistNavBar";
import DocDelimiter from "@/components/ui/DocDelimiter";
import { getArtistContent } from "@/content/functions/artist";
import { urls } from "@/settings";
import type { UserSchema } from "@/settings/@types";
import { getData } from "@/utils";
import { getTranslations } from "next-intl/server";
import type { FC } from "react";

const { api } = urls;

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
    id: string;
  };
}

const ArtistLayout: FC<LayoutProps> = async ({
  children,
  params: { locale, id },
}) => {
  const artist =
    (await getData<UserSchema>(`${api.base}${api.users.base}/${id}`).catch(
      console.error
    )) || null;

  const artistContent = getArtistContent(
    await getTranslations("artist.page"),
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
