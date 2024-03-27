"use client";
import React, { useState } from "react";
import Image from "next/image";
import GradientBorder from "../ui/GradientBorder";
import type { ImageSchema, StyleSchema, UserBase } from "@/settings/@types";
import { urls } from "@/settings";

const { api } = urls;



interface TattooSchema {
  id: string;
  name: string;
  description: string;
  cover: ImageSchema;
  styles: StyleSchema[];
  images: ImageSchema[];
  user: UserBase;
  favorites?: any[];
}

interface Props {
  tattoo: TattooSchema;
  as?: string;
}

const PublishConfirmed: React.FC<Props> =  ({ tattoo, as = "article" }) => {
  const { name, description, cover, images, styles, user, favorites = []} = tattoo;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <GradientBorder as={as} className="lg:rounded-3xl overflow-hidden">
      <div className="bg-primary-black relative lg:m-1.5 lg:rounded-3xl">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 overflow-hidden relative pl-10 pt-10 pb-10">
            {cover && (
              <Image
                src={cover.url}
                alt={name}
                width={450}
                height={650}
                className="w-fit object-cover rounded-xl"
              />
            )}
          </div>
          <div className="p-4 flex-grow">
            <h4 className="text-white text-2xlxl mb-2">{name}</h4>
            <h3 className="text-primary-pink text-xl mb-2">
              Por {user.name + " " + user.lastname}{" "}
            </h3>
            <p className="text-white">{description}</p>
            <div className="mt-4 mb-4">
              {styles.map((style, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {style.name}
                </span>
              ))}
            </div>
            <div className="flex overflow-x-auto gap-2">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.url}
                  alt={`${name} image ${index + 1}`}
                  width={100}
                  height={50}
                  className="object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 m-2 flex">
          <div className="relative">
            <button onClick={toggleMenu} className=" text-white p-2 rounded-lg">
              •••
            </button>
            {showMenu && (
              <div className="absolute right-0 bg-blue-500 text-white p-2 rounded-lg mt-2 z-10">
                <button className="block">Editar</button>
                <button className="block">Eliminar</button>
              </div>
            )}
          </div>
          <div className="flex items-center ml-4">
            <span className="text-white">{favorites.length}</span>
            <svg className="fill-white ml-1 w-6 h-6" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>
      </div>
    </GradientBorder>
  );
};

export default PublishConfirmed;
