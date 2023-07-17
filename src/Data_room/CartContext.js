import React from "react";
const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default CartContext;
//this is used to make things global.
