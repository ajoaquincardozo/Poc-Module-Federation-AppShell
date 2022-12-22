// import React, { useState, useEffect, Suspense } from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetailMfe = React.lazy(() => import("mfeProducts/ProductDetail"));

export default function ProductDetail() {
    const { productId } = useParams();

    return (
        <React.Suspense fallback={<div>Cargando producto....</div>}>
            <ProductDetailMfe id={productId}/>
        </React.Suspense>
        // <div>Product detial: {productId}</div>
    );
}