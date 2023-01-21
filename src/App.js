import { Fragment , useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartisShown, setCartIsShown]=useState(false)

  return (
    <Fragment>
      {cartisShown  && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
