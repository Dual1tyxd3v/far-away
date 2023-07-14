import { PackItems } from '../../types/types';

export default function Stats({items}: {items: PackItems}) {
  const readyItems = items.filter((item) => item.packed).length;
  const readyPerProcent = Math.ceil(readyItems * 100 / items.length) || 0;

  return (
    <footer className="stats">
      <em>💼 You have {items.length} items on your list and you already packed {readyItems} ({readyPerProcent}%)</em>
    </footer>
  );
}
