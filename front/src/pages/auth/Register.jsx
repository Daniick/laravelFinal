import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../services/useFetch";
// Icons
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";
const Register = () => {
  const { handleSubmitPost } = useFetch();

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-600">
      <div className="bg-black p-8 rounded-xl shadow-2xl w-auto lg:w-[550px] h-[700px] ">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Crear <span className="text-[#4791ff]">cuenta</span>
        </h1>
        <form
          onSubmit={handleSubmitPost}
          action="http://127.0.0.1:8000/api/auth/register"
          className="mb-10"
        >
          <div className="relative mb-10">
            <RiUserLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type="text"
              className="w-full py-3 pl-8 pr-4 text-white rounded-lg outline-none bg-purple-800"
              placeholder="Nombre"
              name="name"
            />
          </div>
          <div className="relative mb-10">
            <RiUserLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type="text"
              className="w-full py-3 pl-8 pr-4 text-white rounded-lg outline-none bg-purple-800"
              placeholder="Apellidos"
              name="apellido"
            />
          </div>
          <div className="relative mb-10">
            <RiMailLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type="email"
              className="w-full py-3 pl-8 pr-4 text-white rounded-lg outline-none bg-purple-800"
              placeholder="Correo electrónico"
              name="email"
            />
          </div>
          <div className="relative mb-10">
            <RiLockLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-8 py-3 text-white rounded-lg outline-none bg-purple-800"
              placeholder="Contraseña"
              name="password"
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute -translate-y-1/2 top-1/2 right-2 hover:cursor-pointer text-[#4791ff]"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute -translate-y-1/2 top-1/2 right-2 hover:cursor-pointer text-[#4791ff]"
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-sm font-bold text-black uppercase rounded-lg bg-[#4791ff]"
            >
              Registrarme
            </button>
          </div>
        </form>
        <span className="flex items-center justify-center gap-2 text-white">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="transition-colors text-[#4791ff] hover:text-gray-100"
          >
            Ingresa
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
