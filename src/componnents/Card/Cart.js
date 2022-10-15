import classes from "./Cart.module.css";
import { Button } from "@mui/material";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const hasItems = cartCtx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item, index) => (
        <CartItem
          key={index}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
    // <ul className={classes["cart-items"]}>
    //   {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
    //     <li>{item.name}</li>
    //   ))}
    // </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{price}</span>
      </div>
      <div className={classes.actions}>
        <Button variant="outlined" onClick={props.onClose}>
          {" "}
          Close{" "}
        </Button>
        {hasItems && <Button variant="contained" onClick={props.onOrder}> Order </Button>}
      </div>
    </Modal>
  );
};
export default Cart;
