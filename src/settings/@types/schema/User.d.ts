import type {
  ImageSchema,
  PublicationSchema,
  RoleSchema,
  StyleSchema,
  TattooSchema,
} from ".";

interface UserBase {
  name: string;
  lastname: string;
  email: string;
  birthdate: string;
  phone: string | null;
}

export interface UserRegister extends UserBase {
  password: string;
}

export interface UserSchema extends UserBase {
  id: string;
  emailVerified: boolean;
  profile: ImageSchema | null;
  biography: string | null;
  role: RoleSchema;
  favorites: PublicationSchema[];
  styles: StyleSchema[];
  tattoos: TattooSchema[];
}
