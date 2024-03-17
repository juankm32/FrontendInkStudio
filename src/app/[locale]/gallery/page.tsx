import GalleryFiltersBar from "@/components/pages/gallery/filtersBar/GalleryFiltersBar";
import { getGalleryContent } from "@/content";
import { mainTitleAdapt, transparentBg } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const GalleryPage: FC<Props> = ({ params: { locale }, searchParams }) => {
  const galleryContent = getGalleryContent(
    useTranslations("gallery.page"),
    locale
  );

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
          <h1 className={`${mainTitleAdapt} text-center uppercase`}>
            {galleryContent.title}
          </h1>
        </div>
      </div>
      <GalleryFiltersBar
        content={galleryContent.filters}
        searchParams={searchParams}
        locale={locale}
      />
    </main>
  );
};

export default GalleryPage;
