import React from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faStar } from "@fortawesome/free-solid-svg-icons";
import img1 from "./../../images/Album 1.png";
import img2 from "./../../images/Album 2.png";
import img3 from "./../../images/Album 3.png";
import img4 from "./../../images/Album 4.png";

export default function SingleProduct() {
  let dataRequired = JSON.parse(localStorage.getItem("product"));
  const params = useParams();
  console.log(params);
  return (
    <div className="container-fluid">
      <div className="row blue ms-2 ">
        <div className="col-lg-1 yellow">
          <div className="row red">
            <img src={dataRequired.image} width="120px" height="100px" />
          </div>
          <div className="row red">
            <img src={dataRequired.image} width="120px" height="100px" />
          </div>
          <div className="row red">
            <img src={dataRequired.image} width="120px" height="100px" />
          </div>
          <div className="row red">
            <img src={dataRequired.image} width="120px" height="100px" />
          </div>
          <div className="row red">
            <img src={dataRequired.image} width="120px" height="100px" />
          </div>
        </div>
        <div className="col-lg-2 yellow ms-2">
          <img
            src={dataRequired.image}
            width="300px"
            height="300px"
            className="green"
          />
        </div>
        <div className="col-lg-8 pink ">
          <h3>{dataRequired.name}</h3>
          <h4>₹{dataRequired.price}</h4>
          <p className="star">
            3.9 <FontAwesomeIcon icon={faStar} />
          </p>
          <p>
            <b>All Products</b>
            <br></br>
            <img src={img4} width="80x" height="80px" className="me-3" />
            <img src={img3} width="80x" height="80px" className="me-3" />
            <img src={img2} width="80x" height="80px" className="me-3" />
            <img src={img1} width="80x" height="80px" className="me-3" />
          </p>
          <p>
            <b>Available offers</b>
            <br></br>
            Eligible for Flipkart Pay Later? <br></br>
            <FontAwesomeIcon icon={faTag} className="sky" /> <b>Bank Offer</b>{" "}
            Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced
            between ₹15,000 to ₹39,999 <a href="#">T&C</a> <br></br>
            <FontAwesomeIcon icon={faTag} className="sky" /> <b>Bank Offer</b>{" "}
            Flat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced
            between ₹40,000 to ₹49,999 <a href="#">T&C</a> <br></br>
            <FontAwesomeIcon icon={faTag} className="sky" /> <b>Bank Offer</b>{" "}
            Flat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of
            ₹50,000 and above <a href="#">T&C</a>
            <br></br>
            <a href="#">+8 more offers</a>
            <br></br>
            <b>Deliver to All India</b>
            <br></br>
            Delivery by 18 Jul, Tuesday| <br></br>Free₹40? if ordered before
            2:59 PM <br></br>
            View Details Services Cash on Delivery available?<br></br>
            <b>Specification</b>
            <br></br>
            Fits:Slim|Size:XXL
          </p>
        </div>
      </div>
    </div>
  );
}
