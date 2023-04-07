import * as React from "react";
// import AlertSuccess from "./Alert";
import Form from "react-bootstrap/Form";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo, updateTodo } from "../graphql/mutations";
import { getTodo } from "../graphql/queries";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { TextField } from "@mui/material";

const Formulario = () => {
  const { id } = useParams();

  // const [datosID, setDatosId] = React.useState([]);

  const [show, setShow] = React.useState(false);

  const [servicio, setServicio] = React.useState("");
  const [nombreCliente, setNombreCliente] = React.useState("");
  const [numeroTelefono, setNumeroTelefono] = React.useState("");
  const [numeroNota, setNumeroNota] = React.useState();
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
  const [abono, setAbono] = React.useState();
  const [precioCliente, setPrecioCliente] = React.useState();

  //REVISAR SI VAMOS A EDITAR
  React.useEffect(() => {
    (async () => {
      try {
        if (id) {
          console.log("Tenemos ID: " + id);
          await obtenerID();
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const obtenerID = async () => {
    const data = await API.graphql(
      graphqlOperation(getTodo, {
        id,
      })
    );
    // console.log("Data", data.data.getTodo);

    //INGRESAMOS LOS DATOS
    setServicio(data.data.getTodo.servicio);
    setNombreCliente(data.data.getTodo.nombreCliente);
    setNumeroTelefono(data.data.getTodo.numeroTelefono);
    setNumeroNota(data.data.getTodo.numeroNota);
    setFecha(data.data.getTodo.fecha);
    setNumeroSerie(data.data.getTodo.numeroSerie);
    setImei(data.data.getTodo.imei);
    setMarca(data.data.getTodo.marca);
    setModelo(data.data.getTodo.modelo);
    setProblemaSolicitud(data.data.getTodo.problemaSolicitud);
    setDejoEquipoCon(data.data.getTodo.dejoEquipoCon);
    setGastoServicio(data.data.getTodo.gastoServicio);
    setAbono(data.data.getTodo.abono);
    setPrecioCliente(data.data.getTodo.precioCliente);
    setObservacionTecnico(data.data.getTodo.observacionTecnico);
    setStatus(data.data.getTodo.status);
  };

  const handleSubmit = async () => {
    if (id) {
      console.log("Editamos");
      const data = await API.graphql(
        graphqlOperation(updateTodo, {
          input: {
            id,
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
            abono,
            precioCliente,
          },
        })
      );
      console.log("Result", data);
    } else {
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
            abono,
            precioCliente,
          },
        })
      );
      setServicio("");
      setNombreCliente("");
      setNumeroTelefono("");
      setNumeroNota();
      setFecha("");
      setNumeroSerie("");
      setImei("");
      setMarca("");
      setModelo("");
      setProblemaSolicitud("");
      setDejoEquipoCon("");
      setGastoServicio();
      setAbono();
      setPrecioCliente();
      setObservacionTecnico("");
      setStatus();
      window.history.go(-4);
    }
    // Redireccionar

    // window.location.href = "/movilsource-ventas/ventas";
    window.history.go(-1);
  };

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
          {/* <TextField id="outlined-basic" label="Servicio" variant="outlined" /> */}
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
          <Form.Label for="">Abono</Form.Label>
          <Form.Control
            type="text"
            value={abono}
            onChange={(e) => setAbono(e.target.value)}
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

      <Alert show={show} variant="success">
        <div className="formulario padding">
          {id ? (
            <p>Servicio Actualizado Correctamente</p>
          ) : (
            <p>Servicio Guardado Correctamente</p>
          )}
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
              }, 2000);
            }}
          >
            {id ? "Actualizar Servicio" : "Guardar Servicio"}
          </Button>
        </div>
      )}
    </>
  );
};

export default Formulario;
