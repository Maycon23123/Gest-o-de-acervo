import { items } from "@/mocks/items";
import type { Item } from "@/types/item";

function getItems(): Item[] {
  return items;
}

function getItemsByUser(userId: string): Item[] {
  return items.filter((item) => item.userId === userId);
}

function createItem(itemData: Omit<Item, "id">): Item {
  const newItem: Item = { ...itemData, id: String(Date.now()) };
  items.push(newItem);
  return newItem;
}

function updateItem(
  itemId: string,
  updateData: Partial<Omit<Item, "id">>,
): Item | null {
  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    return null;
  }
  items[itemIndex] = { ...items[itemIndex], ...updateData };
  return items[itemIndex];
}

function deleteItem(itemId: string): boolean {
  //const items = getItems();
  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    return false;
  }
  items.splice(itemIndex, 1);
  return true;
}
export { getItems, getItemsByUser, createItem, updateItem, deleteItem };
