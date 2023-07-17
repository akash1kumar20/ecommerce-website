import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import "./ProductsIterating.css";
import CartContext from "../../Data_room/CartContext";
import { useNavigate } from "react-router-dom";
export default function Productsiterating(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  const cartCtx = useContext(CartContext);
  function addItems(event) {
    event.preventDefault();
    cartCtx.addItem({
      id: props.id,
      price: props.price,
      name: props.name,
      image: `${props.image}`,
      quantity: 1,
    });
  }
  const addToLocalStorage = (event) => {
    event.preventDefault();
    var max = 5;
    var min = 1;
    var random = Math.random() * (max - min) + min;
    var result = random.toFixed(2);
    let objForLocalStorage = {
      id: props.id,
      price: props.price,
      name: props.name,
      image: `${props.image}`,
      rating: result,
    };
    localStorage.setItem("product", JSON.stringify(objForLocalStorage));
  };

  return (
    <div className="col-md-6 ps-5">
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
