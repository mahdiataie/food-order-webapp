import { Fragment, useState } from "react";

import Header from "./componnents/Layout/Header";
//import Button from "@mui/material/Button";
//import styled from "styled-components";
//import Card from "@mui/material/Button";
//import styled from "styled-components";
//import { Paper, Card, Box } from '@mui/material';

import Meals from "./componnents/Meals/Meals";
import Cart from "./componnents/Card/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShow={showCartHandler}/>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
