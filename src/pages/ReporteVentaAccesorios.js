import { useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  DataGrid,
  gridClasses,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { API, graphqlOperation } from "aws-amplify";
import { listAccesorioReportes, listTodos } from "../graphql/queries";
import { grey } from "@mui/material/colors";

const ReporteVentaAccesorios = ({ setSelectedLink, link }) => {
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
        graphqlOperation(listAccesorioReportes, {
          // typename: "Order",
          // sortDirection: "ASC", // or ASC
        })
      );

      setTodos(data.listAccesorioReportes.items);
      // console.log(data.listTodos.items);
    })();
  }, [rowId]);

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 100,
      },
      {
        field: "nombre",
        headerName: "Nombre",
        width: 200,
      },
      {
        field: "cantidad",
        headerName: "Vendidos",
        width: 150,
      },
      {
        field: "garantia",
        headerName: "Garantia",
        width: 200,
      },
      {
        field: "precioLocal",
        headerName: "Precio a local",
        width: 200,
      },
      {
        field: "precioPublico",
        headerName: "Precio a publico",
        width: 200,
      },
      {
        field: "fecha",
        headerName: "Fecha`",
        width: 200,
      },
      {
        field: "imagen",
        headerName: "Imagen`",
        width: 200,
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
        Servicios Movilsource
      </Typography>

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
              theme.palette.mode === "light" ? grey[100] : grey[100],
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

export default ReporteVentaAccesorios;
