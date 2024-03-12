import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Add() {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productCosto, setProductCosto] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [inventario, setInventario] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "nombre":
        setProductName(value);
        break;
      case "cod":
        setProductCode(value);
        break;
      case "marca":
        setProductBrand(value);
        break;
      case "id_categoria":
        setCategoryId(value);
        break;
      case "cantidad":
        setProductQuantity(value);
        break;
      case "costo":
        setProductCosto(value);
        break;
      case "precio":
        setProductPrice(value);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categoria")
      .then((res) => res.json())
      .then((dataCategorias) => setInventario(dataCategorias))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      nombre: productName,
      cod: productCode,
      precio: productPrice,
      marca: productBrand,
      id_categoria: categoryId,
      costo: productCosto,
      cantidad: productQuantity,
    };

    fetch("http://127.0.0.1:8000/api/producto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setProductName("");
        setProductCode("");
        setProductBrand("");
        setCategoryId("");
        setProductQuantity("");
        setProductCosto("");
        setProductPrice("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="w-[100%] h-[85%] mx-auto p-6 bg-white rounded shadow">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Añadir Producto</h2>
          <Button color="primary" className="w-[80px]">
            <Link to="/Inventario">Back</Link>
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-12">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Producto *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={productName}
              className="mt-1 p-2 border rounded w-full"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="barcode"
              className="block text-sm font-medium text-gray-700"
            >
              Código de Producto *
            </label>
            <input
              type="text"
              id="cod"
              name="cod"
              value={productCode}
              className="mt-1 p-2 border rounded w-full"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Marca
            </label>
            <input
              type="text"
              id="marca"
              name="marca"
              value={productBrand}
              className="mt-1 p-2 border rounded w-full"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Categoria *
            </label>
            <select
              id="id_categoria"
              name="id_categoria"
              value={categoryId}
              className="mt-1 p-2 border rounded w-full"
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Selecciona
              </option>
              {inventario.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="productUnit"
              className="block text-sm font-medium text-gray-700"
            >
              Unidad de Producto *
            </label>
            <input
              type="text"
              id="cantidad"
              name="cantidad"
              value={productQuantity}
              className="mt-1 p-2 border rounded w-full"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="cost"
              className="block text-sm font-medium text-gray-700"
            >
              Precio del Producto *
            </label>
            <input
              type="text"
              id="precio"
              name="precio"
              value={productPrice}
              className="mt-1 p-2 border rounded w-full"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="costo"
              className="block text-sm font-medium text-gray-700"
            >
              Costo del Producto *
            </label>
            <input
              type="text"
              id="costo"
              name="costo"
              value={productCosto}
              className="mt-1 p-2 border rounded w-full"
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="col-span-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[100px] mx-auto"
          >
            Agregar
          </button>
        </form>
      </div>
    </>
  );
}

export default Add;
