import { Button } from "@mui/material";
import classes from "./MealsForm.module.css";
import Input from "../../UI/Input";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const MealsForm = (props) => {

    const formSubmitHandler = () => {
        
    }
  return (
    <form className={classes.Form} onSubmit={formSubmitHandler}>
      <Input
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

      <Button type="submit" variant="outlined" startIcon={<AddShoppingCartIcon />}>
        Add to Cart
      </Button>
    </form>
  );
};
export default MealsForm;
