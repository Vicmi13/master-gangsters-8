import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { UserProvider, UserLoggedContext } from "./context/userContext";

function App() {
  return (
    <Router>
      <Switch>
        <UserProvider>
          <UserLoggedContext.Consumer>
            {() => (
              <>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/login" component={Login} />

                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </>
            )}
          </UserLoggedContext.Consumer>
        </UserProvider>
        {/* Ruta para algo not found */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
