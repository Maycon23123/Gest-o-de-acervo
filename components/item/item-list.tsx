import type { Item } from "@/types/item";
import { ItemCard } from "./item-card";

type ItemListProps = {
  items: Item[];
  onDelete: (itemId: string) => void;
  onEdit: (item: Item) => void;
};

export function ItemList({ items, onDelete, onEdit }: ItemListProps) {
  if (items.length === 0) {
    return <p className="text-gray-500">Nenhum item encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
