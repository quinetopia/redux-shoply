import actions from "./actions";
import { addToCart, takeFromCart } from "./actions";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_DISCOUNT,
  REMOVE_DISCOUNT,
} from "./actionTypes";

// Dispatch(takeFromCart(productId, cart));

// { type: "ADD_TO_CART", payload: { productId1: 2 }}

// function addToCart(productId, cart) {
//   // const cart = useSelector((st) => st.cart);
//   // console.log("productId is", productId);
//   // console.log("cart is", cart);

//   const oldQty = cart[productId] || 0;
//   let newQty = oldQty + 1;
//   return { type: ADD_TO_CART, payload: { ...cart, [productId]: newQty } };
// }

let productIds = [
  "productId0",
  "productId1",
  "productId2",
  "productId3",
  "productId4",
];
const TEST_CART = { [productIds[0]]: 1, [productIds[1]]: 2 };

describe("action creators", () => {
  it("should handle addToCart, new product", () => {
    expect(addToCart(productIds[3], TEST_CART)).toEqual({
      type: ADD_TO_CART,
      payload: {
        [productIds[0]]: 1,
        [productIds[1]]: 2,
        [productIds[3]]: 1,
      },
    });
  });

  it("should handle addToCart, increment product", () => {
    expect(addToCart(productIds[0], TEST_CART)).toEqual({
      type: ADD_TO_CART,
      payload: {
        [productIds[0]]: 2,
        [productIds[1]]: 2,
      },
    });
  });

  it("should handle takeFromCart, decrement product", () => {
    expect(takeFromCart(productIds[1], TEST_CART)).toEqual({
      type: REMOVE_FROM_CART,
      payload: {
        [productIds[0]]: 1,
        [productIds[1]]: 1,
      },
    });
  });

  it("should handle takeFromCart, remove product", () => {
    expect(takeFromCart(productIds[0], TEST_CART)).toEqual({
      type: REMOVE_FROM_CART,
      payload: {
        [productIds[1]]: 2,
      },
    });
  });
});
