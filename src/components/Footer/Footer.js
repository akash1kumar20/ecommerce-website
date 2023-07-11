import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faCameraRetro,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md-6">
          <h2>The Generics</h2>
        </div>
        <div className="col-md-6">
          <h2>
            <FontAwesomeIcon icon={faMusic} className="me-4 ms-4 bg-danger" />

            <FontAwesomeIcon
              icon={faCameraRetro}
              className="me-4 ms-4 bg-info"
            />

            <FontAwesomeIcon
              icon={faHeadphones}
              className="me-4 ms-4 bg-dark"
            />
          </h2>
        </div>
      </div>
    </div>
  );
}
