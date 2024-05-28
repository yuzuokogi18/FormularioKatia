import React from 'react';

function ProductListItem({ product }) {
  return (
    <li>
      Nombre del producto: {product.productName}, ID: {product.productId}, Cantidad: {product.quantity}, Fecha: {product.registrationDate}, Marca: {product.brand}
    </li>
  );
}

export default ProductListItem;
