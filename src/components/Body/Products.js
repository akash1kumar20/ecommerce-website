import React from "react";
import Productsiterating from "./Productsiterating";
import "./Products.css";

const productList = [
  {
    id: 1,
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
export default function Products() {
  const productDisplay = productList.map((item) => (
    <Productsiterating
      key={item.id}
      name={item.title}
      price={item.price}
      image={item.imageUrl}
      id={item.id}
    />
  ));
  return (
    <div className="container">
      <h2 className="titleA">MUSIC</h2>
      <div className="row ms-5"> {productDisplay}</div>
    </div>
  );
}
