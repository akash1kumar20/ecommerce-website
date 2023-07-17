import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import classes from "./NotFound.module.css";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 ">
          <h2 className={classes.errorText}>
            Hey! You Might take the wrong turn but don't worry i will help you.
            <FontAwesomeIcon icon={faFaceSmile} className={classes.smiley} />
          </h2>
        </div>
        <div className="col-12">
          <h1 className={classes.Ebtn}>
            <Link to="/login">
              <button className="btn btn-primary btn-lg">Click On Me!</button>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
