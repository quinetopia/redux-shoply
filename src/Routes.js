import React from "react";
import "./App.css";
import ProductList from "./ProductList";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route exact path="/products/:productId">
          <ProductDetails />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
