import { ChangeEvent, FormEvent, useState } from 'react';
import { MAX_ITEMS } from '../../const';
import { PackItem } from '../../types/types';

type FormProps = {
  setItems: (newItem: PackItem) => void;
};

export default function Form({ setItems }: FormProps) {
  const [formData, setFormData] = useState({ description: '', quantity: 1 });

  function handlerSubmit(e: FormEvent) {
    e.preventDefault();

    if (!formData.description) {
      return;
    }
    setItems({
      id: new Date().getTime(),
      description: formData.description,
      quantity: formData.quantity,
      packed: false,
    });

    setFormData({ description: '', quantity: 1 });
  }

  function handlerChange(e: ChangeEvent) {
    e.target.classList.contains('input') &&
      setFormData({
        ...formData,
        description: (e.target as HTMLInputElement).value,
      });

    e.target.classList.contains('select') &&
      setFormData({
        ...formData,
        quantity: +(e.target as HTMLSelectElement).value,
      });
  }
  return (
    <form className="add-form" onSubmit={handlerSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        className="select"
        value={formData.quantity}
        onChange={handlerChange}
      >
        {Array.from({ length: MAX_ITEMS }, (_, i) => i + 1).map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
      <input
        className="input"
        type="text"
        placeholder="Item..."
        value={formData.description}
        onChange={handlerChange}
      />
      <button>Add</button>
    </form>
  );
}
