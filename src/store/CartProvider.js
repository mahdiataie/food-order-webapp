import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exsistingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exsistingItem = state.items[exsistingItemIndex];
    let updatedItems;

    if (exsistingItem) {
      const updatedItem = {
        ...exsistingItem,
        amount: exsistingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exsistingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const removeItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const removeItem = state.items[removeItemIndex];
    const updatedTotalAmount = state.totalAmount - removeItem.price;
    let updatedItems;
    if (removeItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...removeItem,
        amount: removeItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[removeItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
