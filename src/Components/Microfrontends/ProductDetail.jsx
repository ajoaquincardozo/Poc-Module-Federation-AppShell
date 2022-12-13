// import React, { useState, useEffect, Suspense } from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// const ProductDetailMfe = React.lazy(() => import("mfeProducts/ProductDetail"));

export default function ProductDetail() {
    const { productId } = useParams();
    // const [showProducts, setShowProducts] = useState(true);

    // const handleAddProduct = (event) => {
    //   const newProduct = event.detail.newProduct;
    //   alert(JSON.stringify(newProduct, null, 2));
    // };

    // useEffect(() => {
    //   window.addEventListener('add-product', handleAddProduct);

    //   // cleanup this component
    //   return () => {
    //     window.removeEventListener('add-product', handleAddProduct);
    //   };
    // }, []);

    return (
        // <React.Suspense fallback={<div>Cargando producto....</div>}>
        //     <Product/>
        // </React.Suspense>
        <div>Product detial: {productId}</div>
    );
}