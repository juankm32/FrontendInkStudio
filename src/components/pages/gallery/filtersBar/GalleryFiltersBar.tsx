import CloseIcon from "@/components/icons/CloseIcon";
import HandIcon from "@/components/icons/HandIcon";
import PaintBrushIcon from "@/components/icons/PaintBrushIcon";
import UserIcon from "@/components/icons/UserIcon";
import FilterDropdown from "@/components/list/FilterDropdown";
import DocDelimiter from "@/components/ui/DocDelimiter";
import GradientBorder from "@/components/ui/GradientBorder";
import Separator from "@/components/ui/Separator";
import type { GalleryContent } from "@/content/functions/types";
import {
  bodyPartsDevelopment,
  stylesDevelopment,
  usersDevelopment,
} from "@/development";
import { findOnArray } from "@/lib";
import { urls } from "@/settings";
import { btnMd } from "@/utils";
import Link from "next/link";
import type { FC } from "react";
import useFiltersChange from "./useFiltersChange";

const { domain } = urls;

interface Props {
  content: GalleryContent["filters"];
  searchParams: { [key: string]: string | string[] | undefined };
  locale: string;
}

const GalleryFiltersBar: FC<Props> = ({ content, searchParams, locale }) => {
  const translatedBodyParts = bodyPartsDevelopment.map((part) => ({
    ...part,
    name:
      findOnArray(content.bodyParts.content, {
        property: "name",
        value: part.name,
      })?.label || part.name,
  }));

  const { searchParamsMap } = useFiltersChange(
    searchParams,
    translatedBodyParts
  );

  const pathname = `${domain}/${locale}/gallery`;

  const removeSearchParam = (type: string, id: string) => {
    const params = searchParamsMap.get(type);
    if (!params) return pathname as string;

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

  return (
    <div className="flex flex-col w-full gap-5">
      <DocDelimiter containerClassName="flex flex-col items-center gap-10 lg:flex-row lg:justify-start">
        <FilterDropdown
          icon={<PaintBrushIcon className="w-8" />}
          title={content.styles.title}
          items={stylesDevelopment.map((style) => ({
            id: "styles",
            value: style.id,
            label: style.name,
          }))}
          className={`${btnMd} bg-primary-black flex items-center justify-center gap-5 m-0.5 w-64 lg:w-fit`}
          borderClassName="rounded-3xl"
        />
        <FilterDropdown
          icon={<UserIcon className="w-8" />}
          title={content.artists.title}
          items={usersDevelopment.map(({ id, firstName, lastName }) => ({
            id: "artists",
            label: `${firstName} ${lastName}`,
            value: id,
          }))}
          className={`${btnMd} bg-primary-black flex items-center justify-center gap-5 m-0.5 w-64 lg:w-fit`}
          borderClassName="rounded-3xl"
        />
        <FilterDropdown
          icon={<HandIcon className="w-8" />}
          title={content.bodyParts.title}
          items={translatedBodyParts.map((part) => ({
            id: "bodyParts",
            value: part.id,
            label: part.name,
          }))}
          className={`${btnMd} bg-primary-black flex items-center justify-center gap-5 m-0.5 w-64 lg:w-fit`}
          borderClassName="rounded-3xl"
        />
      </DocDelimiter>
      <Separator className="h-0.5 w-full bg-gradient-to-r from-primary-fromGradient via-primary-toGradient via-30% to-secondary-toGradient" />
      <DocDelimiter containerClassName="flex gap-5">
        {Array.from(searchParamsMap).map(([key, value]) =>
          value.map(({ id, label }) => (
            <GradientBorder key={id} className="rounded-3xl">
              <div className="flex items-center gap-2 bg-primary-black m-0.5 rounded-3xl py-1 px-2 capitalize">
                {label}
                <Link href={removeSearchParam(key, id)} scroll={false}>
                  <CloseIcon className="w-5" />
                </Link>
              </div>
            </GradientBorder>
          ))
        )}
        {searchParamsMap.size > 0 && (
          <GradientBorder className="rounded-3xl">
            <div className="flex items-center gap-2 bg-primary-bgD m-0.5 rounded-3xl py-1 px-2 capitalize">
              {content.clearAll}
              <Link href={pathname} scroll={false}>
                <CloseIcon className="w-5" />
              </Link>
            </div>
          </GradientBorder>
        )}
      </DocDelimiter>
    </div>
  );
};

export default GalleryFiltersBar;
