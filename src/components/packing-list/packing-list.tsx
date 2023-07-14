import { PackItem, PackItems } from '../../types/types';
import PackingItem from '../packing-item/packing-item';

type PackingListProps = {
  items: PackItems;
  togglePacked: (item: PackItem) => void;
  deleteItem: (id: number) => void;
};

export default function PackingList({
  items,
  togglePacked,
  deleteItem,
}: PackingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem
            item={item}
            key={item.id}
            togglePacked={togglePacked}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
