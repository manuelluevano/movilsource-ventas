import * as React from "react";
import { useParams } from "react-router-dom";
import Formulario from "./Formulario";

const EditService = () => {
  const { id } = useParams();
  // console.log("ID: " + id);

  return (
    <div>
      <Formulario id={id} />
    </div>
  );
};

export default EditService;
