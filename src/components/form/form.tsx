/* eslint-disable no-console */
import { ChangeEvent, FormEvent, useState } from 'react';
import { MAX_ITEMS } from '../../const';

export default function Form() {
  const [formData, setFormData] = useState({ input: '', select: '1' });

  function handlerSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handlerChange(e: ChangeEvent) {
    e.target.classList.contains('input') &&
      setFormData({ ...formData, input: (e.target as HTMLInputElement).value });

    e.target.classList.contains('select') &&
      setFormData({
        ...formData,
        select: (e.target as HTMLSelectElement).value,
      });
  }
  return (
    <form className="add-form" onSubmit={handlerSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        className="select"
        defaultValue={formData.select}
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
        value={formData.input}
        onChange={handlerChange}
      />
      <button>Add</button>
    </form>
  );
}
