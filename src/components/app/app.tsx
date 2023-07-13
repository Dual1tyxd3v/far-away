import Form from '../form/form';
import Logo from '../logo/logo';
import PackingList from '../packing-list/packing-list';
import Stats from '../stats/stats';

function App(): JSX.Element {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
