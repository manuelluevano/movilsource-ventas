/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      servicio
      nombreCliente
      numeroTelefono
      numeroNota
      numeroSerie
      imei
      fecha
      marca
      modelo
      problemaSolicitud
      dejoEquipoCon
      observacionTecnico
      status
      gastoServicio
      precioCliente
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        servicio
        nombreCliente
        numeroTelefono
        numeroNota
        numeroSerie
        imei
        fecha
        marca
        modelo
        problemaSolicitud
        dejoEquipoCon
        observacionTecnico
        status
        gastoServicio
        precioCliente
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
