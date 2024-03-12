import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Crear <span className="text-[#4791ff]">cuenta</span>
        </h1>
        <form className="mb-8">
          <button className="flex items-center justify-center w-full gap-4 px-4 py-3 mb-8 text-gray-100 rounded-full bg-secondary-900">
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              className="w-4 h-4"
            />
            Registrate con google
          </button>
          <div className="relative mb-4">
            <RiUserLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type="text"
              className="w-full py-3 pl-8 pr-4 text-white rounded-lg outline-none bg-secondary-900"
              placeholder="Nombre(s)"
            />
          </div>
          <div className="relative mb-4">
            <RiUserLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type="text"
              className="w-full py-3 pl-8 pr-4 text-white rounded-lg outline-none bg-secondary-900"
              placeholder="Apellidos"
            />
          </div>
          <div className="relative mb-4">
            <RiMailLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type="email"
              className="w-full py-3 pl-8 pr-4 text-white rounded-lg outline-none bg-secondary-900"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="relative mb-4">
            <RiLockLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-8 py-3 text-white rounded-lg outline-none bg-secondary-900"
              placeholder="Contraseña"
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
          <div className="relative mb-8">
            <RiLockLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-8 py-3 text-white rounded-lg outline-none bg-secondary-900"
              placeholder="Confirmar contraseña"
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