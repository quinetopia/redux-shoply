import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./CartCount.css";
import { Link } from "react-router-dom";

function CartCount() {
  const { products, cart } = useSelector(
    (st) => ({
      cart: st.cart,
      products: st.products,
    }),
    shallowEqual
  );

  function amountTotal() {
    let amount = 0;
    for (let k in cart) {
      console.log("we are multiplying", cart[k], products[k]);
      amount += cart[k] * products[k].price;
    }
    console.log("amount", amount);
    return amount;
  }

  return (
    <div className="cartCount">
      <Link to="/">
        <p className="left">Home</p>
      </Link>
      <Link to="/cart">
        <p className="right">Your total is ${amountTotal()}</p>
      </Link>
    </div>
  );
}

export default CartCount;
