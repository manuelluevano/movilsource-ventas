import { useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  DataGrid,
  gridClasses,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "../graphql/queries";
import { grey } from "@mui/material/colors";
import Actions from "../components/Actions";

const VentasAccesorios = ({ setSelectedLink, link }) => {
  const [todos, setTodos] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);

  function QuickSearchToolbar() {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput) =>
            searchInput
              .split(",")
              .map((value) => value.trim())
              .filter((value) => value !== "")
          }
        />
      </Box>
    );
  }

  // console.log(todos);
  console.log(rowId);

  useEffect(() => {
    (async () => {
      const { data } = await API.graphql(
        graphqlOperation(listTodos, {
          // typename: "Order",
          // sortDirection: "ASC", // or ASC
        })
      );

      setTodos(data.listTodos.items);
      // console.log(data.listTodos.items);
    })();
  }, [rowId]);

  const columns = useMemo(
    () => [
      {
        field: "servicio",
        headerName: "Accesario",
        width: 150,
        editable: true,
      },
      {
        field: "a",
        headerName: "Fecha",
        width: 150,
        editable: true,
      },
      {
        field: "b",
        headerName: "Precio Local",
        width: 150,
        editable: true,
      },
      {
        field: "modelo",
        headerName: "Precio Cliente",
        width: 150,
        editable: true,
      },
      {
        field: "problemaSolicitud",
        headerName: "Garantia",
        width: 150,
        editable: true,
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        renderCell: (params) => <Actions {...{ params, rowId, setRowId }} />,
      },
    ],
    [rowId]
  );
  return (
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
        Ventas Accesorios
      </Typography>
      {/* <div
        style={{
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
          justifyItems: "center",
          margin: 30,
        }}
      >
        <TextField
          sx={{
            width: "50%",
          }}
          id="outlined-basic"
          label=" Buscar"
          variant="outlined"
        />
      </div> */}
      <DataGrid
        onCellClick={(params) => setRowId(params.id)}
        columns={columns}
        rows={todos}
        getRowId={(row) => row.id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        // sx={{
        //   [`& .${gridClasses.row}`]: {
        //     bgcolor: (theme) =>
        //       theme.palette.mode === "light" ? grey[200] : grey[200],
        //   },
        // }}
        sx={{
          [`& .${gridClasses.row}`]: {
            fontSize: 14,
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? grey[200] : grey[200],
          },
          "& .hot": {
            backgroundColor: "rgba(228, 33, 33, 0.98)",
            color: "white",
          },
        }}
        slots={{ toolbar: QuickSearchToolbar }}
        getCellClassName={(params) => {
          // console.log(params.row.status);
          if (params.row.status === false) {
            return params.value === false ? "hot" : "";
          }
        }}
      />
    </Box>
  );
};

export default VentasAccesorios;
