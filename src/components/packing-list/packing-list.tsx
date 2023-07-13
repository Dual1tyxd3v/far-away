import { PackItem, PackItems } from '../../types/types';
import PackingItem from '../packing-item/packing-item';

type PackingListProps = {
  items: PackItems;
  togglePacked: (item: PackItem) => void;
};

export default function PackingList({ items, togglePacked }: PackingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem item={item} key={item.id} togglePacked={togglePacked} />
        ))}
      </ul>
    </div>
  );
}
