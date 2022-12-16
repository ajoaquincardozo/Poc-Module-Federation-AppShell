import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductCatalog from "../Microfrontends/ProductCatalog";
import ProductDetail from "../Microfrontends/ProductDetail";
import Login from "../Login";

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Login />}/>
      <Route exact path="/products" element={<ProductCatalog />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default GlobalRoutes;
