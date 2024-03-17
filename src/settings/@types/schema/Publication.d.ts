import type { BodyPartSchema, ImageSchema, StyleSchema } from ".";

interface PublicationSchema {
  id: string;
  user: string;
  name: string;
  cover: {
    id: string;
    name: string;
    url: string;
  };
  description: string;
  images: ImageSchema[];
  bodyParts: BodyPartSchema[];
  styles: StyleSchema[];
}
