/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
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
export const onCreateAccesorio = /* GraphQL */ `
  subscription OnCreateAccesorio(
    $filter: ModelSubscriptionAccesorioFilterInput
  ) {
    onCreateAccesorio(filter: $filter) {
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
export const onUpdateAccesorio = /* GraphQL */ `
  subscription OnUpdateAccesorio(
    $filter: ModelSubscriptionAccesorioFilterInput
  ) {
    onUpdateAccesorio(filter: $filter) {
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
export const onDeleteAccesorio = /* GraphQL */ `
  subscription OnDeleteAccesorio(
    $filter: ModelSubscriptionAccesorioFilterInput
  ) {
    onDeleteAccesorio(filter: $filter) {
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
export const onCreateAccesorioReporte = /* GraphQL */ `
  subscription OnCreateAccesorioReporte(
    $filter: ModelSubscriptionAccesorioReporteFilterInput
  ) {
    onCreateAccesorioReporte(filter: $filter) {
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
export const onUpdateAccesorioReporte = /* GraphQL */ `
  subscription OnUpdateAccesorioReporte(
    $filter: ModelSubscriptionAccesorioReporteFilterInput
  ) {
    onUpdateAccesorioReporte(filter: $filter) {
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
export const onDeleteAccesorioReporte = /* GraphQL */ `
  subscription OnDeleteAccesorioReporte(
    $filter: ModelSubscriptionAccesorioReporteFilterInput
  ) {
    onDeleteAccesorioReporte(filter: $filter) {
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
