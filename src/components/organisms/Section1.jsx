import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import Lista from '../molecules/Lista';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Stack from '../../data/Stack';
import './Section1.css';

function Section1() {
  const productStackRef = useRef(new Stack());
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [brand, setBrand] = useState('');
  const [showProductList, setShowProductList] = useState(false);
  const [products, setProducts] = useState([]);

  const handlerClick = (event) => {
    if (!productName || !productId || !quantity || !registrationDate || !brand) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos antes de registrar el producto.',
      });
      return;
    }
    if (!/^\d{4}$/.test(productId)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El ID del producto debe contener exactamente 4 dígitos.',
      });
      return;
    }

    const product = {
      productName,
      productId,
      quantity,
      registrationDate,
      brand,
    };

    productStackRef.current.push(product);
    setProducts([...products, product]);

    Swal.fire({
      title: 'Producto Registrado',
      html: `Nombre: ${productName}<br/>
             ID: ${productId}<br/>
             Cantidad: ${quantity}<br/>
             Fecha: ${registrationDate}<br/>
             Marca: ${brand}`,
      imageUrl: './productos.jpg',
      imageWidth: 400,
      imageHeight: 200,
    });

    console.log('Pila de productos:');
    productStackRef.current.print();
    setProductName('');
    setProductId('');
    setQuantity('');
    setRegistrationDate('');
    setBrand('');
  };

  const handleShowListClick = () => {
    setShowProductList(true);
  };

  const renderProductsList = () => {
    const productsArray = products;
    const productsList = [];
    for (let i = 0; i < productsArray.length; i++) {
      productsList.push(
        <li key={i}>
          Nombre del producto: {productsArray[i].productName}, ID: {productsArray[i].productId}, Cantidad: {productsArray[i].quantity}, Fecha: {productsArray[i].registrationDate}, Marca: {productsArray[i].brand}
        </li>
      );
    }
    return productsList;
  };

  return (
    <>
      <div id="Conteiner">
        <Text></Text>
        <Lista type="text" placeholder="Ingresa el nombre del producto" text="Nombre del producto" val={productName} fnVal={setProductName}></Lista>
        <Lista type="text" placeholder="Ingresa el ID del producto" text="ID del producto" val={productId} fnVal={setProductId}></Lista>
        <Lista type="number" placeholder="Ingresa la cantidad del producto" text="Cantidad" val={quantity} fnVal={setQuantity}></Lista>
        <Lista type="date" placeholder="Ingresa la fecha de registro del producto" text="Fecha" val={registrationDate} fnVal={setRegistrationDate}></Lista>
        <Lista type="text" placeholder="Ingresa la marca del producto" text="Marca" val={brand} fnVal={setBrand}></Lista>
        <Button id="button" title="Registrar Producto" onclick={handlerClick}></Button>
      </div>
      <div id="conteiner2">
        <Button title="Mostrar Lista de Productos" onclick={handleShowListClick} />
        {showProductList && (
          <ul>
            {renderProductsList()}
          </ul>
        )}
      </div>
    </>
  );
}

export default Section1;