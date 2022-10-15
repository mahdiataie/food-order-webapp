import { Button } from "@mui/material";
import classes from "./MealsForm.module.css";
import Input from "../../UI/Input";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState, useRef } from "react";
const MealsForm = (props) => {
  const refAmount = useRef();
  const [formIsValid, setFormIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = refAmount.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      setFormIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
    console.log(enteredAmountNumber);
  };
  return (
    <form className={classes.Form} onSubmit={formSubmitHandler}>
      <Input
        ref={refAmount}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {/* <Button variant="outlined">Add</Button> */}

      <Button
        type="submit"
        variant="outlined"
        startIcon={<AddShoppingCartIcon />}
      >
        Add to Cart
      </Button>
      {!formIsValid && <p> Enter a valid Number!</p>}
    </form>
  );
};
export default MealsForm;
