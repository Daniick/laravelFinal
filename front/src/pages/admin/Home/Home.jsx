import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { useMyContext } from "../../services/Context";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  const { user } = useMyContext();
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-black">
          Bienvenido {user && user.user.name}!
        </h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="transition-colors hover:cursor-pointer hover:text-white" />
          <RiArrowRightSLine className="transition-colors hover:cursor-pointer hover:text-white" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <CardTicket
          ticket="total"
          totalTickets="Bitacoras"
          text="Ver Bitacoras"
          enlace="/compras"
        />
        <CardTicket
          ticket="pending"
          totalTickets="Usuarios"
          text="Agregar Usuario"
          enlace="/usuarios/add"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="Paginas"
          text="Agregar Pagina"
          enlace="/paginas/add"
        />
        <CardTicket
          ticket="close"
          totalTickets="Roles"
          text="Agregar Rol"
          enlace="/roles/add"
        />
      </div>

      <div className=" my-10 p-8 bg-black rounded-xl text-white flex flex-col text-center px-4">
        <h1 className="text-3xl mb-5 text-red-500">Gracias</h1>
        <div className="text-xl flex flex-col items-center gap-5 mx-4">
          Querido equipo del Funval, Quiero expresar mi más sincero
          agradecimiento por haberme brindado la oportunidad de formar parte de
          esta experiencia transformadora durante los últimos cinco meses. Desde
          el primer día, su dedicación y compromiso hacia nuestro crecimiento
          han sido inspiradores. A Jorge Sosa y a Halorld Carazas, mis estimados
          maestros, les debo un agradecimiento especial. Su liderazgo y
          sabiduría han sido fundamentales en mi aprendizaje. Cada clase, cada
          consejo y cada retroalimentación han sido invaluables. Este bootcamp
          no solo me ha proporcionado habilidades técnicas, sino que también me
          ha enseñado el valor del trabajo en equipo y la perseverancia. Estoy
          profundamente agradecido por haber tenido la oportunidad de aprender y
          crecer en un entorno tan enriquecedor y de contar con el apoyo
          incondicional de cada uno de ustedes. A medida que continúo mi viaje
          profesional, llevaré conmigo las lecciones aprendidas aquí y las
          aplicaré en cada paso que dé. Estoy emocionado por lo que el futuro
          tiene reservado y confío en que la sólida base que he adquirido aquí
          me llevará hacia el éxito. Una vez más, gracias de todo corazón por
          esta experiencia invaluable. Estoy eternamente agradecido y espero
          mantenerme en contacto en el futuro.
          <img
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?cs=srgb&dl=pexels-pixabay-267885.jpg&fm=jpg"
            alt=""
            className="w-[600px] h-[500px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
