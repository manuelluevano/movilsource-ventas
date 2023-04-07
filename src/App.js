import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import NavBar from "../src/components/NavBar";
import NoFound from "./pages/NoFound";
import VentasServicios from "./pages/Ventas";
import Servicios from "./pages/Servicios";
import Accesorios from "./pages/Accesorios";
import EditService from "./components/EditService";
import VentasAccesorios from "./pages/VentasAccesorios";

Amplify.configure(awsconfig);

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/movilsource-ventas" element={<p>Inicio</p>} />
        <Route path="/movilsource-ventas/formulario" element={<Servicios />} />
        <Route
          path="/movilsource-ventas/formularioAccesorio"
          element={<Accesorios />}
        />
        <Route
          path="/movilsource-ventas/ventas"
          element={<VentasServicios />}
        />
        <Route
          path="/movilsource-ventas/ventasAccesorios"
          element={<VentasAccesorios />}
        />
        <Route
          path="/movilsource-ventas/editService/:id"
          element={<EditService />}
        />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
