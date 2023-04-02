import * as React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "../graphql/queries";
import {
  Box,
  // Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";

const Component = styled(Box)`
  width: 90%;
  margin: 50px auto;
  & > h4 {
    margin-bottom: 20px;
  }
  & > div > table > thead {
    background-color: #000;
  }
  & > div > table > thead > tr > th {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  & > div > table > tbody > tr > td {
    font-size: 16px;
  }
`;

const Ventas = () => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await API.graphql(
        graphqlOperation(listTodos, {
          typename: "Order",
          sortDirection: "ASC", // or ASC
        })
      );

      setTodos(data.listTodos.items);
      // console.log(data.listTodos.items);
    })();
  }, []);

  return (
    <>
      <Component>
        <Box>
          {/* <Typography variant="h4">Ventas</Typography> */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Servicio Creado</TableCell>
                <TableCell>Servicio</TableCell>
                <TableCell>Numero Nota</TableCell>
                <TableCell>Nombre Cliente</TableCell>
                <TableCell>Numero Telefono</TableCell>
                <TableCell>Numero de Serie</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Modelo</TableCell>
                <TableCell>Problema o Solicitud</TableCell>
                <TableCell>Imei</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Dejo equipo con:</TableCell>
                <TableCell>Observaciones Tecnico:</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Gasto Servicio</TableCell>
                <TableCell>Precio a Cliente</TableCell>
                <TableCell>Ganancia Final</TableCell>
                {/* <TableCell>Herramientas</TableCell> */}
              </TableRow>
            </TableHead>
            {todos.map((todo) => (
              <TableBody>
                {/* <TableRow> */}
                <TableRow>
                  <TableCell>{todo.id}</TableCell>
                  <TableCell>{todo.createdAt}</TableCell>
                  <TableCell className="capitalize">{todo.servicio}</TableCell>
                  <TableCell className="capitalize">
                    {todo.numeroNota}
                  </TableCell>
                  <TableCell className="capitalize">
                    {todo.nombreCliente}
                  </TableCell>
                  <TableCell>{todo.numeroTelefono}</TableCell>
                  <TableCell>{todo.numeroSerie}</TableCell>
                  <TableCell className="capitalize">{todo.marca}</TableCell>
                  <TableCell className="capitalize">{todo.modelo}</TableCell>
                  <TableCell className="capitalize">
                    {todo.problemaSolicitud}
                  </TableCell>
                  <TableCell>{todo.imei}</TableCell>
                  <TableCell>{todo.fecha}</TableCell>
                  <TableCell className="capitalize">
                    {todo.dejoEquipoCon}
                  </TableCell>
                  <TableCell className="capitalize">
                    {todo.observacionTecnico}
                  </TableCell>
                  <TableCell>
                    <p className="status">
                      {todo.status ? "Entregado ✅" : "Pendiente ⚠️"}
                    </p>
                  </TableCell>
                  <TableCell>${todo.gastoServicio}</TableCell>
                  <TableCell>${todo.precioCliente}</TableCell>
                  <TableCell>
                    ${todo.precioCliente - todo.gastoServicio}
                  </TableCell>

                  {/* <TableCell>
                    <Button
                      variant="contained"
                      color="info"
                      // onClick={() => removeEntry(user.id)}
                      onClick={() => console.log("Press")}
                    >
                      Editar
                    </Button>
                  </TableCell> */}
                </TableRow>
                {/* </TableRow> */}
              </TableBody>
            ))}
          </Table>
        </Box>
      </Component>
    </>
  );
};

export default Ventas;
