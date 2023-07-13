import { initialItems } from '../../const';
import PackingItem from '../packing-item/packing-item';

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {
          initialItems.map((item) => <PackingItem item={item} key={item.id} />)
        }
      </ul>
    </div>
  );
}
