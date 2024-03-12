import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-black">Bienvenido Administrador!</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="transition-colors hover:cursor-pointer hover:text-white" />
          <RiArrowRightSLine className="transition-colors hover:cursor-pointer hover:text-white" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {/* Card */}
        <CardTicket
          ticket="total"
          totalTickets="Compras"
          text="Agregar Compra"
          enlace="/compras/add"
        />
        <CardTicket
          ticket="pending"
          totalTickets="Inventario"
          text="Agregar Producto"
          enlace="/inventario/add"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="Categorias"
          text="Agregar Categoria"
          enlace="/categorias/add"
        />
        <CardTicket
          ticket="close"
          totalTickets="Proveedores"
          text="Agregar Proveedor"
          enlace="/proveedores/add"
        />
      </div>
      <div>
        <h1 className="my-10 text-2xl text-black">Información</h1>
      </div>
      <div className="p-8 bg-[#1E1F25] rounded-xl text-white flex flex-col text-center px-4">
        <h1 className="text-3xl mb-5">
          Hoy 8 De Marzo Celebra{" "}
          <span className="text-red-500 ">El Dia De La Mujer</span>
        </h1>
        <div className="text-xl flex flex-col items-center gap-5">
          "En este Día Internacional de la Mujer, quiero enviar un sincero
          reconocimiento a todas las mujeres que forman parte de nuestro equipo.
          Vuestra dedicación, talento y compromiso son fundamentales para el
          éxito de nuestra empresa. Hoy celebramos su fuerza, su valentía y su
          contribución invaluable. Sigamos trabajando juntos para construir un
          entorno laboral donde todas las voces sean escuchadas y todas las
          oportunidades sean accesibles para cada una de ustedes. ¡Gracias por
          todo lo que hacen cada día! Feliz Día de la Mujer. 🌟💼
          #DíaInternacionalDeLaMujer #MujeresEnElTrabajo"
          <img
            src="https://prensaregional.pe/wp-content/uploads/2019/02/8-de-marzo-se-celebra-el-D%C3%ADa-Internacional-de-la-Mujer.jpg"
            alt=""
            className="w-[600px] h-[500px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
