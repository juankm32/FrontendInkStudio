import AdminCard from "@/components/cards/adminCard";
import PlusCircleIcon from "@/components/icons/PlusCircleIcon";
import DocDelimiter from "@/components/ui/DocDelimiter";
import Separator from "@/components/ui/Separator";
import { urls } from "@/settings";
import type { UserSchema } from "@/settings/@types";
import { getData } from "@/utils";
import Link from "next/link";
import type { FC } from "react";
import type { ContactContent } from "../../../../content/functions/types";
import ArtistCardAdmin from "@/components/cards/ArtistCardAdmin";

const { api } = urls;

const AdminArtistPage: FC = async () => {
  const artists =
    (await getData<UserSchema[]>(
      `${api.base}${api.users.base}${api.users.designers}`
    ).catch(console.error)) || [];

  const contactContent: ContactContent = {
    location: {
      title: "Direccion",
      description: "JUAN RAMIREZ DE VELASCO 781, CABA",
    },
    openingHours: {
      title: "Horarios",
      description: "Lunes a Sábado de 11 a 20 hs",
    },
    phone: {
      title: "Telefono",
      description: "+541122510990  |  46758909 ",
    },
    email: {
      title: "Email",
      description: "info@inkstudio.com ",
    },
    form: {
      namePlaceholder: "Nombre",
      lastNamePlaceHolder: "Apellido",
      emailPlaceholder: "Email",
      phonePlaceholder: "Número de Teléfono",
      messagePlaceholder: "Mensaje",
      sendButton: "Enviar",
      cancelButton: "Cancelar",
    },
  };

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="header-container bg-secondary-background shadow-lg">
          <ul className="flex flex-row justify-between header-list list-none p-0 m-0 text-white">
            <li className="header-item flex justify-between items-center rounded py-2 px-4">
              <Link href={`/es/admin/artist`} legacyBehavior>
                <a className="hover:text-gray-300 text-blue-500 flex justify-between items-center font-bold ">
                  ARTISTAS
                </a>
              </Link>
            </li>
            <li className="header-item flex justify-between items-center  rounded py-2 px-4">
              <Link href={`/es/admin/publish`} legacyBehavior>
                <a className="hover:text-gray-300  flex justify-between items-center font-bold ">
                  PUBLICACIONES
                </a>
              </Link>
            </li>
            <li className="header-item flex justify-between items-center rounded py-2 px-4">
              <Link href={`/es/admin/categories`} legacyBehavior>
                <a className="hover:text-gray-300  flex justify-between items-center font-bold ">
                  CATEGORIAS
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <Separator className="w-full h-1 bg-primary-accent" />

        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-between w-full">
            <AdminCard
              title="AGREGAR ARTISTA"
              Icon={() => <PlusCircleIcon fill="#0487D9" className="" />}
              className="mb-4 mt-8"
            ></AdminCard>

            {/* <AdminCard
              title="AGREGAR PUBLICACION"
              Icon={() => <PlusCircleIcon fill="#0487D9" className="" />}
              className="mb-4 mt-8"
            ></AdminCard> */}
          </div>

          <DocDelimiter
            as="section"
            containerClassName="flex flex-col gap-10 mt-8"
          >
            {artists.map((artist) => (
              <ArtistCardAdmin key={artist.id} artist={artist} />
            ))}
          </DocDelimiter>
        </div>
      </div>
    </div>
  );
};

export default AdminArtistPage;
