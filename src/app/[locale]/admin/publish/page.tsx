"use client";
import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import type { ContactContent } from "../../../../content/functions/types";
import GoogleMap from "@/components/ui/GoogleMap";
import { btnAccentColors, btnSm, transparentBg } from "@/utils";
import Separator from "@/components/ui/Separator";
import GradientBorder from "@/components/ui/GradientBorder";
import AdminCard from "@/components/cards/adminCard";
import LocationIcon from "@/components/icons/LocationIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ReportIcon from "@/components/icons/ReportIcon";
import PlusCircleIcon from "@/components/icons/PlusCircleIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import Link from "next/link";
import ArtistCard from "@/components/cards/ArtistCard";
import DocDelimiter from "@/components/ui/DocDelimiter";
import { usersDevelopment } from "@/development";


const AdminArtistPage: NextPage = () => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="header-container bg-secondary-background shadow-lg">
          <ul className="flex flex-row justify-between header-list list-none p-0 m-0 text-white">
            <li className="header-item flex justify-between items-center rounded py-2 px-4">
              <Link href={`/es/admin/artist`} legacyBehavior>
                <a className="hover:text-gray-300  flex justify-between items-center font-bold ">
                  ARTISTAS
                </a>
              </Link>
            </li>
            <li className="header-item flex justify-between items-center  rounded py-2 px-4">
              <Link href={`/es/admin/publish`} legacyBehavior>
                <a className="hover:text-gray-300 text-blue-500  flex justify-between items-center font-bold ">
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

        <div className="header-container bg-secondary-background shadow-lg mt-6 mx-auto w-1/2">
          <ul className="flex flex-row justify-between header-list list-none p-0 m-0 text-white">
            <li className="header-item flex justify-between items-center rounded py-2 px-4">
              <Link href={`/es/admin/artist`} legacyBehavior>
                <a className="hover:text-gray-300  flex justify-between items-center font-bold ">
                  PUBLICADAS
                </a>
              </Link>
            </li>
            <li className="header-item flex justify-between items-center  rounded py-2 px-4">
              <Link href={`/es/admin/publish`} legacyBehavior>
                <a className="hover:text-gray-300 text-blue-500  flex justify-between items-center font-bold ">
                  PENDIENTES DE PUBLICACION
                </a>
              </Link>
            </li>
          </ul>
          <Separator className="w-full h-1 bg-primary-accent" />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-between w-full">
            <AdminCard
              title="AGREGAR PUBLICACION"
              Icon={() => <PlusCircleIcon fill="#0487D9" className="" />}
              className="mb-4 mt-8"
              onClick={toggleModal}
            ></AdminCard>
          </div>

          <DocDelimiter
            as="section"
            containerClassName="flex flex-col gap-10 mt-8"
          >
            <h1>Falta logica para publicaciones</h1>
          </DocDelimiter>
        </div>
      </div>

    </div>
  );
};

export default AdminArtistPage;
