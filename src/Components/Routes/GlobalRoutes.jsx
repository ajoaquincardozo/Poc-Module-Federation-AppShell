import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductCatalog from "../Microfrontends/ProductCatalog";
import ProductDetail from "../Microfrontends/ProductDetail";

function GlobalRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<ProductCatalog />} />
      <Route path=":productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default GlobalRoutes;
