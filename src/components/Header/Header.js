import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Cart from "../Body/Cart";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark justify-content-center ">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item ms-md-5 me-md-2">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item ms-md-5 me-md-2">
            <Link to="product">STORE</Link>
          </li>
          <li className="nav-item ms-md-5 me-md-5">
            <Link to="about">ABOUT</Link>
          </li>
          <li className="nav-item mt-1 cart">
            <Cart />
          </li>
        </ul>
      </div>
    </nav>
  );
}
