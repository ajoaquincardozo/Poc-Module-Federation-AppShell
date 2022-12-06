import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Products from "home/Products";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Products/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
