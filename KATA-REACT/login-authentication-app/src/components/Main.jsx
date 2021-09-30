import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomAlert from "./shared/CustomAlert";

function Main() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Main page
        <Button onClick={() => setShowAlert(true)}> Mostrar alerta</Button>
      </Typography>

      {showAlert && (
        <CustomAlert
          messageError="Mostrando otro mensaje en alerta"
          severity="info"
        />
      )}
    </div>
  );
}

export default Main;
