import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import React, { useState } from "react";
const AlertSuccess = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert show={show} variant="success">
        <p>Servicio Guardado Correctamente</p>
        {/* <Alert.Heading>Servicio Guardado !</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Cerrar
          </Button>
        </div> */}
      </Alert>

      {!show && (
        <Button
          onClick={() => {
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 3000);
          }}
        >
          Guardar Servicio
        </Button>
      )}
    </>
  );
};

export default AlertSuccess;
