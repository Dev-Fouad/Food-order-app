import { Fragment , useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartisShown, setCartIsShown]=useState(false)

  function showcarthandler (){
    setCartIsShown(true)
  }

  return (
    <Fragment>
      {cartisShown  && <Cart  />}
      <Header showcart={showcarthandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
