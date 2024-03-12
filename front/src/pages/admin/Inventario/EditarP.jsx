import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditarProducto = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nombre: "",
    cod: "",
    precio: "",
    marca: "",
    id_categoria: "",
    cantidad: "",
    foto: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    fetch(`http://127.0.0.1:8000/api/producto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Limpiar el formulario después de enviar los datos
        setFormData({
          nombre: "",
          cod: "",
          precio: "",
          marca: "",
          id_categoria: "",
          cantidad: "",
          foto: null,
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/producto/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>

      <div className="w-[100%] h-[60%] mx-auto p-6 bg-white rounded shadow">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Actualizar Producto</h2>

          <Button color="primary" className="w-[80px]">
          <Link to="/inventario">Back</Link>
          </Button>
          
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-12">
          <div className="">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 p-2 border rounded w-full"
              placeholder={formData.nombre}
              onChange={handleInputChange}
            />
            <label
              htmlFor="cod"
              className="block text-sm font-medium text-gray-700"
            >
              Código
            </label>
            <input
              type="text"
              id="cod"
              name="cod"
              className="mt-1 p-2 border rounded w-full"
              placeholder={formData.cod}
              onChange={handleInputChange}
            />
            <label
              htmlFor="precio"
              className="block text-sm font-medium text-gray-700"
            >
              Precio
            </label>

            <input
              type="text"
              id="precio"
              name="precio"
              className="mt-1 p-2 border rounded w-full"
              placeholder={formData.precio}
              value={formData.precio}
              onChange={(e) => {
                // Permite ingresar solo números y un máximo de dos decimales
                const regex = /^[0-9]*(\.[0-9]{0,2})?$/;
                if (regex.test(e.target.value) || e.target.value === "") {
                  setFormData({ ...formData, precio: e.target.value });
                }
              }}
            />
            <label
              htmlFor="marca"
              className="block text-sm font-medium text-gray-700"
            >
              Marca
            </label>
            <input
              type="text"
              id="marca"
              name="marca"
              className="mt-1 p-2 border rounded w-full"
              placeholder={formData.marca}
              onChange={handleInputChange}
            />
            <label
              htmlFor="id_categoria"
              className="block text-sm font-medium text-gray-700"
            >
              Categoría
            </label>
            <input
              type="number"
              id="id_categoria"
              name="id_categoria"
              className="mt-1 p-2 border rounded w-full"
              placeholder={formData.id_categoria}
              onChange={handleInputChange}
            />
            <label
              htmlFor="cantidad"
              className="block text-sm font-medium text-gray-700"
            >
              Cantidad
            </label>
            <input
              type="number"
              id="cantidad"
              name="cantidad"
              className="mt-1 p-2 border rounded w-full"
              placeholder={formData.cantidad}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="col-span-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[100px] mx-auto"
          >
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarProducto;
