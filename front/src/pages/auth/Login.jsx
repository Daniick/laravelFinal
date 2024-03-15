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
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
      {user && <Navigate to="/dashboard" />}
      <div className="bg-[#378CE7] p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Iniciar sesión
        </h1>
        <form
          onSubmit={handleLogin}
          action="http://127.0.0.1:8000/api/auth/login"
          className="mb-8"
        >
          <div className="relative mb-4">
            <RiMailLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type="email"
              className="w-full py-3 pl-8 pr-4 text-white rounded-lg outline-none bg-slate-950"
              placeholder="Correo electrónico"
              name="email"
            />
          </div>
          <div className="relative mb-8">
            <RiLockLine className="absolute -translate-y-1/2 top-1/2 left-2 text-[#4791ff]" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-8 py-3 text-white rounded-lg outline-none bg-slate-950"
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
              className="w-full px-4 py-3 text-sm font-bold text-black uppercase rounded-lg bg-slate-300 hover:bg-slate-100"
            >
              Ingresar
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          {/* <Link
            to="/olvide-password"
            className="transition-colors hover:text-white text-black"
          >
            ¿Olvidaste tu contraseña?
          </Link> */}
          <span className="flex items-center gap-2 transition-colors  text-black ">
            {" "}
            <Link
              to="/register"
              className="transition-colors text-black hover:text-white"
            >
              ¿No tienes cuenta? Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
