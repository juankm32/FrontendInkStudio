import GalleryCard from "@/components/cards/GalleryCard";
import PublicationModal from "@/components/modals/PublicationModal";
import GalleryFiltersBar from "@/components/pages/gallery/filtersBar/GalleryFiltersBar";
import useFiltersChange from "@/components/pages/gallery/useFiltersChange";
import BackdropFilter from "@/components/ui/BackdropFilter";
import DocDelimiter from "@/components/ui/DocDelimiter";
import { getGalleryContent } from "@/content";
import { findOnArray } from "@/lib";
import { urls } from "@/settings";
import type {
  BodyPartSchema,
  StyleSchema,
  TattooSchema,
  UserSchema,
} from "@/settings/@types";
import {
  getData,
  mainTitleAdapt,
  smoothTransition,
  transparentBg,
} from "@/utils";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const { domain, api } = urls;

interface Props {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const GalleryPage: FC<Props> = async ({ params: { locale }, searchParams }) => {
  const galleryContent = getGalleryContent(
    await getTranslations("gallery.page"),
    locale
  );

  const {
    styles,
    artists,
    bodyParts,
    publication: publicationId,
  } = searchParams;

  const pathname = `${domain}/${locale}/gallery`;

  // *----------------- STYLES -----------------* //

  const stylesData =
    (await getData<StyleSchema[]>(`${api.base}${api.styles.base}`).catch(
      console.error
    )) || [];

  // *----------------- ARTISTS -----------------* //

  const artistsData =
    (await getData<UserSchema[]>(
      `${api.base}${api.users.base}${api.users.designers}`
    ).catch(console.error)) || [];

  // *----------------- BODY PARTS -----------------* //

  const bodyPartsData =
    (await getData<BodyPartSchema[]>(`${api.base}${api.bodyParts.base}`).catch(
      console.error
    )) || [];

  const translatedBodyParts = bodyPartsData.map((part) => ({
    ...part,
    name:
      findOnArray(galleryContent.filters.bodyParts.content, {
        property: "name",
        value: part.name,
      })?.label || part.name,
  }));

  // *----------------- SEARCH -----------------* //

  const { searchParamsMap } = useFiltersChange({
    searchParams,
    styles: stylesData,
    artists: artistsData,
    translatedBodyParts,
  });

  const removeSearchParam = (type: string, id: string) => {
    const params = searchParamsMap.get(type);
    if (!params) return pathname;

    const searchParams = new URLSearchParams();

    Array.from(searchParamsMap).forEach(([key, values]) => {
      if (key !== type) {
        values.forEach((value) => {
          searchParams.append(value.type, value.id);
        });
      } else {
        const filterValues = values.filter(
          (param) => !(param.type === type && param.id === id)
        );

        filterValues.forEach((param) => {
          searchParams.append(param.type, param.id);
        });
      }
    });

    const updatedURL = `${pathname}?${searchParams.toString()}`;

    return updatedURL;
  };

  // *----------------- TATTOOS -----------------* //

  const url = `${api.base}${api.tattoos.base}${
    styles ? `${api.tattoos.byStyle}/${styles}` : ""
  }${artists ? `${api.tattoos.byUser}/${artists}` : ""}${
    bodyParts ? `${api.tattoos.byBodyPart}/${bodyParts}` : ""
  }`;

  const tattoos =
    (await getData<TattooSchema[]>(url).catch(console.error)) || [];

  const tattoo =
    (publicationId &&
      typeof publicationId === "string" &&
      findOnArray(tattoos, { property: "id", value: publicationId || "" })) ||
    null;

  return (
    <main className="flex flex-col items-center min-h-screen mb-20 gap-20">
      <div className="flex justify-center mx-auto w-full relative">
        <Image
          src={"/images/GalleryBackground.png"}
          alt="Studio background"
          width={600}
          height={600}
          className="h-semiScreen object-cover"
        />
        <div
          className={`${transparentBg} flex items-center justify-center w-full h-full absolute`}
        >
          <h2 className={`${mainTitleAdapt} text-center uppercase`}>
            {galleryContent.title}
          </h2>
        </div>
      </div>
      <GalleryFiltersBar
        content={galleryContent.filters}
        pathName={pathname}
        searchParamsMap={searchParamsMap}
        styles={stylesData}
        artists={artistsData}
        translatedBodyParts={translatedBodyParts}
        removeSearchParam={removeSearchParam}
      />
      <DocDelimiter
        as="section"
        containerClassName="flex flex-wrap items-center justify-center gap-5 h-screen custom-scroll overflow-y-auto"
      >
        {tattoos.map(({ id, name, cover }) => (
          <Link
            key={id}
            href={`/${locale}/gallery/?publication=${id}`}
            scroll={false}
            className={`${smoothTransition} hover:opacity-50`}
          >
            <GalleryCard title={name} src={cover?.url || ""} />
          </Link>
        ))}
      </DocDelimiter>

      {tattoo && (
        <BackdropFilter>
          <PublicationModal
            publication={tattoo}
            content={galleryContent.modal}
            closeHref={removeSearchParam("publication", tattoo.id)}
          />
        </BackdropFilter>
      )}
    </main>
  );
};

export default GalleryPage;
