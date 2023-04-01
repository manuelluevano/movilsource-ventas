import * as React from "react";
import Formulario from "../components/Formulario";
import Ventas from "./Ventas";

function Inicio() {
  return (
    <div>
      <h1 className=" titulo">MOVILSOURCE</h1>
      <Formulario />
      <Ventas />
    </div>
  );
}

export default Inicio;
