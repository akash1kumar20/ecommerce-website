import React, { useContext } from "react";
import CartContext from "../../Data_room/CartContext";
import "./ProductsIterating.css";
export default function Productsiterating(props) {
  let cartCtx = useContext(CartContext);
  const addItems = () => {
    cartCtx.addItem({
      id: props.id,
      price: props.price,
      name: props.name,
    });
  };
  let odd = props.id % 2 !== 0;
  let even = props.id % 2 === 0;
  return (
    <div className="container ">
      <div className="row justify-content-start green">
        {odd && (
          <div className="col-md-3">
            <div className="image">{props.image}</div>
            <li className="price">₹{props.price}</li>
            <button className="btn btn-md btn1" onClick={addItems}>
              ADD TO CART
            </button>
          </div>
        )}
      </div>
      <div className="row justify-content-end yellow">
        {even && (
          <div className="col-md-3">
            <div className="image">{props.image}</div>
            <li className="price">₹{props.price}</li>
            <button className="btn btn-md btn1" onClick={addItems}>
              ADD TO CART
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
