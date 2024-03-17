"use client";
import GradientBorder from "@/components/ui/GradientBorder";
import {
  useEffect,
  type FC,
  Key,
  useState,
  SetStateAction,
  ChangeEvent,
} from "react";

const fileTypes = ["JPG", "PNG"];

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  success: boolean;
};

const EditPublish: FC<Props> = ({ children, onClose }) => {
  const [cover, setCover] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);

  const handleChangeCover = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCover(event.target.files[0]);
    }
  };

  const handleChangeImages = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages((prevImages) => [...prevImages, ...fileArray]);
    }
  };

  const renderImagePreviews = () => {
    return images.map((image, index) => {
      const objectUrl = URL.createObjectURL(image);
      const onImageLoad = () => {
        URL.revokeObjectURL(objectUrl);
      };

      return (
        <div key={index} className="preview">
          <img
            src={objectUrl}
            alt={`Preview ${index}`}
            onLoad={onImageLoad}
          />
        </div>
      );
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <GradientBorder className="flex flex-col items-center p-1 rounded-lg w-1/2 mr-2 mb-4 mt-8">
        <div className="bg-primary-bgD w-full flex flex-col items-center p-4">
          <h1 className="font-bold text-xl mb-4 text-center text-blue-300">
            NUEVA PUBLICACION
          </h1>
          <form className="w-full">
            <div>
              <label
                htmlFor="artist"
                className="block text-blue-200 text-sm font-bold mb-2 mt-3"
              >
                Elegir artista
              </label>
              <select
                id="artist"
                name="artist"
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500
"
              ></select>
            </div>

            <label
              htmlFor="title"
              className="block text-blue-200 text-sm font-bold mb-2 mt-3"
            >
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="p-2 bg-gray-200 rounded-md w-full text-black focus:bg-white focus:border-gray-500"
            />

            <label
              htmlFor="description"
              className="block text-blue-200 text-sm font-bold mb-2 mt-3"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              className="p-2 bg-gray-200 rounded-md w-full text-black focus:bg-white focus:border-gray-500"
            />

            {/* Subir portada */}
            <label
              htmlFor="cover"
              className="block text-blue-200 text-sm font-bold mb-2 mt-3"
            >
              Subir portada
            </label>
            <input
              type="file"
              id="cover"
              name="cover"
              onChange={handleChangeCover}
              className="p-2 bg-gray-200 rounded-md w-full text-black focus:bg-white focus:border-gray-500"
            />

            {/* Subir imágenes */}
            <label
              htmlFor="images"
              className="block text-blue-200 text-sm font-bold mb-2 mt-3"
            >
              Subir imágenes
            </label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleChangeImages}
              className="p-2 bg-gray-200 rounded-md w-full text-black focus:bg-white focus:border-gray-500"
              multiple
            />

            {/* Image previews */}
            <div className="preview-container flex">
              {renderImagePreviews()}
            </div>

            <div className="flex">
              <div className="w-1/2 mb-2">
                <label
                  htmlFor="styles"
                  className="block text-blue-200 text-sm font-bold mb-2 mt-3"
                >
                  Estilos
                </label>
                <select
                  id="styles"
                  name="styles"
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500
"
                ></select>
              </div>
              <div className="w-1/2 ml-2">
              <label
                htmlFor="bodyPart"
                className="block text-blue-200 text-sm font-bold mb-2 mt-3"
              >
                Parte del cuerpo
              </label>
              <select
                id="bodyPart"
                name="bodyPart"
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500
"
              ></select>
              </div>

            </div>

            <div className="flex mt-8 justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-1/2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </GradientBorder>
    </div>
  );
};

export default EditPublish;
