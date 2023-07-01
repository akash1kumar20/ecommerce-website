import React from "react";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="container box">
      <div className="row justify-content-end">
        <div className="col-1 me-2 mt-2">
          <button className="btn btn-dark btn-sm text-white ">X</button>
        </div>
      </div>
      <h2>CART</h2>
      <div className="row">
        <div className="col-3 text">
          <u>ITEM</u>
        </div>
        <div className="col-3 text">
          <u>PRICE</u>
        </div>
        <div className="col-4 text">
          <u>QUANTITY</u>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-1 text me-3">Total </div>
        <div className="col-1 text me-2"> ₹0</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3 me-5">
          <button className="btn btn-primary text-white btn-lg">
            PURCHASE
          </button>
        </div>
      </div>
    </div>
  );
}
