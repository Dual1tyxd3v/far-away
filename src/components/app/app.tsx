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
    setItems(items.map((item) => (item.id === newItem.id ? newItem : item)));
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
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
