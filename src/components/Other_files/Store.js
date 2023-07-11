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
  return (
    <div>
      <Title />
      <Products />
    </div>
  );
}
