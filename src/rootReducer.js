import { products } from "./data.json";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_DISCOUNT,
  REMOVE_DISCOUNT,
} from "./actionTypes";

const INITIAL_STATE = { products: products, cart: {}, discount: {} };

/* Creates a store
containing:
cart object {productId/id : qty}
discounts: {discountKey : %}
products: {productId/id : {name, price, description, image_url}}
*/
function rootReducer(state = INITIAL_STATE, action) {
  // console.log("state is", state);

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.payload };
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload };
    case ADD_DISCOUNT:
      // Check if a discount already applied. if it is, do nothing
      // else create discountKey with percentage off
      return state;
    case REMOVE_DISCOUNT:
      // Remove discount if it exists.
      return state;
    default:
      return state;
  }
}

export default rootReducer;
