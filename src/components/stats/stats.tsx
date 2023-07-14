import { PackItems } from '../../types/types';

export default function Stats({ items }: { items: PackItems }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list!</em>
      </footer>
    );
  }

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
