"use client";

import { Item } from "../../types/item";
import { useEffect, useState } from "react";

type ItemFormProps = {
  selectedUserId: string;
  editingItem: Item | null;
  onCreate: (itemData: Omit<Item, "id">) => void;
  onUpdate: (itemId: string, itemData: Omit<Item, "id">) => void;
  //onCancel: () => void;
};
type FormData = {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
};

const initialFormData: FormData = {
  name: "",
  description: "",
  imageUrl: "",
  category: "",
};

export function ItemForm({
  selectedUserId,
  editingItem,
  onCreate,
  onUpdate,
}: ItemFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (editingItem) {
      setFormData({
        name: editingItem.name,
        description: editingItem.description,
        imageUrl: editingItem.imageUrl,
        category: editingItem.category,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [editingItem]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const itemData = {
      userId: selectedUserId,
      ...formData,
    };

    if (editingItem) {
      onUpdate(editingItem.id, itemData);
    } else {
      onCreate(itemData);
    }

    setFormData(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-lg">
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Descrição"
        value={formData.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="imageUrl"
        placeholder="URL da imagem"
        value={formData.imageUrl}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="category"
        placeholder="Categoria"
        value={formData.category}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingItem ? "Atualizar Item" : "Criar Item"}
      </button>
    </form>
  );
}
