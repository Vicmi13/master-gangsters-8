import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import getInfoUser from "../../services/User.services";

const Profile = () => {
  useEffect(() => {
    // Recuperar informacion de persona loggeada desde endpoint
    getInfoProfile();
  }, []);

  const getInfoProfile = async () => {
    const hardCodedJWT =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmM1NDVmOWQ1OTE4NGUwMDA3MjEwMSIsInJvbGUiOiJDVVNUT01FUiIsImV4cCI6MTYzMzQ3ODc1OSwiaWF0IjoxNjMzMzkyMzU5fQ.pKfiEAkWKRbWiR8x3HA7xVTLWPjt_N6z9m9Ss5ILL84";

    try {
      const result = await getInfoUser(hardCodedJWT);
      console.log("result", result);
    } catch (error) {
      console.log("error al recuperar info", error);
    }
  };

  return (
    <div>
      <Typography variant="h6" style={{ textAlign: "center", color: "orange" }}>
        Mi Perfil
      </Typography>
    </div>
  );
};

export default Profile;
