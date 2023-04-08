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

const VentasServicios = ({ setSelectedLink, link }) => {
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
      // {
      //   field: "id",
      //   headerName: "ID",
      //   width: 100,
      // },
      {
        field: "servicio",
        headerName: "servicio",
        width: 100,
        editable: true,
      },
      {
        field: "nombreCliente",
        headerName: "Nombre Cliente",
        width: 150,
        editable: true,
      },
      {
        field: "numeroTelefono",
        headerName: "Telefono",
        width: 100,
        editable: true,
      },
      {
        field: "numeroNota",
        headerName: "Folio",
        width: 60,
        editable: true,
      },
      {
        field: "numeroSerie",
        headerName: "N.SERIE",
        width: 100,
        editable: true,
      },
      {
        field: "imei",
        headerName: "Imei",
        width: 120,
        editable: true,
      },
      {
        field: "fecha",
        headerName: "Fecha",
        width: 100,
        editable: true,
      },
      {
        field: "marca",
        headerName: "Marca",
        width: 100,
        editable: true,
      },
      {
        field: "modelo",
        headerName: "Modelo",
        width: 100,
        editable: true,
      },
      {
        field: "problemaSolicitud",
        headerName: "Problema/Solicitud",
        width: 150,
        editable: true,
      },
      {
        field: "dejoEquipoCon",
        headerName: "Equipo +",
        width: 100,
        editable: true,
      },
      {
        field: "observacionTecnico",
        headerName: "Obeservaciones Tecnico",
        width: 150,
        editable: true,
      },
      {
        field: "status",
        headerName: "Status",
        width: 60,
        type: "boolean",
        editable: true,
      },
      {
        field: "gastoServicio",
        headerName: "Gasto local",
        width: 100,
        editable: true,
      },
      {
        field: "abono",
        headerName: "Abono",
        width: 100,
        editable: true,
      },
      {
        field: "precioCliente",
        headerName: "Precio Cliente",
        width: 100,
        editable: true,
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 110,
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
        Servicios Movilsource
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

export default VentasServicios;
