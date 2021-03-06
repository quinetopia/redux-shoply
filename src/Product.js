import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css";
import { addToCart, takeFromCart } from "./actions.js";
import { Link } from "react-router-dom";

// Product structure:
// "name": "tv",
//       "price": 219.99,
//       "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
//       "image_url":

/* Takes in a product object
and creates product component
with details
and an add to/remove from cart
*/
function Product({ product: { name, price, image_url }, productId }) {
  const dispatch = useDispatch();
  const cart = useSelector((st) => st.cart);

  const handleAddClick = () => {
    console.log(`Should add ${productId} to the cart soon!`);
    dispatch(addToCart(productId, cart));
  };

  const handleMinusClick = () => {
    console.log(`Should take  ${productId} from the cart soon`);
    dispatch(takeFromCart(productId, cart));
  };

  return (
    <div className="Product-view">
      <Link to={`products/${productId}`}>
        <img src={image_url} alt={name} />
        <div className="details">
          <h3>{name}</h3>
          <h3>${price}</h3>
        </div>
      </Link>
      <button className="Product-add-btn" onClick={handleAddClick}>
        +
      </button>
      <button className="Product-minus-btn" onClick={handleMinusClick}>
        -
      </button>
    </div>
  );
}

export default Product;
