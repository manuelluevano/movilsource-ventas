import * as React from "react";
import { Button } from "react-bootstrap";
// import AlertSuccess from "./Alert";
import Form from "react-bootstrap/Form";
// import { API, graphqlOperation } from "aws-amplify";

const FormularioAccesorio = () => {
  const [nombre, setNombre] = React.useState("");
  const [cantidad, setCantidad] = React.useState();
  const [precioLocal, setPrecioLocal] = React.useState();
  const [precioPublico, setPrecioPublico] = React.useState();

  //   const handleSubmit = async () => {

  //     //   await API.graphql(
  //     //     graphqlOperation(createTodo, {
  //     //       input: {
  //     //         nombre,
  //     //         cantidad,
  //     //       },
  //     //     })
  //     //   );
  //     //   setNombre("");
  //     //   setCantidad("");
  //     //   window.history.go(-4);
  //     // window.history.go(-1);
  //   };

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
            // value={servicio}
            // onChange={(e) => setServicio(e.target.value)}
          />
          {/* <TextField id="outlined-basic" label="Servicio" variant="outlined" /> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Cantidad: </Form.Label>
          <Form.Control
            type="number"
            // value={nombreCliente}
            // onChange={(e) => setNombreCliente(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Precio Local: </Form.Label>
          <Form.Control
            type="number"
            // value={nombreCliente}
            // onChange={(e) => setNombreCliente(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Precio Publico: </Form.Label>
          <Form.Control
            type="number"
            // value={nombreCliente}
            // onChange={(e) => setNombreCliente(e.target.value)}
          />
        </Form.Group>
        <Button
          style={{
            fontSize: 30,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {}}
        >
          Guardar Servicio
        </Button>
      </Form>
    </>
  );
};

export default FormularioAccesorio;
