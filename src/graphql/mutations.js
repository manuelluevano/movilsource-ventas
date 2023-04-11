/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createAccesorio = /* GraphQL */ `
  mutation CreateAccesorio(
    $input: CreateAccesorioInput!
    $condition: ModelAccesorioConditionInput
  ) {
    createAccesorio(input: $input, condition: $condition) {
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
export const updateAccesorio = /* GraphQL */ `
  mutation UpdateAccesorio(
    $input: UpdateAccesorioInput!
    $condition: ModelAccesorioConditionInput
  ) {
    updateAccesorio(input: $input, condition: $condition) {
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
export const deleteAccesorio = /* GraphQL */ `
  mutation DeleteAccesorio(
    $input: DeleteAccesorioInput!
    $condition: ModelAccesorioConditionInput
  ) {
    deleteAccesorio(input: $input, condition: $condition) {
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
export const createAccesorioReporte = /* GraphQL */ `
  mutation CreateAccesorioReporte(
    $input: CreateAccesorioReporteInput!
    $condition: ModelAccesorioReporteConditionInput
  ) {
    createAccesorioReporte(input: $input, condition: $condition) {
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
export const updateAccesorioReporte = /* GraphQL */ `
  mutation UpdateAccesorioReporte(
    $input: UpdateAccesorioReporteInput!
    $condition: ModelAccesorioReporteConditionInput
  ) {
    updateAccesorioReporte(input: $input, condition: $condition) {
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
export const deleteAccesorioReporte = /* GraphQL */ `
  mutation DeleteAccesorioReporte(
    $input: DeleteAccesorioReporteInput!
    $condition: ModelAccesorioReporteConditionInput
  ) {
    deleteAccesorioReporte(input: $input, condition: $condition) {
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
