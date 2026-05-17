import type { Item } from "@/types/item";
import Image from "next/image";

type ItemCardProps = {
  item: Item;
  onDelete: (itemId: string) => void;
  onEdit: (item: Item) => void;
};

export function ItemCard({ item, onDelete, onEdit }: ItemCardProps) {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <Image
        src={item.imageUrl}
        alt={item.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-md"
      />
      <div>
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="text-gray-600">{item.description}</p>
        <span className="text-sm text-blue-500">{item.category}</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(item)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Deletar
        </button>
      </div>
    </div>
  );
}
