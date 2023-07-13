import { PackItem } from '../../types/types';
import PackingItem from '../packing-item/packing-item';

type PackingListProps = {
  items: PackItem[];
};

export default function PackingList({ items }: PackingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
