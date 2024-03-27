import type { GalleryContent } from "@/content/functions/types";
import type { TattooSchema } from "@/settings/@types";
import { fourthTitle, tertiaryTitle } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import StyleSmallCard from "../cards/StyleSmallCard";
import ImageSlider from "../gallery/ImageSlider";
import CloseIcon from "../icons/CloseIcon";
import DocDelimiter from "../ui/DocDelimiter";
import GradientBorder from "../ui/GradientBorder";
import Separator from "../ui/Separator";

interface Props {
  publication: TattooSchema;
  content: GalleryContent["modal"];
  closeHref: string;
}

const PublicationModal: React.FC<Props> = ({
  publication,
  content,
  closeHref,
}) => {
  const { user, images, cover, description, styles, name } = publication;
  const totalImages = [cover, ...images].map(({ name, url }) => ({
    title: name,
    url: url ?? "",
  }));

  return (
    <DocDelimiter containerClassName="flex flex-col">
      <Link href={closeHref} scroll={false} className="self-end">
        <CloseIcon className="w-10" />
      </Link>

      <GradientBorder className="lg:rounded-xl">
        <div className="flex flex-col gap-10 bg-primary-bgD overflow-y-auto max-h-semiScreen custom-scroll lg:rounded-xl lg:m-1">
          <section>
            <ImageSlider images={totalImages} width={500} height={250} />
          </section>
          <section className="flex flex-col items-center justify-center text-center mx-20 my-5 gap-5 lg:flex-row lg:text-start">
            <Image
              src={user.profile?.url || ""}
              alt={`${user.name} ${user.lastname}`}
              width={100}
              height={100}
              className="w-fit self-start bg-white rounded-full object-cover"
            />
            <div className="flex flex-col w-full gap-5">
              <div>
                <h3 className={`${tertiaryTitle}`}>{name}</h3>
                <h4 className={`${fourthTitle}`}>
                  {content.by}{" "}
                  <span className="text-primary-pink">{`${user.name} ${user.lastname}`}</span>
                </h4>
              </div>
              <Separator className="h-0.5 bg-primary-grayL w-full" />
              <div className="flex flex-col gap-5 items-center lg:items-start">
                {description}
                <ul className="flex gap-5">
                  {styles.map(({ id, name }) => (
                    <StyleSmallCard key={id} as="li" styleName={name} />
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </GradientBorder>
    </DocDelimiter>
  );
};

export default PublicationModal;
