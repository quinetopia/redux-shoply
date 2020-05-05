import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./Product.css";
import { addToCart, takeFromCart } from "./actions.js";
import { useParams, Redirect } from "react-router-dom";
import CartCount from "./CartCount";

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
function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products, cart } = useSelector(
    (st) => ({
      products: st.products,
      cart: st.cart,
    }),
    shallowEqual
  );

  const product = products[productId];
  if (!product) return <Redirect to="/" />;
  const { name, price, description, image_url } = product;

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
      <CartCount />
      <img src={image_url} alt={name} />
      <div className="details">
        <h3>{name}</h3>
        <h3>${price}</h3>
        <h4>{description}</h4>
      </div>
      <button className="Product-add-btn" onClick={handleAddClick}>
        +
      </button>
      <button className="Product-minus-btn" onClick={handleMinusClick}>
        -
      </button>
    </div>
  );
}

export default ProductDetails;
