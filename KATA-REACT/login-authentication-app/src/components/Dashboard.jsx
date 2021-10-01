import { Typography } from "@mui/material";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Switch, Route, useRouteMatch } from "react-router";
import PrivateRoute from "./helpers/PrivateRoute";
import Main from "./Main";
import NavBar from "./NavBar";

const Dashboard = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <NavBar />

      <Switch>
        <PrivateRoute exact component={() => <Main />} path={`${path}`} />

        <PrivateRoute
          exact
          component={() => (
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "orange" }}
            >
              Nuevos usuarios
            </Typography>
          )}
          path={`${path}/nuevo-usuario`}
        />

        <PrivateRoute
          exact
          component={() => (
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "orange" }}
            >
              usuarios
            </Typography>
          )}
          path={`${path}/usuarios`}
        />

        <PrivateRoute
          exact
          component={() => (
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "orange" }}
            >
              Items
            </Typography>
          )}
          path={`${path}/items`}
        />

        <PrivateRoute
          exact
          component={() => (
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "orange" }}
            >
              Mi Perfil
            </Typography>
          )}
          path={`${path}/mi-perfil`}
        />

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
