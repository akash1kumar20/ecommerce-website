import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Cart from "../Body/Cart";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
      <div className="container-fluid justify-content-center ">
        <ul className="navbar-nav">
          <li className="nav-item ms-md-5 me-md-2">
            <NavLink to="/" className="ul">
              HOME
            </NavLink>
            {/* we use NavLink instead of link because Navlink help us to know, that which page is active */}
          </li>
          <li className="nav-item ms-md-5 me-md-2">
            <NavLink to="products" className="ul">
              STORE
            </NavLink>
          </li>
          <li className="nav-item ms-md-5 me-md-5">
            <NavLink to="about" className="ul">
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item me-md-5">
            <NavLink to="contact" className="ul">
              CONTACT
            </NavLink>
          </li>
          <li className="nav-item mt-1 cart">
            <Cart />
          </li>
        </ul>
      </div>
    </nav>
  );
}
