import { products } from "./data.json";

const INITIAL_STATE = {products: products, cart: {}, discount: {}}
/**
 * 
 */

// cart: {uniquekey : 1} 
// discounts: {discountKey : %}
// products: {uniquekey : {name:""
//                         price: 0
//                         description:""
//                         image_url:}
//           anotheruniqueKey: ...
//          }

function rootReducer(state = INITIAL_STATE, action) {
  console.log(state)

  switch(action.type) {
    case "ADD_TO_CART" :
      // Check if product key already in cart. Increment by one if it is
      // add key and qty 1 if it isn't
      break;
    case "REMOVE_FROM_CART" :
      // Adjust qty down
      //Need to check if qty = 0 and remove whole key if it does
      break;
    case "ADD_DISCOUNT":
      // Check if a discount already applied. if it is, do nothing
      // else create discountKey with percentage off
      break;
    case "REMOVE_DISCOUNT":
      // Remove discount if it exists.
      break;
    default :
      return state;
 }


}

export default rootReducer;