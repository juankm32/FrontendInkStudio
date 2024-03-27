"use client";
import PublishConfirmed from "@/components/cards/PublishConfirmed";
import AdminCard from "@/components/cards/adminCard";
import PlusCircleIcon from "@/components/icons/PlusCircleIcon";
import DocDelimiter from "@/components/ui/DocDelimiter";
import Separator from "@/components/ui/Separator";
import { urls } from "@/settings";
import type { TattooSchema } from "@/settings/@types";
import { getData } from "@/utils";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
const { api } = urls;

const AdminPublishedPage: NextPage = async () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const url = `${api.base}${api.tattoos.base}${api.tattoos.confirmed}`;
  // const url = `${api.base}${api.tattoos.base}${api.tattoos.unconfirmed}`;


  const tattoos =
    (await getData<TattooSchema[]>(url).catch(console.error)) || [];

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
              <Link href={`/es/admin/publish/published`} legacyBehavior>
                <a className="hover:text-gray-300  text-blue-500  flex justify-between items-center font-bold ">
                  PUBLICADAS
                </a>
              </Link>
            </li>
            <li className="header-item flex justify-between items-center  rounded py-2 px-4">
              <Link href={`/es/admin/publish`} legacyBehavior>
                <a className="hover:text-gray-300  flex justify-between items-center font-bold ">
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
            {tattoos.map((tattoo) => (
              <PublishConfirmed key={tattoo.id} tattoo={tattoo} />
            ))}
          </DocDelimiter>
        </div>
      </div>
    </div>
  );
};

export default AdminPublishedPage;
