"use client";
import React, { useState } from "react";
import Image from "next/image";
import GradientBorder from "../ui/GradientBorder";
import type { ImageSchema, StyleSchema, UserBase } from "@/settings/@types";
import { urls } from "@/settings";
import { getData, putData } from "@/utils";
import { getCookie } from "@/utils/server";
import AlertModal from "../modals/AlertModal";
import BackdropFilter from "../ui/BackdropFilter";

const { api } = urls;

interface TattooSchema {
  id: string;
  name: string;
  description: string;
  cover: ImageSchema;
  styles: StyleSchema[];
  images: ImageSchema[];
  user: UserBase;
}

interface Props {
  tattoo: TattooSchema;
  as?: string;
}

const PendingPublishCard: React.FC<Props> = ({ tattoo, as = "article" }) => {
  const { name, description, cover, images, styles, user, id } = tattoo;
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);

  const handleConfirm = async () => {
    const confirmUrl = `${api.base}${api.tattoos.base}/${id}/confirm`;
    const token = await getCookie("session");
    try {
      await putData(confirmUrl, {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      });
      setShowAcceptModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSoftDelete = async () => {
    setShowConfirmModal(false);
    const deleteUrl = `${api.base}${api.tattoos.base}/${id}/soft-delete`;
    const token = await getCookie("session");
    await putData(deleteUrl, {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    }).catch(console.error);
  };

  const confirmSoftDelete = () => {
    setShowConfirmModal(true);
  };


  return (
    <>
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center">
          <AlertModal success={false}>
            <p>Esta seguro de que quiere eliminar esta publicacion?</p>
            <div className="flex justify-around mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded mr-4"
                onClick={handleSoftDelete}
              >
                Si
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded mi-4 "
                onClick={() => setShowConfirmModal(false)}
              >
                No
              </button>
            </div>
          </AlertModal>
        </div>
      )}

      {showAcceptModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center">
          <AlertModal success>
            <p>La publicacion se ha cargado correctamente!</p>
            <div className="flex justify-around mt-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded"
                onClick={() => setShowAcceptModal(false)}
              >
                OK
              </button>
            </div>
          </AlertModal>
        </div>
      )}
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
          <div className="absolute top-0 right-0 m-2 flex gap-2">
            <button
              onClick={handleConfirm}
              className="text-white font-extrabold text-3xl"
            >
              ✓
            </button>
            <button
              onClick={confirmSoftDelete}
              className="text-white font-extrabold text-3xl"
            >
              ✗
            </button>
          </div>
        </div>
      </GradientBorder>
    </>
  );
};

export default PendingPublishCard;
