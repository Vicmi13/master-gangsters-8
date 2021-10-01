import React from "react";
import PropTypes from "prop-types";
import { Alert, AlertTitle } from "@mui/material";

/**
 * props que ENTRAN
 * message
 * severity
 *
 * props que SALE
 * onClose
 */

const CustomAlert = ({ message, severity, onCloseAlert }) => {
  const capitalLetter = severity.charAt(0).toUpperCase();

  return (
    <Alert
      severity={severity}
      onClose={() => {
        onCloseAlert();
      }}
    >
      <AlertTitle> {capitalLetter + severity.slice(1)} </AlertTitle>
      {message}
    </Alert>
  );
};

CustomAlert.defaultProps = {
  message: "Ocurrió un error !!",
};

CustomAlert.propTypes = {
  message: PropTypes.string,
  severity: PropTypes.string.isRequired,
  onCloseAlert: PropTypes.func.isRequired,
};

export default CustomAlert;
