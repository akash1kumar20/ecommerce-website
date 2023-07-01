import React from "react";
import "./ProductsIterating.css";
export default function Productsiterating(props) {
  let odd = props.id % 2 !== 0;
  let even = props.id % 2 === 0;
  return (
    <div className="container ">
      <div className="row justify-content-start green">
        {odd && (
          <div className="col-md-3">
            <div className="image">{props.image}</div>
            <li className="price">₹{props.price}</li>
            <li className="btn btn-md btn1">ADD TO CART</li>
          </div>
        )}
      </div>
      <div className="row justify-content-end yellow">
        {even && (
          <div className="col-md-3">
            <div className="image">{props.image}</div>
            <li className="price">₹{props.price}</li>
            <li className="btn btn-md btn1">ADD TO CART</li>
          </div>
        )}
      </div>
    </div>
  );
}
