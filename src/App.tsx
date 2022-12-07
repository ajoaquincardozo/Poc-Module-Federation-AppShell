import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Products from "home/Products";

const App = () => {
  const handleAddProduct = (event) => {
    const { id, price, quantity } = event.detail.newProduct;
    console.log("Shell-id", id);
    console.log("Shell-price", price);
    console.log("Shell-quantity", quantity);
  };

  useEffect(() => {
    window.addEventListener('add-product', handleAddProduct);

    // cleanup this component
    return () => {
      window.removeEventListener('add-product', handleAddProduct);
    };
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Products/>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
