import { PackItem } from '../../types/types';

type PackingItemProps = {
  item: PackItem;
};

export default function PackingItem({ item }: PackingItemProps) {
  const { description, packed, quantity } = item;

  return (
    <li>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
}
