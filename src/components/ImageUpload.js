import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";

const ImageUpload = ({ setImagen }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dba0qjfeo",
        uploadPreset: "movilsource",
      },
      function (error, result) {
        console.log(result);
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info.url);
          setImagen(result.info.url);
        }
      }
    );
    console.log(cloudinaryRef.current);
  }, []);
  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Button
        onClick={(e) => {
          widgetRef.current.open();
          //   setImagen(e.target.value);
        }}
      >
        Subir Imagen
      </Button>
    </Form.Group>
  );
};

export default ImageUpload;
