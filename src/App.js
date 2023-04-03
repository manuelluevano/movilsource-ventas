import // BrowserRouter,
// Routes,
// Route,
// createBrowserRouter,
// RouterProvider,
"react-router-dom";
import "./App.css";
// import NavBar from "./components/NavBar";
// import Servicios from "./pages/Servicios";
// import Accesorios from "./pages/Accesorios";

// import Inicio from "./pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import Formulario from "./components/Formulario";
import Ventas from "./pages/Ventas";

Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <div>
        <h1 className="titulo">MOVILSOURCE</h1>

        <Formulario />
        <Ventas />
        {/* <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/servicios" element={<Servicios />}></Route>
            <Route path="/accesorios" element={<Accesorios />}></Route>
            <Route path="/ventas" element={<Ventas />}></Route>
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
