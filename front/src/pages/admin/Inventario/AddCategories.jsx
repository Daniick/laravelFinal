import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddCategories() {
  const [categoryName, setCategoryName] = useState("");
  const [codeCategoria, setCodeCategoria] = useState("");

  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
  };
  const inputChange = (event) => {
    setCodeCategoria(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      nombre: formData.get("nombre"),
      codigo: formData.get("codigo"),
    };

    console.log("Product data submitted:");

    fetch("http://127.0.0.1:8000/api/categoria", {
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
        // Borrar los datos del input
        setCategoryName("");
        setCodeCategoria("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="w-[100%] h-[60%] mx-auto p-6 bg-white rounded shadow ">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Añadir Categoria</h2>
          <Button color="primary" className="w-[80px]">
            <Link to="/categorias">Back</Link>
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-12">
          <div className="">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre de la Categoria *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 p-2 border rounded w-full"
              value={categoryName}
              onChange={handleInputChange}
            />
            <label
              htmlFor="codigo"
              className="block text-sm font-medium text-gray-700"
            >
              Codigo de la Categoria*
            </label>
            <input
              type="text"
              id="codigo"
              name="codigo"
              className="mt-1 p-2 border rounded w-full"
              value={codeCategoria}
              onChange={inputChange}
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
