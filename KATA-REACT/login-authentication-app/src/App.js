import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router> 

      <Switch>
        
        <Route exact path="/">
            <Login />
         </Route> 
         <Route  path="/login" component={Login} />
         
         <Route path="/dashboard">
            <h4> dashboard</h4>
         </Route> 

          {/* Ruta para algo not found */}
         <Route component={NotFound} />

      </Switch>
    </Router>
  );
}

export default App;
