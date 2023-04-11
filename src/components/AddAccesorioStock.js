import { Box, CircularProgress, Fab, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { Check, Save, Error } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { API, graphqlOperation } from "aws-amplify";
import { updateAccesorio } from "../graphql/mutations";
import { Form } from "react-bootstrap";

const AddAccesorioStock = ({
  venta,
  id,
  show,
  setShow,
  cantidad,
  setReload,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [add, setAdd] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    // console.log("add", add);
    if (add === undefined || add < 1) {
      setError(true);
      console.log("error");
      alert("Agrega una cifra valida");

      return;
    }

    if (venta) {
      const nuevoNumero = -add;
      if (add > cantidad) {
        setError(true);
        console.log(cantidad);
        console.log(add);
        console.log("error");
        alert("Agrega una cifra mayor a los disponiles");
        return;
      }
      setError(false);

      console.log("DISPONIBLE", cantidad);
      console.log("Restarle:", nuevoNumero, " de", cantidad);

      const numeroFinal = nuevoNumero + cantidad;

      const data = await API.graphql(
        graphqlOperation(updateAccesorio, {
          input: {
            id,
            cantidad: numeroFinal,
          },
        })
      );

      if (data) {
        setTimeout(() => {
          setReload(true);
          setSuccess(true);
          setLoading(false);
          setTimeout(() => {
            setShow(false);
          }, 1000);
        }, 1500);
      }
      console.log("Result", data);
    } else {
      const nuevoNumero = Number(add) + cantidad;

      console.log("DISPONIBLE", cantidad);
      console.log("Restarle:", nuevoNumero, " de", cantidad);

      const data = await API.graphql(
        graphqlOperation(updateAccesorio, {
          input: {
            id,
            cantidad: nuevoNumero,
          },
        })
      );

      if (data) {
        setTimeout(() => {
          setReload(true);
          setSuccess(true);
          setLoading(false);
          setTimeout(() => {
            setShow(false);
          }, 1000);
        }, 1500);
      }
      console.log("Result", data);
    }

    setLoading(true);
    // const nuevoNumero = Number(add) + cantidad;
  };

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
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
    <Box
      sx={{
        // m: 0.5,
        position: "relative",
      }}
    >
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            "&:hover": { bgcolor: green[700] },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color={error ? "error" : "primary"}
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={loading}
          onClick={handleSubmit}
        >
          {error ? <Error /> : <Save />}
        </Fab>
      )}
      {loading && (
        <LinearProgress
          style={{ marginTop: 10 }}
          variant="determinate"
          color="success"
          value={progress}
        />
      )}
      {id && (
        <Form.Group style={{ marginTop: 20 }}>
          {/* <Form.Label for="">{loading && "Agregando..."}</Form.Label> */}
          <Form.Control
            type="number"
            disabled={loading}
            // value={1}
            onChange={(e) => setAdd(e.target.value)}
          />
        </Form.Group>
      )}
    </Box>
  );
};

export default AddAccesorioStock;
