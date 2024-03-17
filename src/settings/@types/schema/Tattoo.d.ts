import type { BodyPartSchema, ImageSchema, StyleSchema, UserSchema } from ".";

export interface TattooSchema {
  id: string;
  name: string;
  description: string;
  cover: ImageSchema;
  user: UserSchema;
  styles: StyleSchema[];
  bodyParts: BodyPartSchema[];
  images: ImageSchema[];
}
