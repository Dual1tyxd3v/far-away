import { PackItem } from '../../types/types';

type PackingItemProps = {
  item: PackItem;
  togglePacked: (item: PackItem) => void;
};

export default function PackingItem({ item, togglePacked }: PackingItemProps) {
  const { description, packed, quantity } = item;

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
      <button>❌</button>
    </li>
  );
}
