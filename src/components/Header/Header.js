import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark justify-content-center ">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav ">
          <li className="nav-item ms-md-5 me-md-2">
            <a className="nav-link active" href="#">
              HOME
            </a>
          </li>
          <li className="nav-item ms-md-5 me-md-2">
            <a className="nav-link active" href="#">
              STORE
            </a>
          </li>
          <li className="nav-item ms-md-5 me-md-5">
            <a className="nav-link active" href="#">
              ABOUT
            </a>
          </li>
          <li className="nav-item cart">
            <a className="nav-link active" href="#">
              cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
