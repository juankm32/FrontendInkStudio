import React, { useState } from 'react';
import GradientBorder from '../ui/GradientBorder';
import Separator from '../ui/Separator';
import AlertModal from '../modals/AlertModal';
import { putData } from '@/utils';
import { getCookie } from '@/utils/server';
import { urls } from "@/settings";
const { api } = urls;

interface Item {
  id: string;
  name: string;
}

interface GradientCardProps {
  data: Item[];
  Icon: React.ElementType;
  className?: string;
}

const CategoriesCard: React.FC<GradientCardProps> = ({ data, Icon, className }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [editItemName, setEditItemName] = useState<string>('');



  const handleSoftDelete = async () => {
    if (selectedItemId) {
      setShowConfirmModal(false);
      const deleteUrl = `${api.base}${api.bodyParts.base}/${selectedItemId}/soft-delete`;
      const token = await getCookie("session");
      await putData(deleteUrl, {
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

  const startEdit = (item: Item) => {
    setEditItemId(item.id);
    setEditItemName(item.name);
  };

  const cancelEdit = () => {
    setEditItemId(null);
    setEditItemName('');
  };

  const saveEdit = async () => {
    if (editItemId) {
      const updateUrl = `${api.base}${api.bodyParts.base}/${editItemId}`;
      const token = await getCookie("session");
      await putData(updateUrl, {
        body: JSON.stringify({ name: editItemName }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token?.value}`,
        },
      }).catch(console.error);
      cancelEdit();
    }
  };
  

  

  return (
    <>
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center">
          <AlertModal success={false}>
            <p>Esta seguro de que quiere eliminar este estilo?</p>
            <div className="flex justify-around mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded mr-4"
                onClick={handleSoftDelete}
              >
                Si
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded ml-4"
                onClick={() => setShowConfirmModal(false)}
              >
                No
              </button>
            </div>
          </AlertModal>
        </div>
      )}

      <GradientBorder className={`flex flex-col items-center p-1 rounded-lg overflow-hidden ${className}`}>
        <div className='bg-primary-bgD w-full flex flex-col items-center p-4'>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <div className="w-full flex justify-between items-center mb-2">
                {editItemId === item.id ? (
                  <>
                    <input
                      type="text"
                      value={editItemName}
                      onChange={(e) => setEditItemName(e.target.value)}
                      className="text-xl font-bold bg-primary-bgD"
                    />
                    <div>
                      <button className="text-green-500 mr-2" onClick={saveEdit}>Guardar</button>
                      <button className="text-red-500" onClick={cancelEdit}>Cancelar</button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <div>
                      <button className="text-yellow-500 mr-2" onClick={() => startEdit(item)}>Editar</button>
                      <button className="text-red-500" onClick={() => confirmSoftDelete(item.id)}>Eliminar</button>
                    </div>
                  </>
                )}
              </div>
              <Separator className="w-full h-1 bg-gray-400 my-2" />
            </React.Fragment>
          ))}
        </div>
      </GradientBorder>
    </>
  );
};

export default CategoriesCard;
