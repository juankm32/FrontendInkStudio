"use client";

import Dropdown from "@/components/list/Dropdown";
import Slider from "@/components/list/Slider";
import DocDelimiter from "@/components/ui/DocDelimiter";
import type { HomeContent } from "@/content/functions/types";
import { useGetData } from "@/hooks";
import { findOnArray } from "@/lib";
import { urls } from "@/settings";
import type { StyleSchema, TattooSchema } from "@/settings/@types";
import {
  btnAccentColors,
  btnSm,
  secondaryTitle,
  smoothTransition,
} from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FC } from "react";

const { api } = urls;

interface Props {
  styles: StyleSchema[];
  initialStyle: StyleSchema;
  initialTattoos: TattooSchema[];
  content: HomeContent["gallery"];
  locale: string;
}

const HomeStylesDisplay: FC<Props> = ({
  styles,
  initialStyle,
  initialTattoos,
  content,
  locale,
}) => {
  const [selectedStyle, setSelectedStyle] = useState<StyleSchema>(initialStyle);
  const [initial, setInitial] = useState<boolean>(true);

  const getSelected = (value: string) => {
    const style = findOnArray(styles, { property: "id", value });
    style && setSelectedStyle(style);
  };

  const { data: tattoos } = useGetData<TattooSchema[]>(
    `${api.base}${api.tattoos.base}${api.tattoos.byStyle}/${selectedStyle.id}`,
    { condition: !initial }
  );

  useEffect(() => {
    selectedStyle.id !== initialStyle.id && setInitial(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStyle]);

  return (
    <section className="flex flex-col items-center gap-5 w-full">
      <h2 className={secondaryTitle}>{content.title}</h2>
      <DocDelimiter containerClassName="flex flex-col items-center gap-5">
        <Dropdown
          title={(selectedStyle && selectedStyle.name) || ""}
          items={styles.map(({ id, name }) => ({
            value: id,
            label: name,
          }))}
          getSelected={getSelected}
          className="lg:self-start"
        />
        <Slider>
          {(tattoos ? tattoos : initialTattoos).map(({ id, name, cover }) => (
            <Link
              key={id}
              href={`/${locale}/tattoo/${id}`}
              className={`${smoothTransition} w-52 h-72 hover:opacity-75`}
            >
              <Image
                src={cover?.url || ""}
                alt={name}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-xl"
              />
            </Link>
          ))}
        </Slider>
        <Link
          href={`/${locale}/gallery?style=${selectedStyle.id}`}
          className={`${btnAccentColors} ${btnSm} w-40`}
        >
          {content.viewMore}
        </Link>
      </DocDelimiter>
    </section>
  );
};

export default HomeStylesDisplay;
