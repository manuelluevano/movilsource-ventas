import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Servicios from "./pages/Servicios";
import Accesorios from "./pages/Accesorios";
import Ventas from "./pages/Ventas";
import Inicio from "./pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <div>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/servicios" element={<Servicios />}></Route>
            <Route path="/accesorios" element={<Accesorios />}></Route>
            <Route path="/ventas" element={<Ventas />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
