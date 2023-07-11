import React, { useState } from "react";
import Title from "./../Header/Title.js";
import classes from "./Contact.module.css";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  //instead of useHistory we using useNavigate
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const nameFn = (event) => {
    setName(event.target.value);
  };
  const mobileFn = (event) => {
    setMobile(event.target.value);
  };
  const mailFn = (event) => {
    setMail(event.target.value);
  };

  const userFormData = (event) => {
    event.preventDefault();
    const NewObj = {
      mtitle: name,
      mtext: mobile,
      mdate: mail,
    };
    fetch(
      "https://react-movie-project-c8d34-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify(NewObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/products");
    //when the user submit the form, first that data will be stored in database and then user will navigate to Store component
  };

  return (
    <div>
      <Title />
      <div className="container justify-content-between">
        <h4 className={classes.info}>
          Please fill the details, we'll reach you soon:
        </h4>
        <div className={classes.box}>
          <form onSubmit={userFormData}>
            <div className={classes.control}>
              <label htmlFor="mname">Name</label>
              <br></br>
              <input
                type="text"
                id="mname"
                required
                value={name}
                onChange={nameFn}
              ></input>
            </div>
            <div className={classes.control}>
              <label htmlFor="mmobile">Mobile Number</label>
              <br></br>
              <input
                type="text"
                id="mmobile"
                required
                value={mobile}
                onChange={mobileFn}
              ></input>
            </div>
            <div className={classes.control}>
              <label htmlFor="mmail">Email</label>
              <br></br>
              <input
                type="email"
                id="mmail"
                required
                value={mail}
                onChange={mailFn}
              ></input>
            </div>
            <div className={classes.control}>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
