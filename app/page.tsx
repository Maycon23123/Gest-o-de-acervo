"use client";

import { useEffect, useState } from "react";
import { users } from "@/mocks/users";
import { Item } from "@/types/item";
import {
  getItemsByUser,
  createItem,
  updateItem,
  deleteItem,
} from "@/services/item-service";
import { UserSelector } from "@/components/user/user-selector";
import { ItemForm } from "@/components/item/item-form";
import { ItemList } from "@/components/item/item-list";

export default function Home() {
  const [selectedUserId, setSelectedUserId] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  useEffect(() => {
    if (!selectedUserId) {
      /* eslint-disable react-hooks/set-state-in-effect */
      setItems([]);
      return;
    }

    const userItems = getItemsByUser(selectedUserId);
    setItems(userItems);
  }, [selectedUserId]);

  function reloadItems() {
    if (!selectedUserId) return;
    const updatedItems = getItemsByUser(selectedUserId);
    setItems(updatedItems);
  }

  function handleCreate(itemData: Omit<Item, "id">) {
    createItem(itemData);
    reloadItems();
  }

  function handleUpdate(itemId: string, itemData: Partial<Omit<Item, "id">>) {
    updateItem(itemId, itemData);
    setEditingItem(null);
    reloadItems();
  }

  function handleDelete(itemId: string) {
    deleteItem(itemId);
    reloadItems();
  }

  function handleEdit(item: Item) {
    setEditingItem(item);
  }

  return (
    <main className="max-w-6xl sm:ml-14 mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Gestão de Acervo</h1>

      <UserSelector
        users={users}
        selectedUserId={selectedUserId}
        onSelectUser={setSelectedUserId}
      />

      {selectedUserId && (
        <>
          <ItemForm
            selectedUserId={selectedUserId}
            editingItem={editingItem}
            onCreate={handleCreate}
            onUpdate={handleUpdate}
          />

          <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit} />
        </>
      )}
    </main>
  );
}
