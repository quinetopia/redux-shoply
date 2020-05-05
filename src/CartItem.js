import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartItem.css";
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
function CartItem({ product: { name, price, image_url }, productId, qty }) {
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
    <div className="Cart-view">
      <Link to={`products/${productId}`}>
        <img src={image_url} alt={name} />
      </Link>
      <div className="details">
        <h3>{name}</h3>
        <h3>Each: ${price}</h3>
        <h3>qty:{qty}</h3>
      </div>

      <button className="Cart-add-btn" onClick={handleAddClick}>
        +
      </button>
      <button className="Cart-minus-btn" onClick={handleMinusClick}>
        -
      </button>
      <h3>Cost: ${price * qty}</h3>
    </div>
  );
}

export default CartItem;
