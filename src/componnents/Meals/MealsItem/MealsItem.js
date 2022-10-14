import classes from "./MealsItem.module.css";
import React from "react";
import Card from "../../UI/Card";
import MealsForm from "./MealsForm";
const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <Card className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsForm id={props.id}></MealsForm>
      </div>
    </Card>
  );
};
export default MealsItem;
