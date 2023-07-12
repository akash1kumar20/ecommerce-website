import React, { useEffect } from "react";
import Title from "../Header/Title";
import Products from "../Body/Products";
import { useNavigate } from "react-router-dom";
export default function Store() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  //we are making sure that this component is only get render when we taken in the localstorage, user can't visit this component even from the URL without the token.
  return (
    <div>
      <Title />
      <Products />
    </div>
  );
}
