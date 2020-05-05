import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_DISCOUNT,
  REMOVE_DISCOUNT,
} from "./actionTypes";

// Check if product key already in cart. Increment by one if it is
// add key and qty 1 if it isn't
function addToCart(productId, cart) {
  // const cart = useSelector((st) => st.cart);
  // console.log("productId is", productId);
  // console.log("cart is", cart);

  const currQty = cart[productId] || 0;
  let newQty = currQty + 1;
  return { type: ADD_TO_CART, payload: { ...cart, [productId]: newQty } };
}

// Adjust qty down
// Need to check if qty = 0 and remove whole key if it does
function takeFromCart(productId, cart) {
  let newCart;
  // const cart = useSelector((st) => st.cart);
  const currQty = cart[productId] || 0;
  let newQty = currQty - 1;
  if (newQty < 1) {
    newCart = { ...cart };
    delete newCart[productId];
  } else {
    newCart = { ...cart, [productId]: newQty };
  }
  return { type: REMOVE_FROM_CART, payload: newCart };
}

export { addToCart, takeFromCart };
