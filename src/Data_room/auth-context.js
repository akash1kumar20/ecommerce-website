import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  //just to find out that the user is logged in or not
  login: (token) => {},
  logout: () => {},
  email: "",
});

export const AuthContextProvider = (props) => {
  //we user provider directly in the index.js file to make it the parent of the other compponent.
  const tokenValue = localStorage.getItem("token");
  const mailValue = localStorage.getItem("email");
  const [email, setEmail] = useState(mailValue);
  const [token, setToken] = useState(tokenValue);
  //used to find that user is logged in or not, if we have a token then user is logged in, it also help us to auto-login after refresh the page.
  const userIsLoggenIn = !!token;
  //if a token is a string and not empty, it will return true and in other case it return false.
  const loginHandler = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setToken(token);
    setEmail(email);
    setTimeout(logoutHandler, 500000);
    //after a timer logoutHandler function will get activate, and it will auto logout the user.
    //default value of token expire is one hour.
  };
  const logoutHandler = () => {
    setToken(null);
    //just setting the token value equal to the null, because if token is empty user can access the data.
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("product");
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggenIn,
    login: loginHandler,
    logout: logoutHandler,
    email: email,
  };
  console.log(contextValue);
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
