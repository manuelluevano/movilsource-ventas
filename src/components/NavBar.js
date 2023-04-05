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
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/movilsource-ventas/accesorios"
          >
            Accesorios
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/movilsource-ventas/ventas"
          >
            Ventas
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
