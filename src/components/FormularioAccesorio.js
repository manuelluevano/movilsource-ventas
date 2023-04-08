import * as React from "react";
import { Alert, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { API, graphqlOperation } from "aws-amplify";
import { createAccesorio } from "../graphql/mutations";
import ImageUpload from "./ImageUpload";

const FormularioAccesorio = () => {
  const [show, setShow] = React.useState(false);

  const [nombre, setNombre] = React.useState("");
  const [cantidad, setCantidad] = React.useState();
  const [precioLocal, setPrecioLocal] = React.useState();
  const [precioPublico, setPrecioPublico] = React.useState();
  const [imagen, setImagen] = React.useState("");

  console.log("imagen", imagen);

  const handleSubmit = async () => {
    const data = await API.graphql(
      graphqlOperation(createAccesorio, {
        input: {
          nombre,
          cantidad,
          precioLocal,
          precioPublico,
          imagen,
        },
      })
    );
    setNombre("");
    setCantidad("");
    setPrecioLocal("");
    setPrecioPublico("");
    setImagen("");

    // window.history.go(-1);

    console.log("Response", data);
  };

  return (
    <>
      <h2 className="titleFormulario formulario">
        <h2>Registro Accesorios Movilsource 📱</h2>
      </h2>
      <Form action="" method="get" className="formulario">
        <h4 className="padding">Datos del Accesorio</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Nombre:</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Cantidad: </Form.Label>
          <Form.Control
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Precio Local: </Form.Label>
          <Form.Control
            type="number"
            value={precioLocal}
            onChange={(e) => setPrecioLocal(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Precio Publico: </Form.Label>
          <Form.Control
            type="number"
            value={precioPublico}
            onChange={(e) => setPrecioPublico(e.target.value)}
          />
        </Form.Group>
        <ImageUpload {...{ setImagen }} />
        <Button
          style={{
            fontSize: 30,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            handleSubmit();
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 2000);
          }}
        >
          Guardar Servicio
        </Button>
      </Form>
      <Alert show={show} variant="success">
        <div className="formulario padding">
          <p>Accesorio Guardado Correctamente</p>
        </div>
      </Alert>
    </>
  );
};

export default FormularioAccesorio;
