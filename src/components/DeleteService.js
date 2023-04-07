import { Box, CircularProgress, Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Check, Delete, Save } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";
import { API, graphqlOperation } from "aws-amplify";
import { deleteTodo } from "../graphql/mutations";

const DeleteService = ({ params, rowId, setRowId }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const editService = async () => {
    const data = await API.graphql(
      graphqlOperation(deleteTodo, {
        input: {
          id: rowId,
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
        m: 1,
        position: "relative",
      }}
    >
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: red[500],
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
          <Delete />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: red[500],
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

export default DeleteService;
