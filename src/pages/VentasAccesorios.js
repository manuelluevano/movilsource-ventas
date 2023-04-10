import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { graphqlOperation } from "aws-amplify";
import { listAccesorios } from "../graphql/queries";
import { API } from "aws-amplify";
import Form from "react-bootstrap/Form";
import { Box, Fab, Typography } from "@mui/material";
import AddAccesorioStock from "../components/AddAccesorioStock";
import { blue, red } from "@mui/material/colors";
import { Add } from "@mui/icons-material";

const VentasAccesorios = () => {
  const [accesorios, setAccesorios] = useState();
  const [id, setID] = useState();
  const [show, setShow] = useState(true);
  const [cantidad, setCantidad] = useState();
  const [reload, setReload] = useState(false);
  const [venta, setVenta] = useState(true);

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
                      <Form.Label for="">Existencia:</Form.Label>
                      <Form.Control
                        style={{ fontSize: "1rem", color: "blue" }}
                        disabled
                        type="number"
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
                      {id === item.id && show && item.cantidad > 0 ? (
                        <AddAccesorioStock
                          {...{ venta, id, show, setShow, cantidad, setReload }}
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
                        <Fab
                          onClick={async () => {
                            await handleSubmit(item.id, item.cantidad);
                          }}
                          color="primary"
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: item.cantidad <= 0 ? red[500] : blue[500],
                            "&:hover": { bgcolor: blue[700] },
                          }}
                        >
                          <Add />
                        </Fab>
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
