import { Link, json } from "react-router-dom";
import React, { useContext } from "react";
import "./ProductsIterating.css";
import CartContext from "../../Data_room/CartContext";
export default function Productsiterating(props) {
  const cartCtx = useContext(CartContext);
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
  const addToLocalStorage = (event) => {
    event.preventDefault();
    let objForLocalStorage = {
      id: props.id,
      price: props.price,
      name: props.name,
      image: `${props.image}`,
    };
    localStorage.setItem("product", JSON.stringify(objForLocalStorage));
  };

  return (
    <div className="container">
      <div className="card" onClick={addToLocalStorage}>
        <Link to={`${props.id}`} className="link">
          {/* we define in the route that key of path take us to the single product page, so whenever user click on the image of title it take user to the single page product component with the id of the image/title clicked. Whatever we define here in to, it become the url of that thing. */}
          <h3 className="titleA">{props.name}</h3>
          <div className="card-img-top image">
            <img src={`${props.image}`} alt=""></img>
          </div>
        </Link>
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
