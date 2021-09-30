import { Typography } from "@mui/material";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Switch, Route, useRouteMatch } from "react-router";
import Main from "./Main";
import NavBar from "./NavBar";

const Dashboard = () => {
  // const { path, url } = useRouteMatch();
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/dashboard">
          <Main />
        </Route>

        <Route path="/dashboard/nuevo-usuario">
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "orange" }}
          >
            Nuevos usuarios
          </Typography>
        </Route>

        <Route path="/dashboard/usuarios">
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "orange" }}
          >
            usuarios
          </Typography>
        </Route>

        <Route path="/dashboard/items">
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "orange" }}
          >
            items
          </Typography>
        </Route>

        <Route path="/dashboard/mi-perfil">
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
