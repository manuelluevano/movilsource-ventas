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
      abono
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
        abono
        precioCliente
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccesorio = /* GraphQL */ `
  query GetAccesorio($id: ID!) {
    getAccesorio(id: $id) {
      id
      nombre
      cantidad
      precioLocal
      precioPublico
      imagen
      createdAt
      updatedAt
    }
  }
`;
export const listAccesorios = /* GraphQL */ `
  query ListAccesorios(
    $filter: ModelAccesorioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccesorios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        cantidad
        precioLocal
        precioPublico
        imagen
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccesorioReporte = /* GraphQL */ `
  query GetAccesorioReporte($id: ID!) {
    getAccesorioReporte(id: $id) {
      id
      nombre
      cantidad
      precioLocal
      precioPublico
      imagen
      fecha
      garantia
      createdAt
      updatedAt
    }
  }
`;
export const listAccesorioReportes = /* GraphQL */ `
  query ListAccesorioReportes(
    $filter: ModelAccesorioReporteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccesorioReportes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombre
        cantidad
        precioLocal
        precioPublico
        imagen
        fecha
        garantia
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
