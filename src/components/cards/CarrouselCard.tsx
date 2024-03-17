import Image from "next/image";
import { type FC } from "react";

interface Props {
  as?: React.ElementType;
  image: { id: string; title: string; description: string; url: string };
  className?: string;
}

const CarrouselCard: FC<Readonly<Props>> = ({
  as: Element = "div",
  image,
  className,
}) => {
  const { title, url } = image;

  return (
    <Element className={`${className} rounded-xl`}>
      <div className="flex flex-col items-center gap-2 w-40 pb-3 lg:flex-row lg:w-fit lg:pr-3 lg:pb-0">
        <Image
          src={url}
          alt={title}
          width={200}
          height={100}
          className="w-40 h-24 object-cover rounded-t-lg lg:rounded-tr-none lg:rounded-l-xl"
        />
        <p className="capitalize lg:text-lg">{title}</p>
      </div>
    </Element>
  );
};

export default CarrouselCard;
