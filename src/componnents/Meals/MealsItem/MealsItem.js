import classes from "./MealsItem.module.css";
import React from "react";
import Card from "../../UI/Card";
import MealsForm from "./MealsForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const mealCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    mealCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      key: props.id,
    });
  };
  return (
    <Card className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsForm id={props.id} onAddToCart={addToCartHandler}></MealsForm>
      </div>
    </Card>
  );
};
export default MealsItem;
