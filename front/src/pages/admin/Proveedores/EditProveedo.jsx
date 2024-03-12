import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditProveedo = () => {
  const { id } = useParams();
  const [proveedor, setProveedor] = useState({
    nombre: "",
    email: "",
    compañia: "",
  });
  /* console.log(proveedor) */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/api/proveedore/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(proveedor),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Limpiar los valores de los inputs
        setProveedor({ nombre: "", email: "", compañia: "" });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/proveedore/${id}`)
      .then((res) => res.json())
      .then((data) => setProveedor(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <div className="w-[100%] h-[60%] mx-auto p-6 bg-white rounded shadow">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Actualizar Proveedor</h2>
          <Button color="primary" className="w-[80px]">
            <Link to="/proveedores">Back</Link>
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
              placeholder={proveedor.nombre}
              onChange={handleInputChange}
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 border rounded w-full"
              placeholder={proveedor.email}
              onChange={handleInputChange}
            />
            <label
              htmlFor="compañia"
              className="block text-sm font-medium text-gray-700"
            >
              Compañia
            </label>
            <input
              type="text"
              id="compañia"
              name="compañia"
              className="mt-1 p-2 border rounded w-full"
              placeholder={proveedor.compañia}
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

export default EditProveedo;
