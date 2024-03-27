import ArtistCard from "@/components/cards/ArtistCard";
import DocDelimiter from "@/components/ui/DocDelimiter";
import { getArtistsContent } from "@/content/functions/artists";
import { urls } from "@/settings";
import type { UserSchema } from "@/settings/@types";
import { getData, mainTitleAdapt, transparentBg } from "@/utils";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import type { FC } from "react";

const { api } = urls;

interface Props {
  params: { locale: string };
}

const ArtistsPage: FC<Props> = async ({ params: { locale } }) => {
  const artistsContent = getArtistsContent(
    await getTranslations("artists.page"),
    locale
  );

  const artists =
    (await getData<UserSchema[]>(
      `${api.base}${api.users.base}${api.users.designers}`
    ).catch(console.error)) || [];

  return (
    <main className="flex flex-col items-center min-h-screen mb-20 gap-20">
      <div className="flex justify-center mx-auto w-full relative">
        <Image
          src={"/images/ArtistsBackground.jpeg"}
          alt="Studio background"
          width={3000}
          height={1500}
          className="w-full h-semiScreen object-cover"
        />
        <div
          className={`${transparentBg} flex items-center justify-center w-full h-full absolute`}
        >
          <h1 className={`${mainTitleAdapt} text-center uppercase`}>
            {artistsContent.title}
          </h1>
        </div>
      </div>
      <DocDelimiter as="section" containerClassName="flex flex-col gap-10">
        {artists.map((user) => (
          <ArtistCard key={user.id} artist={user} hover />
        ))}
      </DocDelimiter>
    </main>
  );
};

export default ArtistsPage;
