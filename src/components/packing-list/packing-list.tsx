import { useState } from 'react';
import { PackItem, PackItems } from '../../types/types';
import PackingItem from '../packing-item/packing-item';

type PackingListProps = {
  items: PackItems;
  togglePacked: (item: PackItem) => void;
  deleteItem: (id: number) => void;
  clearItems: () => void;
};

export default function PackingList({
  items,
  togglePacked,
  deleteItem,
  clearItems,
}: PackingListProps) {
  const [sorting, setSorting] = useState('input');

  let sortedItems: PackItems | [] = [];
  if (sorting === 'input') {
    sortedItems = [...items];
  }
  if (sorting === 'description') {
    sortedItems = [...items].sort((itemA, itemB) =>
      itemA.description.localeCompare(itemB.description)
    );
  }
  if (sorting === 'packed') {
    sortedItems = [...items].sort(
      (itemA, itemB) => +itemB.packed - +itemA.packed
    );
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <PackingItem
            item={item}
            key={item.id}
            togglePacked={togglePacked}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      {!!items.length && (
        <div className="actions">
          <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by input packed status</option>
          </select>
          <button onClick={clearItems}>Clear list</button>
        </div>
      )}
    </div>
  );
}
