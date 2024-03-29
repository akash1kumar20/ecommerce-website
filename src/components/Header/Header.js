import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Cart from "../Body/Cart";
import AuthContext from "../../Data_room/auth-context";
export default function Header() {
  const autCont = useContext(AuthContext);
  const isLoggedIN = autCont.isLoggedIn;
  const logoutHandler = (event) => {
    event.preventDefault();
    autCont.logout();
  };
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
          {isLoggedIN && (
            <li className="nav-item ms-md-5 me-md-2">
              <NavLink to="products" className="ul">
                STORE
              </NavLink>
            </li>
          )}
          <li className="nav-item ms-md-5 me-md-5">
            <NavLink to="about" className="ul">
              ABOUT
            </NavLink>
          </li>
          {!isLoggedIN ? (
            <li className="nav-item  me-md-5">
              <NavLink to="login" className="ul">
                LOGIN
              </NavLink>
            </li>
          ) : (
            <li className="nav-item  me-md-5" onClick={logoutHandler}>
              <NavLink to="login" className="ul">
                LOGOUT
              </NavLink>
            </li>
          )}
          {/* if the user is loggedIn we show Logout, else LogIn option */}
          <li className="nav-item me-md-5">
            <NavLink to="contact" className="ul">
              CONTACT
            </NavLink>
          </li>
          {isLoggedIN && (
            <li className="nav-item mt-1 cart">
              <Cart />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
