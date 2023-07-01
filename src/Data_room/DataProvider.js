import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultValue = {
  items: [],
};

const reducerFn = (latestSnapShot, actionTaken) => {
  if (actionTaken.do === "PLUS") {
    const indexPresent = latestSnapShot.items.findIndex(
      (item) => item.id === actionTaken.item.id
    );
    const alreadyPresentItems = latestSnapShot.items[indexPresent];
    let itemAdded;
    if (alreadyPresentItems) {
      const addedAgain = {
        ...alreadyPresentItems,
        // quantity: alreadyPresentItems.quantity + actionTaken.item.quantity,
      };
      itemAdded = [...latestSnapShot.items];
      itemAdded[indexPresent] = addedAgain;
    } else {
      itemAdded = latestSnapShot.items.concat(actionTaken.item);
    }

    return {
      items: itemAdded,
    };
  }
  return defaultValue;
};

const DataProvider = (props) => {
  const [latestState, dispatchFn] = useReducer(reducerFn, defaultValue);

  const addedInCart = (item) => {
    dispatchFn({ do: "PLUS", item: item });
  };

  const cartContext = {
    items: latestState.items,
    addItem: addedInCart,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default DataProvider;
