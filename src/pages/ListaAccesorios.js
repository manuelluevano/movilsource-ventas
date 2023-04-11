import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { graphqlOperation } from "aws-amplify";
import { listAccesorios } from "../graphql/queries";
import { API } from "aws-amplify";
import Form from "react-bootstrap/Form";
import { Box, Fab, LinearProgress, Typography } from "@mui/material";
import AddAccesorioStock from "../components/AddAccesorioStock";
import { blue, orange, red } from "@mui/material/colors";
import { Add, Delete, Edit, Save } from "@mui/icons-material";
import { deleteAccesorio, updateAccesorio } from "../graphql/mutations";

const ListaAccesorios = () => {
  const [accesorios, setAccesorios] = useState();
  const [id, setID] = useState();
  const [id2, setID2] = useState();
  const [show, setShow] = useState(true);
  const [cantidad, setCantidad] = useState();
  const [reload, setReload] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  //INPUT PARA EDITAR
  const [precioLocal, setPrecioLocal] = useState();
  const [precioPublico, setPrecioPublico] = useState();
  const [nombre, setNombre] = useState();

  async function handleSubmit(itemId, itemCantidad) {
    setReload(false);
    setID(itemId);
    console.log("ID ELEGIDO", itemId);
    setShow(true);
    setCantidad(itemCantidad);
    console.log("cantidad id", itemCantidad);
  }

  async function handleDelete(id) {
    console.log("id a eliminar", id);
    const idItem = await id;
    try {
      //Eliminar
      setReload(true);
      alert("Seguro?");
      const data = await API.graphql(
        graphqlOperation(deleteAccesorio, {
          input: {
            id: idItem,
          },
        })
      );
      setReload(false);
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEdit(id2) {
    setID2(id2);
    setEdit(true);
  }
  async function handleSaveNewItem(id) {
    setLoading(true);
    setReload(true);

    try {
      const data = await API.graphql(
        graphqlOperation(updateAccesorio, {
          input: {
            id,
            precioLocal: precioLocal,
            precioPublico: precioPublico,
            nombre: nombre,
          },
        })
      );
      console.log(data);
      setReload(false);
      setLoading(false);
      setEdit(false);
      setID2();
      setNombre();
      setPrecioPublico();
      setPrecioLocal();
    } catch (error) {}
  }

  useEffect(() => {
    (async () => {
      const { data } = await API.graphql(graphqlOperation(listAccesorios));
      setAccesorios(data.listAccesorios.items);
      console.log(data.listAccesorios.items);
    })();
  }, [reload, edit]);

  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 600);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          height: 700,
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mt: 3, mb: 3 }}
        >
          Lista Accesorios Movilsource 📱
        </Typography>

        <div class="row">
          {accesorios &&
            accesorios.map((item) => (
              <div
                class="col-sm-2 d-flex justify-content-center"
                style={{ marginTop: "30px" }}
              >
                <Card className="centrar">
                  <Card.Img
                    className="img"
                    variant="top"
                    src={`${item.imagen}`}
                  />
                  <Card.Body
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <Form.Group style={{ marginBottom: 10 }}>
                        <Form.Label for="">Inventario:</Form.Label>
                        <Form.Control
                          style={{ fontSize: "1rem", color: "blue" }}
                          disabled
                          type="text"
                          value={item.cantidad}
                        />
                      </Form.Group>

                      <div style={{ marginTop: 10 }}>
                        <Form.Group>
                          <Form.Label for="">Precio Local:</Form.Label>
                          <Form.Control
                            style={{ fontSize: "1rem", color: "blue" }}
                            type="number"
                            disabled={id2 !== item.id}
                            value={
                              id2 === item.id ? precioLocal : item.precioLocal
                            }
                            onChange={(e) => setPrecioLocal(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label for="">Precio Publico:</Form.Label>
                          <Form.Control
                            style={{ fontSize: "1rem", color: "blue" }}
                            type="number"
                            value={
                              id2 === item.id
                                ? precioPublico
                                : item.precioPublico
                            }
                            disabled={id2 !== item.id}
                            onChange={(e) => setPrecioPublico(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label for="">Accesorio:</Form.Label>
                          <Form.Control
                            style={{ fontSize: "1rem" }}
                            type="text"
                            value={id2 === item.id ? nombre : item.nombre}
                            disabled={id2 !== item.id}
                            onChange={(e) => setNombre(e.target.value)}
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div
                      style={{
                        textAlign: "center",
                        alignContent: "center",
                        marginTop: 20,
                      }}
                    >
                      {id2 === item.id && loading ? (
                        <LinearProgress
                          style={{ marginBottom: 10 }}
                          variant="determinate"
                          color="success"
                          value={progress}
                        />
                      ) : (
                        ""
                      )}
                      {id === item.id && show ? (
                        <AddAccesorioStock
                          {...{ id, show, setShow, cantidad, setReload }}
                        />
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Fab
                            onClick={async () => {
                              await handleSubmit(item.id, item.cantidad);
                            }}
                            color="primary"
                            sx={{
                              width: 40,
                              height: 40,
                              bgcolor: blue[500],
                              "&:hover": { bgcolor: blue[700] },
                            }}
                          >
                            <Add />
                          </Fab>

                          {id2 === item.id && edit ? (
                            <Fab
                              onClick={async () => {
                                handleSaveNewItem(item.id);
                              }}
                              color="primary"
                              sx={{
                                width: 40,
                                height: 40,
                                bgcolor: orange[500],
                                "&:hover": { bgcolor: orange[700] },
                              }}
                            >
                              <Save />
                            </Fab>
                          ) : (
                            <Fab
                              onClick={async () => {
                                await handleEdit(item.id, item.cantidad);
                              }}
                              color="primary"
                              sx={{
                                width: 40,
                                height: 40,
                                bgcolor: orange[500],
                                "&:hover": { bgcolor: orange[700] },
                              }}
                            >
                              <Edit />
                            </Fab>
                          )}
                          <Fab
                            onClick={async () => {
                              await handleDelete(item.id);
                            }}
                            color="primary"
                            sx={{
                              width: 40,
                              height: 40,
                              bgcolor: red[400],
                              "&:hover": { bgcolor: red[700] },
                            }}
                          >
                            <Delete />
                          </Fab>
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </Box>
    </>
  );
};

export default ListaAccesorios;
