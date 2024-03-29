import React, { useContext, useState, useEffect } from "react";
import "./Cart.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartContext from "../../Data_room/CartContext";
import AuthContext from "../../Data_room/auth-context";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function Cart() {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const autCont = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [dataApi, setDataApi] = useState([]);
  const email = localStorage.getItem("email");
  const ChangesEMail = email.replace("@", "").replace(".", "");
  const handleShow = () => {
    fetch(
      `https://crudcrud.com/api/11eda2494c5a44e4bf764b10b9625916/value${ChangesEMail}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDataApi(data);
      });
    //this then is generate when response return tranfsormed data.
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const total = dataApi.reduce((prevValue, item) => {
    return prevValue + item.price * item.quantity;
  }, 0);

  const decrease = (id) => {
    cartCtx.removeItem();
  };

  const logOutHandler = (event) => {
    event.preventDefault();
    autCont.logout();
    navigate("/login");
  };

  if (dataApi.length > 0) {
    return (
      <div>
        <button
          className="btn btn-sm bg-primary text-white"
          onClick={handleShow}
        >
          Cart
        </button>
        <Offcanvas
          show={show}
          // show on the left is the prop, gives by bootstrap and in curly bracket is the function
          onHide={handleClose}
          //onHide is the prop
          placement="end"
          //where we want to placed our canvas, we can place it either top, bottom, end or befault it's start
          // backdrop={true}
          //if backdrop props value set to the false, we can also access our backdrop content, even the canvas is open. by default it's true, so we don't have to set it manually.
          // responsive="lg"
          //here we're setting that our canvas is not work on when user works on large screen.
        >
          <Offcanvas.Header closeButton>
            <h2>CART</h2>
          </Offcanvas.Header>

          <Offcanvas.Body>
            {dataApi.map((item) => (
              <div className="row" key={item.id}>
                <div className="col-3 ms-3 text">
                  <u>ITEM</u>

                  <div className="cartImage">
                    <img
                      src={`${item.image}`}
                      width="80px"
                      height="80px"
                      className="mb-2 mt-2"
                    />

                    {item.name}
                  </div>
                </div>
                <div className="col-3 text ">
                  <u>PRICE</u>
                  <p>{item.price}</p>
                </div>
                <div className="col-4 text">
                  <u>QUANTITY</u>
                  <p>
                    {item.quantity}
                    <button
                      className="btn btn-danger ms-2 btn-md"
                      onClick={decrease.bind(null, item.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </p>
                </div>
              </div>
            ))}
            <div className="row justify-content-end">
              <div className="col-1 box me-4">Total </div>
              <div className="col-1 box me-5"> ₹{total}</div>
            </div>
            <div className="row justify-content-center">
              <span className="span"> * Minimum Amount Should be 100</span>
              <div className="col-3 me-5">
                <button
                  className="btn btn-primary text-white btn-lg"
                  disabled={total < 100}
                >
                  PURCHASE
                </button>
              </div>
              <div className="col-3 me-5">
                <button
                  className="btn btn-danger text-white btn-lg"
                  onClick={logOutHandler}
                >
                  Logout
                </button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  } else {
    return (
      <div>
        <button
          className="btn btn-md bg-primary text-white"
          onClick={handleShow}
        >
          Cart
        </button>
        <Offcanvas show={show} placement="end" onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <h2>Empty Cart</h2>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>Please add some item into cart</p>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
}
