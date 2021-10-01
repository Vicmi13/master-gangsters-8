import { Typography } from "@mui/material";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Switch, Route, useRouteMatch } from "react-router";
import Main from "./Main";
import NavBar from "./NavBar";

const Dashboard = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path={`${path}`}>
          <Main />
        </Route>

        <Route path={`${path}/nuevo-usuario`}>
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "orange" }}
          >
            Nuevos usuarios
          </Typography>
        </Route>

        <Route path={`${path}/usuarios`}>
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "orange" }}
          >
            usuarios
          </Typography>
        </Route>

        <Route path={`${path}/items`}>
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "orange" }}
          >
            items
          </Typography>
        </Route>

        <Route path={`${path}/mi-perfil`}>
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "orange" }}
          >
            Mi Perfil
          </Typography>
        </Route>

        <Route>
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "red" }}
          >
            404 not found de dashboard
          </Typography>
        </Route>
      </Switch>
    </>
  );
};

export default Dashboard;
