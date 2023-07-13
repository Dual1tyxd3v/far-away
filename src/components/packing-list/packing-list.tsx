import { PackItems } from '../../types/types';
import PackingItem from '../packing-item/packing-item';

export default function PackingList({ items }: {items: PackItems}) {
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
