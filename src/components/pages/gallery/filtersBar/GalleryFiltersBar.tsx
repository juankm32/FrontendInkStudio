import CloseIcon from "@/components/icons/CloseIcon";
import HandIcon from "@/components/icons/HandIcon";
import PaintBrushIcon from "@/components/icons/PaintBrushIcon";
import UserIcon from "@/components/icons/UserIcon";
import FilterDropdown from "@/components/list/FilterDropdown";
import DocDelimiter from "@/components/ui/DocDelimiter";
import GradientBorder from "@/components/ui/GradientBorder";
import Separator from "@/components/ui/Separator";
import type { GalleryContent } from "@/content/functions/types";
import type {
  BodyPartSchema,
  StyleSchema,
  UserSchema,
} from "@/settings/@types";
import { btnMd } from "@/utils";
import Link from "next/link";
import type { FC } from "react";
import type { Param } from "../useFiltersChange";

interface Props {
  content: GalleryContent["filters"];
  pathName: string;
  searchParamsMap: Map<string, Param[]>;
  styles: StyleSchema[];
  artists: UserSchema[];
  translatedBodyParts: BodyPartSchema[];
  removeSearchParam: (type: string, id: string) => string;
}

const GalleryFiltersBar: FC<Props> = async ({
  content,
  pathName,
  searchParamsMap,
  styles,
  artists,
  translatedBodyParts,
  removeSearchParam,
}) => {
  return (
    <div className="flex flex-col w-full gap-5">
      <DocDelimiter containerClassName="flex flex-col items-center gap-10 lg:flex-row lg:justify-start">
        <FilterDropdown
          icon={<PaintBrushIcon className="w-8" />}
          title={content.styles.title}
          items={styles.map((style) => ({
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
          items={artists.map(({ id, name, lastname }) => ({
            id: "artists",
            label: `${name} ${lastname}`,
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
      <DocDelimiter containerClassName="flex gap-5 flex-wrap justify-center lg:justify-start">
        {Array.from(searchParamsMap).map(
          ([key, value]) =>
            (key === "styles" || key === "artists" || key === "bodyParts") &&
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
        {(searchParamsMap.has("styles") ||
          searchParamsMap.has("artists") ||
          searchParamsMap.has("bodyParts")) && (
          <GradientBorder className="rounded-3xl">
            <div className="flex items-center gap-2 bg-primary-bgD m-0.5 rounded-3xl py-1 px-2 capitalize">
              {content.clearAll}
              <Link href={pathName} scroll={false}>
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
