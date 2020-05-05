import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import CartItem from "./CartItem";
import CartCount from "./CartCount";

/* Maps through products (from store)
and creates Product components for each
*/
function Cart() {
  const { products, cart } = useSelector(
    (st) => ({
      products: st.products,
      cart: st.cart,
    }),
    shallowEqual
  );

  function cartContents() {
    return Object.keys(cart).map((k) => (
      <CartItem key={k} product={products[k]} productId={k} qty={cart[k]} />
    ));
  }

  function amountTotal() {
    let amount = 0;
    for (let k in cart) {
      amount += cart[k] * products[k].price;
    }
    return amount;
  }

  return (
    <div>
      <CartCount />
      <ul className="Cart-list">
        {cartContents().length ? cartContents() : <p>Your cart is empty!</p>}
      </ul>
      <p>Total: ${amountTotal()}</p>
    </div>
  );
}

export default Cart;
