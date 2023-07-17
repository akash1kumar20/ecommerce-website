import React, { useEffect, useContext } from "react";
import Title from "../Header/Title";
import Products from "../Body/Products";
import AuthContext from "../../Data_room/auth-context";
import { useNavigate } from "react-router-dom";
export default function Store() {
  const autCont = useContext(AuthContext);
  const isLoggedIN = autCont.isLoggedIn;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  //we are making sure that this component is only get render when we taken in the localstorage, user can't visit this component even from the URL without the token.
  return (
    <>
      {isLoggedIN && (
        <div>
          <Title />
          <Products />
        </div>
      )}
    </>
  );
}
