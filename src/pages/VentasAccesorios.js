import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { graphqlOperation } from "aws-amplify";
import { listAccesorios } from "../graphql/queries";
import { API } from "aws-amplify";
import Form from "react-bootstrap/Form";
import { Box, Fab, LinearProgress, Typography } from "@mui/material";

import { blue, blueGrey, red } from "@mui/material/colors";
import { Add, Remove, Save } from "@mui/icons-material";
import { updateAccesorio } from "../graphql/mutations";

const VentasAccesorios = () => {
  const [accesorios, setAccesorios] = useState();
  const [id, setID] = useState();
  const [reload, setReload] = useState(false);
  const [valor, setValor] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleDelete(itemId, cantidad) {
    // setReload(false);
    setID(itemId);
    console.log("Bajr valor");

    let v = valor;
    if (v > 0) {
      v--;
    }

    setValor(v);
  }
  async function handleAdd(itemId, item) {
    console.log("ID SELECCIONADO", itemId);
    console.log("ID ITEM", item.id);
    console.log("CANTIDAD DEL ITEM", item.cantidad);
    console.log("CANTIDAD PARA AGREGAR", valor);
    setID(itemId);

    if (valor === item.cantidad || valor > item.cantidad) {
      console.log("es mayor");
      setValor(0);
      return;
    }

    let nuevoValor = valor;
    nuevoValor++;
    setValor(nuevoValor);
  }
  async function handleSubmit(itemId, item) {
    setLoading(true);
    // Vender
    const numeroFinal = item.cantidad - valor;

    console.log(numeroFinal);

    const data = await API.graphql(
      graphqlOperation(updateAccesorio, {
        input: {
          id: itemId,
          cantidad: numeroFinal,
        },
      })
    );
    setReload(true);
    setValor(0);
    setLoading(false);
    console.log("data", data);
  }

  useEffect(() => {
    console.log("Valor", valor);
    (async () => {
      const { data } = await API.graphql(graphqlOperation(listAccesorios));
      setAccesorios(data.listAccesorios.items);
      console.log(data.listAccesorios.items);
    })();
    setReload(false);
  }, [reload]);

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
          Vender Accesorios
        </Typography>
        {/* <div class="justify-content-center" style={{ Width: 1200 }}> */}
        <div
          class="row"
          // style={{ maxWidth: 1200, padding: 50 }}
        >
          {accesorios &&
            accesorios.map((item) => (
              <div
                class="col-sm-2 d-flex justify-content-center"
                style={{ marginTop: "30px" }}
              >
                <Card>
                  <Card.Img
                    className={item.cantidad === 0 ? "disabled img" : "img"}
                    variant="top"
                    src={`${item.imagen}`}
                  />

                  <Card.Body
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Form.Group style={{ marginBottom: 10 }}>
                      <Form.Label for="">Existencia:</Form.Label>
                      <Form.Control
                        style={{ fontSize: "1rem", color: "blue" }}
                        disabled
                        type="number"
                        value={item.cantidad}
                      />
                    </Form.Group>
                    <Form.Group style={{ marginBottom: 10 }}>
                      <Form.Label for="">Precio:</Form.Label>
                      <Form.Control
                        style={{
                          fontSize: "1rem",
                          color: "blue",
                        }}
                        disabled
                        type="text"
                        value={"$" + item.precioPublico}
                      />
                    </Form.Group>
                    <Card.Title
                      style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      {item.nombre}
                    </Card.Title>
                    <div
                      style={{ textAlign: "center", alignContent: "center" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Fab
                          onClick={async () => {
                            await handleDelete(item.id, item);
                          }}
                          color="primary"
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: item.cantidad <= 0 ? red[500] : blue[300],
                            "&:hover": { bgcolor: blue[600] },
                          }}
                          disabled={item.cantidad === 0}
                        >
                          <Remove />
                        </Fab>

                        <div>
                          {(item.id === id && valor) ||
                            (item.cantidad === 0 && (
                              <p style={{ color: "red" }}>AGOTADO</p>
                            ))}
                        </div>
                        <Fab
                          onClick={async () => {
                            await handleAdd(item.id, item);
                          }}
                          color="primary"
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: item.cantidad <= 0 ? red[500] : blue[300],
                            "&:hover": { bgcolor: blue[600] },
                          }}
                          disabled={item.cantidad === 0}
                        >
                          <Add />
                        </Fab>
                      </div>
                      {item.id === id && (
                        <div>
                          <Fab
                            onClick={async () => {
                              await handleSubmit(item.id, item);
                            }}
                            color="primary"
                            sx={{
                              width: 40,
                              height: 40,
                              bgcolor:
                                item.cantidad <= 0
                                  ? blueGrey[500]
                                  : blueGrey[300],
                              "&:hover": { bgcolor: blueGrey[600] },
                            }}
                            disabled={item.cantidad === 0}
                          >
                            <Save />
                          </Fab>
                          {loading && (
                            <LinearProgress
                              style={{ marginTop: 10 }}
                              variant="determinate"
                              color="success"
                              value={progress}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
        {/* </div> */}
      </Box>
    </>
  );
};

export default VentasAccesorios;
