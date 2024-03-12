import React from "react";
const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "IMAGEN", uid: "imagen" },
  { name: "NOMBRE", uid: "nombre", sortable: true },
  { name: "CODIGO", uid: "codigo", sortable: true },
  { name: "MARCA", uid: "marca", sortable: true },
  { name: "CATEGORIA", uid: "categoria" },
  {name: "STATUS", uid: "status", sortable: true},
  { name: "COSTO", uid: "costo" },
  { name: "PRECIO", uid: "precio", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "COMPAÑIA", uid: "compañia" },
  { name: "FECHA", uid: "fecha" },
  { name: "N° FACTURA", uid: "N° factura" },
  { name: "PROVEEDOR", uid: "proveedor" },
  { name: "ESTADO DE COMPRA", uid: "estado de compra" },
  { name: "TOTAL", uid: "total" },
  { name: "PAGADO", uid: "pagado" },
  { name: "DEBIDO", uid: "debido" },
  { name: "ESTADO DE PAGO", uid: "estado de pago" },
  { name: "ACTIONS", uid: "actions" },

 
];

const statusOptions = [
  { name: "Ordenado", uid: "ordenado" },
  { name: "Recibido", uid: "recibido" },
  // { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    precio: "500000 COP",
    codigo: "ABC123",
    marca: "active",
    categoria: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    costo: "530000 COP",
  },
  {
    id: 2,
    name: "Zoey Lang",
    precio: "750000 COP",
    codigo: "XYZ456",
    marca: "paused",
    categoria: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    costo: "720000 COP",
  },
  {
    id: 3,
    name: "Jane Fisher",
    precio: "350000 COP",
    codigo: "DEF789",
    marca: "active",
    categoria: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    costo: "380000 COP",
  }
 
];

export { columns, users, statusOptions };
