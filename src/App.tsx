import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
const Products = React.lazy(() => import("mfeProducts/Products"));

const App = () => {
  const [showProducts, setShowProducts] = useState(true);

  const handleAddProduct = (event) => {
    const newProduct = event.detail.newProduct;
    alert(JSON.stringify(newProduct, null, 2));
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
      <Header/>
      <div className="my-10">
        <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded text-xl mb-5 hidden" onClick={() => setShowProducts(!showProducts)}>Mostrar</button>
        {showProducts && <Suspense fallback={<div>Cargando productos....</div>}>
          <Products/>
        </Suspense>}
      </div>
      <Footer/>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
