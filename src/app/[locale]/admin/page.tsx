"use client";
import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
import type { ContactContent } from "../../../content/functions/types";
import GoogleMap from "@/components/ui/GoogleMap";
import { transparentBg } from "@/utils";
import Separator from "@/components/ui/Separator";
import GradientBorder from "@/components/ui/GradientBorder";
import AdminCard from "@/components/cards/adminCard";
import LocationIcon from "@/components/icons/LocationIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ReportIcon from "@/components/icons/ReportIcon";
import PlusCircleIcon from "@/components/icons/PlusCircleIcon";

const AdminPage: NextPage = () => {
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
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          {/* Mapa e Info */}
          <div className="p-1 rounded-xl bg-gradient-to-t from-primary-fromGradient to-primary-toGradient ">
            <div
              className={`flex flex-col md:flex-row justify-between items-start rounded-xl p-4 bg-primary-bgD `}
            >
              <div className="md:w-1/2 mt-16">
                <div className="p-4">
                  <GoogleMap
                    longitude={37.52631462801488}
                    latitude={127.03710345767163}
                  />
                </div>
              </div>

              <div className="md:w-1/2 flex flex-col">
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">
                    {contactContent.location.title}
                  </h2>
                  <p className="mb-4 text-pink-600 font-bold">
                    {contactContent.location.description}
                  </p>

                  <h2 className="font-bold text-xl mb-2">
                    {contactContent.openingHours.title}
                  </h2>
                  <p className="mb-4 text-pink-600 font-bold">
                    {contactContent.openingHours.description}
                  </p>

                  <h2 className="font-bold text-xl mb-2">
                    {contactContent.phone.title}
                  </h2>
                  <p className="mb-4 text-pink-600 font-bold">
                    {contactContent.phone.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="w-full h-1 bg-primary-accent mt-8" />

          <div className="flex flex-col items-center">
            <div className="flex justify-between w-full mb-8">
              <AdminCard
                title="AGENDA DEL DIA"
                Icon={() => <CalendarIcon fill="#0487D9" className="" />}
                className="w-1/2 mr-2 mb-4 mt-8" 
              >
              </AdminCard>

              <AdminCard
                title="AGENDA DE LA SEMANA"
                Icon={() => <CalendarIcon fill="#0487D9" className="" />}
                className="w-1/2 ml-2 mb-4 mt-8" 
              >
              </AdminCard>
            </div>

            <div className="flex flex-col flex-wrap justify-center w-full">
              <AdminCard
                title="REPORTES"
                Icon={() => <ReportIcon fill="#0487D9" className="" />}
                className="mb-4"
              >
              </AdminCard>

              <AdminCard
                title="AGREGAR ARTISTA"
                Icon={() => <PlusCircleIcon fill="#0487D9" className="" />}
                className="mb-4 mt-8"
              >
              </AdminCard>

              <AdminCard
                title="AGREGAR PUBLICACION"
                Icon={() => <PlusCircleIcon fill="#0487D9" className="" />}
                className="mb-4 mt-8"
              >
              </AdminCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
