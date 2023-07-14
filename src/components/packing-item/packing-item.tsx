import { PackItem } from '../../types/types';

type PackingItemProps = {
  item: PackItem;
  togglePacked: (item: PackItem) => void;
  deleteItem: (id: number) => void;
};

export default function PackingItem({ item, togglePacked, deleteItem }: PackingItemProps) {
  const { description, packed, quantity, id } = item;

  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => togglePacked({ ...item, packed: !item.packed })}
      />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  );
}
