import React from "react";
import Productsiterating from "./Productsiterating";
import "./Products.css";
import img1 from "../../images/Album 1.png";
import img2 from "../../images/Album 2.png";
import img3 from "../../images/Album 3.png";
import img4 from "../../images/Album 4.png";
const productList = [
  {
    id: 1,
    title: "Album 1",
    price: 100,
    imageUrl: <img src={img1} alt="Image 1" />,
  },
  {
    id: 2,
    title: "Album 2",
    price: 50,
    imageUrl: <img src={img2} alt="Image 2" />,
  },
  {
    id: 3,
    title: "Album 3",
    price: 70,
    imageUrl: <img src={img3} alt="Image 3" />,
  },
  {
    id: 4,
    title: "Album 4",
    price: 100,
    imageUrl: <img src={img4} alt="Image 4" />,
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
    <div>
      <h2 className="titleA">MUSIC</h2>
      <div> {productDisplay}</div>
    </div>
  );
}
