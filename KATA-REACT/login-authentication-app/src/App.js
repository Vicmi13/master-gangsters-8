import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login" component={Login} />

        <Route path="/dash">
          <Dashboard />
        </Route>

        {/* Ruta para algo not found */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
