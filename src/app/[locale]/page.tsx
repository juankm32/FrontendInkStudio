import Carrousel from "@/components/gallery/carrousel/Carrousel";
import HomeStylesDisplay from "@/components/pages/home/HomeStylesDisplay";
import { getHomeContent } from "@/content";
import { limitArray } from "@/lib";
import { urls } from "@/settings";
import type { StyleSchema, TattooSchema, UserSchema } from "@/settings/@types";
import { getData } from "@/utils";
import { random } from "lodash";
import { getTranslations } from "next-intl/server";
import type { FC } from "react";

const { api } = urls;

interface Props {
  params: { locale: string };
}

const Home: FC<Props> = async ({ params: { locale } }) => {
  const homeContent = getHomeContent(
    await getTranslations("home.page"),
    locale
  );

  const { carrousel, gallery } = homeContent;

  const artists = await getData<UserSchema[]>(
    `${api.base}${api.users.base}${api.users.designers}`
  ).catch(console.error);

  const images =
    (artists &&
      limitArray(artists, 5).map(
        ({ id, name, lastname, biography, profile }) => ({
          id,
          title: `${name} ${lastname}`,
          description: biography || "",
          url: profile?.url || "",
        })
      )) ||
    [];

  const styles = await getData<StyleSchema[]>(
    `${api.base}${api.styles.base}`
  ).catch(console.error);

  const randomNumber = styles && random(0, styles.length);
  const initialStyle = randomNumber && styles[randomNumber];

  const initialTattoos =
    initialStyle &&
    (await getData<TattooSchema[]>(
      `${api.base}${api.tattoos.base}${api.tattoos.byStyle}/${initialStyle.id}`
    ));

  return (
    <main className="flex flex-col items-center min-h-screen my-20 gap-20">
      {(artists && (
        <Carrousel
          images={images}
          description={{
            show: true,
            seeMore: {
              label: carrousel.description.viewMore,
              href: `/${locale}/artist`,
            },
          }}
        />
      )) ||
        null}
      {styles && initialStyle && initialTattoos ? (
        <HomeStylesDisplay
          content={gallery}
          locale={locale}
          styles={styles}
          initialStyle={initialStyle}
          initialTattoos={initialTattoos}
        />
      ) : null}
    </main>
  );
};

export default Home;
