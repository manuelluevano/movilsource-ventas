import AlertSuccess from "./Alert";
import Form from "react-bootstrap/Form";

const FormularioAccesorios = () => {
  return (
    <>
      <h2 className="titleFormulario formulario">
        <h2>Registro Venta Accesorios Movilsource 📱</h2>
      </h2>
      <Form action="" method="get" className="formulario">
        <h4 className="padding">Producto</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Busca Por Nombre </Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <AlertSuccess />
      </Form>
    </>
  );
};

export default FormularioAccesorios;
