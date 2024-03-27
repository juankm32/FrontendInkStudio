'use client'
import React, { useState } from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import GradientBorder from '../ui/GradientBorder';
import RowComponent from '../ui/RowComponent';
import StyleSmallCard from './StyleSmallCard';
import type { UserSchema } from '@/settings/@types';
import { deleteData, tertiaryTitle } from '@/utils';
import { urls } from "@/settings";
import { getCookie } from '@/utils/server';
import AlertModal from '../modals/AlertModal';
const { api } = urls;

interface Props {
  artist: UserSchema;
  mainTitle?: boolean;
  as?: string;
}

const ArtistCardAdmin: FC<Props> = ({ artist, mainTitle, as = "article" }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { name, lastname, profile, biography, styles } = artist;
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);


  const Title = mainTitle ? "h2" : "h4";



  const handleSoftDelete = async () => {
    if (selectedItemId) {
      setShowConfirmModal(false);
      const deleteUrl = `${api.base}${api.users.base}/${selectedItemId}/soft-delete`;
      const token = await getCookie("session");
      await deleteData(deleteUrl, {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      }).catch(console.error);
      setSelectedItemId(null);
    }
  };

  const confirmSoftDelete = (itemId: string) => {
    setSelectedItemId(itemId);
    setShowConfirmModal(true);
  };

  return (
    <>
    {showConfirmModal && (
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center">
        <AlertModal success={false}>
          <p>Esta seguro de que quiere eliminar esta artista?</p>
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
    <GradientBorder as={as} className="lg:rounded-3xl">
      <div className="bg-primary-black relative lg:m-1.5 lg:rounded-3xl">
        <div className="flex flex-col items-center justify-between bg-primary-bgD lg:rounded-3xl lg:flex-row">
          <div className="flex flex-grow w-full lg:w-fit">
            <Image src={profile?.url || ""} alt={`${name} ${lastname}`} width={450} height={250} className="h-80 flex-grow object-cover lg:rounded-l-3xl" />
          </div>
          <RowComponent className="flex flex-col items-center justify-center gap-5 text-center my-3 lg:items-start lg:text-start lg:w-2/3">
            <Title className={`${tertiaryTitle} capitalize text-primary-pink`}>{`${name} ${lastname}`}</Title>
            <p className="text-xl">{biography}</p>
            <div className="flex flex-wrap gap-5">
              {styles.map(({ id, name }) => <StyleSmallCard key={id} styleName={name} />)}
            </div>
          </RowComponent>
          <button onClick={() => setShowMenu(!showMenu)} className="absolute top-0 right-0 m-2 text-white">
            •••
          </button>
        </div>
        {showMenu && (
          <div className="absolute top-12 right-0 bg-blue-500 text-white p-2 rounded-md">
            <button className="block">Editar</button>
            <button className="block mt-1" onClick={() => confirmSoftDelete(artist.id)}>Eliminar</button>
          </div>
        )}
      </div>
    </GradientBorder>
        </>

  );
};

export default ArtistCardAdmin;
