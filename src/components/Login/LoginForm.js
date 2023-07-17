import React, { useRef, useState, useContext } from "react";
import Title from "../Header/Title";
import classes from "./../Other_files/Contact.module.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Data_room/auth-context";

export default function LoginForm() {
  const autCont = useContext(AuthContext);
  const navigate = useNavigate();
  //instead of useHistory we using useNavigate
  const mailRef = useRef();
  const passRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  //we use state to find, if the user is signing in or signing up.
  const [isLoading, setIsLoading] = useState(false);
  //to display something, while making an api call
  const userFormData = (event) => {
    event.preventDefault();
    const passValue = passRef.current.value;
    const emailValue = mailRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      //if user is signing in, here we want user to use all other featuers just by sign up, that's why we use !isLogin, else we use isLogin.
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKU4q2CTZZAoZ5TqdKPLlU7bJIwmX0kJs";
    } else {
      //if user is signing up
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKU4q2CTZZAoZ5TqdKPLlU7bJIwmX0kJs";
    }
    //for sigin as well as for singup we need different URL's
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passValue,
        returnSecureToken: true,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        //when we make call we want to stop loading the state, no matter we get error or not.
        if (res.ok) {
          //if the response is ok
          return res.json();
        } else {
          //to catch if an any error if response is not ok
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
            //to show the error, if some thing is wrong in authentication
          });
        }
      })
      .then((data) => {
        autCont.login(data.idToken, emailValue);
        //passing our token to the login, which also take token as the argument.
        navigate("/products");
        //after success send user to products page.
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
              <label htmlFor="mmail">Email</label>
              <br></br>
              <input type="email" id="mmail" required ref={mailRef}></input>
            </div>
            <div className={classes.control}>
              <label htmlFor="mpassword">Password</label>
              <br></br>
              <input
                type="password"
                id="mpassword"
                required
                ref={passRef}
                minLength="6"
              ></input>
            </div>

            <div className={classes.button}>
              {!isLoading && (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
              {/* we only want to display the submit button if we're not loading the state, if we're in that case we'll show something else */}
              {isLoading && <h3>Please Wait ...</h3>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
