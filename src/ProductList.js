import React from "react";
import Redux from "redux";
import { useSelector, shallowEqual } from "react-redux";
import Product from "./Product"
import Cart from "./Cart"

function ProductList() {
  const { products, cart } = useSelector(st => ({
    products: st.products, 
    cart: st.cart}), 
  shallowEqual);

  return (
    <div>
    <Cart />
    <ul className="ProductList-list">
      {Object.keys(products).map(k => 
        <Product key={k} product={products[k]} productNum={k} />)
      }
    </ul>
    </div>
  )

};

export default ProductList;