import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        {/* <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/movilsource-ventas"
          >
            Inicio
          </NavLink>
        </li> */}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/movilsource-ventas/formulario"
          >
            Registro Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/movilsource-ventas/formularioAccesorio"
          >
            Registro Accesorios
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/movilsource-ventas/listaAccesorios"
          >
            Inventario Accesorios
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/movilsource-ventas/ventas"
          >
            Ventas Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/movilsource-ventas/ventasAccesorios"
          >
            Ventas Accesorios
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
