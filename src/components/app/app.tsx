import { useState } from 'react';
import { initialItems } from '../../const';
import Form from '../form/form';
import Logo from '../logo/logo';
import PackingList from '../packing-list/packing-list';
import Stats from '../stats/stats';
import { PackItem } from '../../types/types';

function App(): JSX.Element {
  const [items, setItems] = useState(initialItems);

  const addItem = (newItem: PackItem) => {
    setItems([...items, newItem]);
  };

  const togglePacked = (newItem: PackItem) => {
    const index = items.findIndex((item) => item.id === newItem.id);
    setItems([...items.slice(0, index), newItem, ...items.slice(index + 1)]);
  };

  const deleteItem = (id: number) => {
    const index = items.findIndex((item) => item.id === id);
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  return (
    <div className="app">
      <Logo />
      <Form setItems={addItem} />
      <PackingList
        items={items}
        togglePacked={togglePacked}
        deleteItem={deleteItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
