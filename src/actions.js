import { useSelector } from "react-redux"

function addToCart(productNum){
  const cart=useSelector(st => st.cart)
  const oldQty = Object.keys(cart).filter(k => cart[k]) || 0;
  let newQty = oldQty +1 ;
    return { type : "ADD_TO_CART", payload: {...cart, [productNum]: newQty}};
}

function takeFromCart(productNum){
  let newCart;
  const cart=useSelector(st => st.cart)
  const oldQty = Object.keys(cart).filter(k => cart[k]) || 0;
  let newQty = oldQty - 1 ;
  if (newQty < 1){
    newCart = {...cart};
    delete newCart[productNum]
  } else {
    newCart = {...oldCart, [productNum]: newQty}
  }
    return { type : "ADD_TO_CART", payload: newCart};
}

export { addToCart, takeFromCart }


