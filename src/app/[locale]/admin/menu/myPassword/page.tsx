"use client";
import React from "react";
import type { NextPage } from "next";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import Link from "next/link";
import GradientBorder from "@/components/ui/GradientBorder";
import { btnAccentColors, btnSm } from "@/utils/styles";

const MyPasswordPage: NextPage = () => {
  return (
    <div className="min-h-screen p-4 flex justify-center items-center bg-primary-background">
      <div className="flex max-w-4xl w-full">
        {/* Sidebar */}
        <div className="w-1/4 bg-secondary-background p-4 shadow-lg flex flex-col border-r-4 border-r-gray-700">
          <nav className="text-white">
            <ul className="list-none p-0 m-0">
              <li className="mb-4 flex justify-between items-center">
                <Link href={`/es/admin/menu/myAccount`} legacyBehavior>
                  <a className="hover:text-gray-300 text-white py-2 px-4 w-full flex justify-between items-center">
                    MI CUENTA
                    <ChevronRightIcon className="w-5 h-5" />
                  </a>
                </Link>
              </li>
              <li className="mb-4 flex justify-between items-center  bg-blue-500 rounded">
                <Link href={`/es/admin/menu/myPassword`} legacyBehavior>
                  <a className="hover:text-gray-300 py-2 px-4 w-full flex justify-between items-center">
                    CONTRASEÑA
                    <ChevronRightIcon className="w-5 h-5" />
                  </a>
                </Link>
              </li>
              <li className="flex justify-between items-center ">
                <Link href={`/es/admin/menu/myStudio`} legacyBehavior>
                  <a className="hover:text-gray-300 py-2 px-4 w-full flex justify-between items-center">
                    MI ESTUDIO
                    <ChevronRightIcon className="w-5 h-5" />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-4/5 ml-8 mb-8">
          <GradientBorder
            className={`flex flex-col items-center p-1 rounded-lg overflow-hidden w-full `}
          >
            <div className="bg-primary-bgD w-full flex flex-col items-center p-4 ">
              <div className="w-3/4 bg-content-background p-8">
                <h2 className="text-white text-2xl mb-6 text-center font-bold">
                  CONTRASEÑA
                </h2>
                <div className="flex flex-col space-y-4">
                  <label htmlFor="actualPassword" className="uppercase font-bold w-full">
                    Contraseña actual
                  </label>
                  <input
                    id="actualPassword"
                    type="password"
                    placeholder="****************"
                    className="p-2 bg-gray-200 rounded-md w-full text-black"
                  />

                  <label htmlFor="newPassword" className="uppercase font-bold w-full">
                    Contraseña nueva
                  </label>
                  <input
                    id="newPassword"
                    type="password"
                    placeholder="****************"
                    className="p-2 bg-gray-200 rounded-md w-full text-black"
                  />

                  <label htmlFor="reNewPassword" className="uppercase font-bold w-full">
                    Repetir contraseña
                  </label>
                  <input
                    id="reNewPassword"
                    type="password"
                    placeholder="****************"
                    className="p-2 bg-gray-200 rounded-md w-full text-black"
                  />

                  <div className="flex justify-between">
                    <button
                      className={`${btnAccentColors} ${btnSm} uppercase font-bold `}
                    >
                      GUARDAR
                    </button>
                    <button
                      className={`${btnAccentColors} ${btnSm} uppercase font-bold `}
                    >
                      CANCELAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </GradientBorder>
        </div>
      </div>
    </div>
  );
};

export default MyPasswordPage;
