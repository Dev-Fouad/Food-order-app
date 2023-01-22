import { Fragment , useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartisShown, setCartIsShown]=useState(false)

  function showcarthandler (){
    setCartIsShown(true)
  }

  function deletecarthandler (){
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartisShown  && <Cart deletecart={deletecarthandler}/>}
      <Header showcart={showcarthandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
