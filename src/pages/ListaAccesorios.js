import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { graphqlOperation } from "aws-amplify";
import { listAccesorios } from "../graphql/queries";
import { API } from "aws-amplify";
import Form from "react-bootstrap/Form";
import { Box, Fab, Typography } from "@mui/material";
import AddAccesorioStock from "../components/AddAccesorioStock";
import { blue, orange, red, yellow } from "@mui/material/colors";
import { Add, Delete, Edit } from "@mui/icons-material";
import { deleteAccesorio } from "../graphql/mutations";

const ListaAccesorios = () => {
  const [accesorios, setAccesorios] = useState();
  const [id, setID] = useState();
  const [show, setShow] = useState(true);
  const [cantidad, setCantidad] = useState();
  const [reload, setReload] = useState(false);

  async function handleSubmit(itemId, itemCantidad) {
    setReload(false);
    setID(itemId);
    console.log("ID ELEGIDO", itemId);
    setShow(true);
    setCantidad(itemCantidad);
    console.log("cantidad id", itemCantidad);

    // Agregamos mas stock
    // try {
    //   const data = await API.graphql(
    //     graphqlOperation(updateAccesorio, {
    //       id,
    //       cantidad,
    //     })
    //   );
    //   console.log("data", data);
    // } catch (error) {
    //   console.log("error", error);
    // }
    // console.log("Estado de ventana", show);
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

  useEffect(() => {
    (async () => {
      const { data } = await API.graphql(graphqlOperation(listAccesorios));
      setAccesorios(data.listAccesorios.items);
      console.log(data.listAccesorios.items);
    })();
  }, [reload]);

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
                    <Form.Group>
                      <Form.Label for="">INVENTARIO:</Form.Label>
                      <Form.Control
                        style={{ fontSize: "1rem", color: "blue" }}
                        disabled
                        type="text"
                        value={item.cantidad}
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
                      {id === item.id && show ? (
                        <AddAccesorioStock
                          {...{ id, show, setShow, cantidad, setReload }}
                        />
                      ) : (
                        // <Button
                        //   // style={{ marginTop: 20 }}
                        //   onClick={async () => {
                        //     await handleSubmit(item.id);
                        //   }}
                        // >
                        //   +
                        // </Button>
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
                          <Fab
                            onClick={async () => {
                              // await handleDelete(item.id);
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
        {/* </div> */}
      </Box>
    </>
  );
};

export default ListaAccesorios;
