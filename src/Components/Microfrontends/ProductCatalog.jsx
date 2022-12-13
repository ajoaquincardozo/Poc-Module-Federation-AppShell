// import React, { useState, useEffect, Suspense } from "react";
import React, { useEffect } from "react";
const ProductsMfe = React.lazy(() => import("mfeProducts/Products"));

export default function ProductCatalog() {
    // const [showProducts, setShowProducts] = useState(true);

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
        <>
            {/* <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded text-xl mb-5 hidden" onClick={() => setShowProducts(!showProducts)}>Mostrar</button> */}
            <React.Suspense fallback={<div>Cargando productos....</div>}>
              <ProductsMfe/>
            </React.Suspense>
        </>
    );
}