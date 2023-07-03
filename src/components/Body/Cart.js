import React, { useContext, useState } from "react";
import "./Cart.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartContext from "../../Data_room/CartContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  let cartItem;
  let cartPrice;
  let cartTitle;
  const cartItems = cartCtx.items.map((item) => (
    <li>
      {(cartItem = item.image)} {(cartPrice = item.price)}
      {(cartTitle = item.name)}
    </li>
  ));
  return (
    <div>
      <button className="btn btn-md bg-primary text-white" onClick={handleShow}>
        Cart
      </button>
      <Offcanvas
        show={show}
        // show on the left is the prop, gives by bootstrap and in curly bracket is the function
        onHide={handleClose}
        //onHide is the prop
        placement="end"
        //where we want to placed our canvas, we can place it either top, bottom, end or befault it's start
        backdrop={true}
        //if backdrop props value set to the false, we can also access our backdrop content, even the canvas is open.
        // responsive="lg"
        //here we're setting that our canvas is not work on when user works on large screen.
      >
        <Offcanvas.Header closeButton>
          <h2>CART</h2>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div></div>
          <div className="row">
            <div className="col-3 ms-3 text">
              <u>ITEM</u>
              <div className="cartImage">
                <img
                  src={`${cartItem}`}
                  width="80px"
                  height="80px"
                  className="mb-2 mt-2"
                />
                {cartTitle}
              </div>
            </div>
            <div className="col-3 text ">
              <u>PRICE</u>
              <p>{cartPrice}</p>
            </div>
            <div className="col-4 text">
              <u>QUANTITY</u>
              <p>0</p>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-1 box me-4">Total </div>
            <div className="col-1 box me-4"> ₹0</div>
          </div>
          <div className="row justify-content-center">
            <div className="col-3 me-5">
              <button className="btn btn-primary text-white btn-lg">
                PURCHASE
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
