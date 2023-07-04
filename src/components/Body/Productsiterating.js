import React, { useContext } from "react";
import CartContext from "../../Data_room/CartContext";
import "./ProductsIterating.css";
export default function Productsiterating(props) {
  let cartCtx = useContext(CartContext);
  const addItems = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      id: props.id,
      price: props.price,
      name: props.name,
      image: `${props.image}`,
      quantity: 1,
    });
  };
  return (
    <div className="container">
      <div className="card">
        <h3 className="titleA">{props.name}</h3>
        <div className="card-img-top image">
          <img src={`${props.image}`} alt=""></img>
        </div>
        <div className="card-body">
          <div className="row justify-content-between">
            <div className="col-md-3 price">₹{props.price}</div>
            <div className="col-lg-7 margin">
              <button className="btn btn-md btn1" onClick={addItems}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
