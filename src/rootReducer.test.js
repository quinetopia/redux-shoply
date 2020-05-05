import rootReducer from "./rootReducer";
import { products } from "./data.json";

describe("rootReducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual({
      products: products,
      cart: {},
      discount: {},
    });
  });

  it("should handle ADD_TO_CART", () => {
    expect(
      rootReducer(undefined, {
        type: "ADD_TO_CART",
        payload: { productId1: 2 },
      })
    ).toEqual({
      products: products,
      cart: { productId1: 2 },
      discount: {},
    });
  });

  it("should handle REMOVE_FROM_CART", () => {
    expect(
      rootReducer(undefined, {
        type: "REMOVE_FROM_CART",
        payload: { productId1: 2 },
      })
    ).toEqual({
      products: products,
      cart: { productId1: 2 },
      discount: {},
    });
  });
});
