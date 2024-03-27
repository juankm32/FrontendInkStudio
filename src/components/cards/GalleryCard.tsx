import Image from "next/image";

interface Props {
  src: string;
  title: string;
}

const GalleryCard: React.FC<Props> = ({ title, src }) => {
  return (
    <Image
      src={src}
      alt={title}
      width={250}
      height={500}
      className="w-fit object-cover rounded-xl"
    />
  );
};

export default GalleryCard;
