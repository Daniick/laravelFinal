import React, { useState } from "react";
import useFetch from "../services/useFetch";
import { useMyContext } from "../services/Context";
import { Link, Navigate } from "react-router-dom";
// Icons
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
const Login = () => {
  const { user, loginUser } = useMyContext();
  const { handleSubmitPost } = useFetch();
  const [showPassword, setShowPassword] = useState(false);

  console.log(user);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await handleSubmitPost(e);
    // console.log(data);

    loginUser(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 ">
      {user && <Navigate to="/dashboard" />}
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-8">
          Iniciar <span className="text-black">sesión</span>
        </h1>
        <form
          onSubmit={handleLogin}
          action="http://127.0.0.1:8000/api/auth/login"
          className="mb-8"
        >
          {/* <button className="flex items-center justify-center w-full gap-4 px-4 py-3 mb-8 text-gray-100 rounded-full bg-secondary-900">
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              className="w-4 h-4"
            />
            Ingresa con google
          </button> */}
          <div className="relative mb-4">
            <RiMailLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type="email"
              className="w-full py-3 pl-8 pr-4 text-white rounded-lg outline-none bg-secondary-900"
              placeholder="Correo electrónico"
              name="email"
            />
          </div>
          <div className="relative mb-8">
            <RiLockLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-8 py-3 text-white rounded-lg outline-none bg-secondary-900"
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
              Ingresar
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/olvide-password"
            className="transition-colors hover:text-[#4791ff] text-slate-100"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <span className="flex items-center gap-2 transition-colors hover:text-[red] text-slate-100 ">
            ¿No tienes cuenta?{" "}
            <Link
              to="/register"
              className="transition-colors text-[#4791ff] hover:text-gray-100"
            >
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
