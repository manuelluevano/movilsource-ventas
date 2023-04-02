import * as React from "react";
import AlertSuccess from "./Alert";
import Form from "react-bootstrap/Form";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../graphql/mutations";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  const [show, setShow] = React.useState(false);

  const [servicio, setServicio] = React.useState("");
  const [nombreCliente, setNombreCliente] = React.useState("");
  const [numeroTelefono, setNumeroTelefono] = React.useState("");
  const [numeroNota, setNumeroNota] = React.useState("");
  const [numeroSerie, setNumeroSerie] = React.useState("");
  const [imei, setImei] = React.useState("");
  const [fecha, setFecha] = React.useState("");
  const [marca, setMarca] = React.useState("");
  const [modelo, setModelo] = React.useState("");
  const [problemaSolicitud, setProblemaSolicitud] = React.useState("");
  const [dejoEquipoCon, setDejoEquipoCon] = React.useState("");
  const [observacionTecnico, setObservacionTecnico] = React.useState("");
  const [status, setStatus] = React.useState(false);
  const [gastoServicio, setGastoServicio] = React.useState();
  const [precioCliente, setPrecioCliente] = React.useState();

  const handleSubmit = async () => {
    console.log("press");
    await API.graphql(
      graphqlOperation(createTodo, {
        input: {
          servicio,
          nombreCliente,
          numeroTelefono,
          numeroNota,
          numeroSerie,
          imei,
          fecha,
          marca,
          modelo,
          problemaSolicitud,
          dejoEquipoCon,
          observacionTecnico,
          status,
          gastoServicio,
          precioCliente,
        },
      })
    );
    setServicio("");
    setNombreCliente("");
    setNumeroTelefono("");
    setNumeroNota("");
    setFecha("");
    setNumeroSerie("");
    setImei("");
    setMarca("");
    setModelo("");
    setProblemaSolicitud("");
    setDejoEquipoCon("");
    setGastoServicio();
    setPrecioCliente();
    setObservacionTecnico("");
    setStatus(false);
    // console.log("datos todo", servicio, nombreCliente);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <Form action="" method="get" className="formulario">
        <h4 className="padding	">Datos del Cliente</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Servicio:</Form.Label>
          <Form.Control
            type="text"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Nombre del Cliente: </Form.Label>
          <Form.Control
            type="text"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Numero de Telefono: </Form.Label>
          <Form.Control
            type="text"
            value={numeroTelefono}
            onChange={(e) => setNumeroTelefono(e.target.value)}
          />
        </Form.Group>
        <h4 className="padding">Datos del Telefono</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Numero de Nota: </Form.Label>
          <Form.Control
            type="text"
            value={numeroNota}
            onChange={(e) => setNumeroNota(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Fecha: </Form.Label>
          {/* <Form.Control
            type="text"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          /> */}
          <Form.Control
            type="date"
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value);
              console.log("Fecha", fecha);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Numero de serie</Form.Label>
          <Form.Control
            type="text"
            value={numeroSerie}
            onChange={(e) => setNumeroSerie(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">imei</Form.Label>
          <Form.Control
            type="text"
            value={imei}
            onChange={(e) => setImei(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Marca</Form.Label>
          <Form.Control
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Modelo</Form.Label>
          <Form.Control
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Problema o Solicitud</Form.Label>
          <Form.Control
            type="textarea"
            value={problemaSolicitud}
            onChange={(e) => setProblemaSolicitud(e.target.value)}
          />
        </Form.Group>
        <Form.Label for="">El Equipo se deja con:</Form.Label>
        <Form.Control
          type="textarea"
          value={dejoEquipoCon}
          onChange={(e) => setDejoEquipoCon(e.target.value)}
        />

        <h4 className="padding	">Pago</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Gasto del Local</Form.Label>
          <Form.Control
            type="text"
            value={gastoServicio}
            onChange={(e) => setGastoServicio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Precio a Cliente</Form.Label>
          <Form.Control
            type="text"
            value={precioCliente}
            onChange={(e) => setPrecioCliente(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">Observaciones del Tecnico</Form.Label>

          <Form.Control
            type="textarea"
            value={observacionTecnico}
            onChange={(e) => setObservacionTecnico(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label for="">
            Estado del equipo: {status ? "=> ENTREGADO ✅" : "=> PENDIENTE 🚫"}
          </Form.Label>
          {/* <Form.Control
            type="textarea"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            disabled
          /> */}
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Estatus del equipo"
            onChange={(e) => {
              status ? setStatus(false) : setStatus(true);
            }}
          />
        </Form.Group>
      </Form>
      {/* <button onClick={() => handleSubmit()}>Guardar Servicio</button> */}
      <Alert show={show} variant="success">
        <div className="formulario padding">
          <p>Servicio Guardado Correctamente</p>
        </div>
      </Alert>

      {!show && (
        <div className="formulario padding">
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
                refreshPage();
              }, 3000);
            }}
          >
            Guardar Servicio
          </Button>
        </div>
      )}
    </>
  );
};

export default Formulario;
