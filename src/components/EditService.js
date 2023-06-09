import { Box, CircularProgress, Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Check, Save } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { API, graphqlOperation } from "aws-amplify";
import { updateTodo } from "../graphql/mutations";

const EditService = ({ params, rowId, setRowId }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const editService = async () => {
    const data = await API.graphql(
      graphqlOperation(updateTodo, {
        input: {
          id: params.row.id,
          servicio: params.row.servicio,
          nombreCliente: params.row.nombreCliente,
          numeroTelefono: params.row.numeroTelefono,
          numeroNota: params.row.numeroNota,
          numeroSerie: params.row.numeroSerie,
          imei: params.row.imei,
          fecha: params.row.fecha,
          marca: params.row.marca,
          modelo: params.row.modelo,
          problemaSolicitud: params.row.problemaSolicitud,
          dejoEquipoCon: params.row.dejoEquipoCon,
          observacionTecnico: params.row.observacionTecnico,
          status: params.row.status,
          gastoServicio: params.row.gastoServicio,
          abono: params.row.abono,
          precioCliente: params.row.precioCliente,
        },
      })
    );
    if (data) {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setRowId(null);
      }, 1500);
    }
    console.log("Result", data);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await editService();
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId]);

  return (
    <Box
      sx={{
        m: 0.5,
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
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSubmit}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default EditService;
