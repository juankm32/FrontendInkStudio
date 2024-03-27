'use client'
import AdminCard from "@/components/cards/adminCard";
import PlusCircleIcon from "@/components/icons/PlusCircleIcon";
import DocDelimiter from "@/components/ui/DocDelimiter";
import Separator from "@/components/ui/Separator";
import { urls } from "@/settings";
import type { BodyPartSchema, StyleSchema, UserSchema } from "@/settings/@types";
import { getData } from "@/utils";
import Link from "next/link";
import { useState, type FC } from "react";
import CategoriesCard from "@/components/cards/CategoriesCard";

const { api } = urls;

const AdminCategoriesPage: FC = async () => {


    const stylesData =
    (await getData<StyleSchema[]>(`${api.base}${api.styles.base}`).catch(
      console.error
    )) || [];

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
                <a className="hover:text-gray-300  flex justify-between items-center font-bold ">
                  PUBLICACIONES
                </a>
              </Link>
            </li>
            <li className="header-item flex justify-between items-center rounded py-2 px-4">
              <Link href={`/es/admin/categories`} legacyBehavior>
                <a className="hover:text-gray-300 text-blue-500 flex justify-between items-center font-bold ">
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
              <Link href={`/es/admin/categories/styles`} legacyBehavior>
                <a className="hover:text-gray-300 text-blue-500  flex justify-between items-center font-bold ">
                  ESTILOS
                </a>
              </Link>
            </li>
            <li className="header-item flex justify-between items-center  rounded py-2 px-4">
              <Link href={`/es/admin/categories`} legacyBehavior>
                <a className="hover:text-gray-300  flex justify-between items-center font-bold ">
                  PARTES DEL CUERPO
                </a>
              </Link>
            </li>
          </ul>
          <Separator className="w-full h-1 bg-primary-accent" />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-between w-full">
            <AdminCard
              title="AGREGAR ESTILO"
              Icon={() => <PlusCircleIcon fill="#0487D9" className="" />}
              className="mb-4 mt-8"
            ></AdminCard>
          </div>

          <DocDelimiter
            as="section"
            containerClassName="flex flex-col gap-10 mt-8"
          >
            <CategoriesCard data={stylesData} Icon={"symbol"} />
          </DocDelimiter>
        </div>
      </div>
    </div>
  );
};

export default AdminCategoriesPage;
