import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Product from "./Product";
import CartCount from "./CartCount";

/* Maps through products (from store)
and creates Product components for each
*/
function ProductList() {
  const { products } = useSelector((st) => {
    console.log("st is", st);
    return {
      products: st.products,
    };
  }, shallowEqual);

  return (
    <div>
      <CartCount />
      <ul className="ProductList-list">
        {Object.keys(products).map((k) => (
          <Product key={k} product={products[k]} productId={k} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
