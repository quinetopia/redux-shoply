import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css";
import { addToCart, takeFromCart } from "./actions.js";

// "name": "tv",
//       "price": 219.99,
//       "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
//       "image_url":


function Product({product: {name, price, description, image_url}, productNum}) {
  const Dispatch=useDispatch();
  const cart = useSelector(st => st.cart);

  const handleAddClick = () => {
    console.log(`Should add ${productNum} to the cart soon!`)
    Dispatch(addToCart(productNum));
  }

  const handleMinusClick = () => {
    console.log(`Should take  ${productNum} from the cart soon`)
    Dispatch(takeFromCart(productNum))
  }

  return (
    <div className="Product-view">
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <h3>{price}</h3>
      <h4>{description}</h4>
      <button className="Product-add-btn" onClick={handleAddClick}>+</button>
      <button className="Product-minus-btn" onClick={handleMinusClick}>-</button>
    </div>
  )
};

export default Product;