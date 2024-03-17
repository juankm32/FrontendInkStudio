import { stylesDevelopment } from "@/development";
import { findOnArray } from "@/lib";
import type { UserSchema } from "@/settings/@types";
import { tertiaryTitle } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import GradientBorder from "../ui/GradientBorder";
import RowComponent from "../ui/RowComponent";
import StyleSmallCard from "./StyleSmallCard";

interface Props {
  artist: UserSchema;
  hover?: boolean;
  mainTitle?: boolean;
  as?: string;
}

const ArtistCard: FC<Props> = ({
  artist,
  hover,
  mainTitle,
  as = "article",
}) => {
  const { id, firstName, lastName, image, biography, styles } = artist;

  const ContainerComponent = hover ? Link : "div";
  const Title = mainTitle ? "h2" : "h4";

  return (
    <GradientBorder
      as={as}
      className={`${hover ? "hover:opacity-50" : ""} lg:rounded-3xl`}
    >
      <div className="bg-primary-black relative lg:m-1.5 lg:rounded-3xl">
        <ContainerComponent
          href={`artists/${id}`}
          className="flex flex-col items-center justify-between bg-primary-bgD lg:rounded-3xl lg:flex-row"
        >
          <div className="flex flex-grow w-full lg:w-fit">
            <Image
              src={image}
              alt={`${firstName} ${lastName}`}
              width={450}
              height={250}
              className="h-80 flex-grow object-cover lg:rounded-l-3xl"
            />
          </div>
          <RowComponent className="flex flex-col items-center justify-center gap-5 text-center my-3 lg:items-start lg:text-start lg:w-2/3">
            <Title
              className={`${tertiaryTitle} capitalize text-primary-pink`}
            >{`${firstName} ${lastName}`}</Title>
            <p className="text-xl">{biography}</p>
            <div className="flex flex-wrap gap-5">
              {styles.map((id) => {
                const style = findOnArray(stylesDevelopment, {
                  property: "id",
                  value: id,
                });

                return (
                  style && (
                    <StyleSmallCard key={style.id} styleName={style.name} />
                  )
                );
              })}
            </div>
          </RowComponent>
        </ContainerComponent>
      </div>
    </GradientBorder>
  );
};

export default ArtistCard;
