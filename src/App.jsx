import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Popular from './components/popular/Popular';
import Recomended from './components/recommended/Recommended';

function App() {
  const [state, setState] = useState({
    dishes: [],
    popularDishes: [],
  });

  useEffect(() => {
    fetch(
      'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/',
    )
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Popular popularDishes={state.popularDishes} />
      <Recomended dishes={state.dishes} />
    </div>
  );
}

export default App;
