import React from "react";
import styles from "./ejercicio.module.scss";
import LinkHome from "../components/LinkHome";
import { NavLink } from "react-router-dom";

function ejercicio4() {
  return (
    <div className={styles.ContainerLogin}>
      <LinkHome color={'text-white'}/>
      <form>
        <h1 className="text-4xl">LOGIN</h1>
        <label className="w-4/5 min-w-fit block self-center">
          <span className="block text-xl font-semibold text-slate-800">
            Correo Electronico
          </span>
          <input
            required
            autoComplete="off"
            type="email"
            className="mt-1 px-3 py-2 border shadow-sm border-slate-600 focus:outline-none focus:border-sky-600 block w-full h-12 rounded-md sm:text-sm bg-transparent"
          />
        </label>
        <label className="w-4/5 min-w-fit block self-center">
          <span className="block text-xl font-semibold text-slate-800">
            Contraseña
          </span>
          <input
            required
            autoComplete="off"
            type="password"
            className="mt-1 px-3 py-2 border shadow-sm border-slate-600 focus:outline-none focus:border-sky-600 block w-full h-12 rounded-md sm:text-sm bg-transparent"
          />
        </label>
        <button className="bg-sky-600 p-2 text-slate-300 rounded-lg">Iniciar Sesion</button>
        <p className="text-xl flex gap-2">{`No tienes Cuenta`}<NavLink className='text-sky-700' to={'/Register'}>Registrar</NavLink></p>
      </form>
    </div>
  );
}

export default ejercicio4;
