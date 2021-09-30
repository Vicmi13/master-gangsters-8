/* eslint-disable react/prop-types */
import React from "react";
import { Alert, AlertTitle } from "@mui/material";

/**
 * props que ENTRAN
 * messageError
 * severity
 *
 * props que SALE
 * onClose
 */

const CustomAlert = ({ messageError, severity, onCloseAlert }) => {
  const capitalLetter = severity.charAt(0).toUpperCase();
  console.log("capitalLetter", capitalLetter);

  /* Pendiente concatenar letra mayuscula*/

  return (
    <Alert
      severity={severity}
      onClose={() => {
        onCloseAlert();
      }}
    >
      <AlertTitle> {severity} </AlertTitle>
      {messageError}
    </Alert>
  );
};

export default CustomAlert;
