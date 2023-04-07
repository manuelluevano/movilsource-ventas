import React from "react";
import EditService from "./EditService";
import DeleteService from "./DeleteService";

const Actions = ({ params, rowId, setRowId }) => {
  //   console.log("Datos", params);
  //   console.log("Datos", rowId);
  //   console.log("Datos", setRowId);

  return (
    <>
      <EditService {...{ params, rowId, setRowId }} />
      <DeleteService {...{ params, rowId, setRowId }} />
    </>
  );
};

export default Actions;
