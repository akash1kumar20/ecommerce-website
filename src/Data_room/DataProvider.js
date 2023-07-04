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
        quantity: alreadyPresentItems.quantity + actionTaken.item.quantity,
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
  if (actionTaken.do === "MINUS") {
    const indexPresent = latestSnapShot.items.findIndex(
      (item) => item.id === actionTaken.id
    );
    const alreadyPresentItems = latestSnapShot.items[indexPresent];
    let itemSubtract;
    if (alreadyPresentItems.quantity === 1) {
      itemSubtract = latestSnapShot.items.filter(
        (item) => item.id !== actionTaken.id
      );
    } else {
      const goingToRemove = {
        ...alreadyPresentItems,
        quantity: alreadyPresentItems.quantity - 1,
      };
      itemSubtract = [...latestSnapShot.items];
      itemSubtract[indexPresent] = goingToRemove;
    }
    return {
      items: itemSubtract,
    };
  }
  return defaultValue;
};

const DataProvider = (props) => {
  const [latestState, dispatchFn] = useReducer(reducerFn, defaultValue);

  const addedInCart = (item) => {
    dispatchFn({ do: "PLUS", item: item });
  };
  const removeFromCart = (id) => {
    dispatchFn({ do: "MINUS", id: id });
  };

  const cartContext = {
    items: latestState.items,
    addItem: addedInCart,
    removeItem: removeFromCart,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default DataProvider;
