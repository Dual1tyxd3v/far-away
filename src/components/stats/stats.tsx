import { PackItems } from '../../types/types';

export default function Stats({ items }: { items: PackItems }) {
  const readyItems = items.filter((item) => item.packed).length;
  const readyPerProcent = Math.ceil((readyItems * 100) / items.length) || 0;
  const statusMessage =
    readyPerProcent === 100
      ? 'You got everything! Ready to go ✈'
      : `💼 You have ${items.length} items on your list and you already packed ${readyItems} (${readyPerProcent}%)`;

  return (
    <footer className="stats">
      <em>{statusMessage}</em>
    </footer>
  );
}
