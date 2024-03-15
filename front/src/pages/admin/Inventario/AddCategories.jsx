import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddCategories() {
  const [url, setUrl] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      url,
      nombre,
      descripcion,
    };

    console.log("Page data submitted:", data);

    fetch("http://127.0.0.1:8000/api/paginas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUrl("");
        setNombre("");
        setDescripcion("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="w-[100%] h-[60%] mx-auto p-6 bg-white rounded shadow ">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Añadir Página</h2>
          <Button color="primary" className="w-[80px]">
            <Link to="/paginas">Back</Link>
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-12">
          <div className="">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              URL *
            </label>
            <input
              type="text"
              id="url"
              name="url"
              className="mt-1 p-2 border rounded w-full"
              value={url}
              onChange={handleUrlChange}
            />
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre de la Página
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 p-2 border rounded w-full"
              value={nombre}
              onChange={handleNombreChange}
            />
            <label
              htmlFor="descripcion"
              className="block text-sm font-medium text-gray-700"
            >
              Descripción *
            </label>
            <input
              type="text"
              id="descripcion"
              name="descripcion"
              className="mt-1 p-2 border rounded w-full"
              value={descripcion}
              onChange={handleDescripcionChange}
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

export default AddCategories;
