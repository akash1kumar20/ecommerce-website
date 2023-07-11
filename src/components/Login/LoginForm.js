import React, { useContext, useState } from "react";
import Title from "../Header/Title";
import AuthContext from "../../Data_room/auth-context";
import classes from "./../Other_files/Contact.module.css";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const cartCtx = useContext(AuthContext);
  const navigate = useNavigate();
  //instead of useHistory we using useNavigate
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  const nameFn = (event) => {
    setName(event.target.value);
  };
  const passwordFn = (event) => {
    setPassword(event.target.value);
  };
  const mailFn = (event) => {
    setMail(event.target.value);
  };

  const userFormData = (event) => {
    event.preventDefault();

    const mtitle = name;
    const passValue = password;
    const emailValue = mail;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKU4q2CTZZAoZ5TqdKPLlU7bJIwmX0kJs",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            // if (data && data.error && data.error.message) {
            //   //if we have data, and data has an error object with some message proprety, then we make our errorMessage equal to that message.
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        cartCtx.login(data.idToken);
        navigate("/products");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <Title />
      <div className="container justify-content-between">
        <h4 className={classes.info}>Please Login to use all features!</h4>
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
              <label htmlFor="mpassword">Password</label>
              <br></br>
              <input
                type="password"
                id="mpassword"
                required
                value={password}
                onChange={passwordFn}
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
