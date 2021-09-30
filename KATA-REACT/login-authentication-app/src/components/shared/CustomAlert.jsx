/* eslint-disable react/prop-types */
import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const CustomAlert = ({ messageError, severity }) => {
  const capitalLetter = severity.charAt(0).toUpperCase();
  console.log("capitalLetter", capitalLetter);

  /* Pendiente concatenar letra mayuscula*/

  return (
    <Alert severity={severity}>
      <AlertTitle> {severity} </AlertTitle>
      {messageError}
    </Alert>
  );
};

export default CustomAlert;
