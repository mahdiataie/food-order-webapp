import { useState } from "react";

import Header from "./componnents/Layout/Header";

import Meals from "./componnents/Meals/Meals";
import Cart from "./componnents/Card/Cart";
import CartProvider from "./store/CartProvider";
import OrderSubmition from "./componnents/Layout/OrderSubmition";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [submitionIsShown, setSubmitionIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const orderHandler = () => {
    setCartIsShown(false);
    setSubmitionIsShown(true);
  };
  const submitCloseHandler = () => {
    setSubmitionIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} onOrder={orderHandler} />}
      {submitionIsShown && <OrderSubmition onClose={submitCloseHandler} />}
      <Header onShow={showCartHandler} />
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
