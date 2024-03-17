import type { FC } from "react";

interface Props {
  longitude: number;
  latitude: number;
  zoom?: number;
  className?: string;
}

const GoogleMap: FC<Props> = ({
  longitude,
  latitude,
  zoom = 2805.4854018106616,
  className,
}) => {
  const customUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${zoom}!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus`;

  return (
    <iframe
      className={className}
      src={customUrl}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;
