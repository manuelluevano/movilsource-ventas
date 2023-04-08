import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { graphqlOperation } from "aws-amplify";
import { listAccesorios } from "../graphql/queries";
import { API } from "aws-amplify";
import Form from "react-bootstrap/Form";

const ListaAccesorios = () => {
  const [accesorios, setAccesorios] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await API.graphql(graphqlOperation(listAccesorios));
      setAccesorios(data.listAccesorios.items);
      console.log(data.listAccesorios.items);
    })();
  }, []);

  return (
    <>
      <h2 className="titleFormulario formulario">
        <h2>Lista Accesorios Movilsource 📱</h2>
      </h2>
      <div class="row">
        {accesorios &&
          accesorios.map((item) => (
            <div class="col-sm-2" style={{ marginTop: "30px" }}>
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
                      type="number"
                      value={item.cantidad}
                    />
                  </Form.Group>
                  <Card.Title
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    {item.nombre}
                  </Card.Title>

                  <Form.Group>
                    <Form.Control
                      style={{ fontSize: "1rem", color: "red" }}
                      type="number"
                      // value={}
                    />
                  </Form.Group>
                  <Button
                    style={{
                      marginTop: "20px",
                    }}
                    variant="primary"
                  >
                    Agregar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};

export default ListaAccesorios;
