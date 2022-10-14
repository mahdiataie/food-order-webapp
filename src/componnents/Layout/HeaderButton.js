import CartIcon from '../Card/CartIcon';
import classes from './HeaderButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

const cartCtx = useContext(CartContext);
const itemNumbers = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
}, 0);

  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemNumbers}</span>
    </button>
  );
};

export default HeaderCartButton;