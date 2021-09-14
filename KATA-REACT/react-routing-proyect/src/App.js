import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Shop from'./components/Shop';
import ElementDetail from './components/ElementDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'




function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/tienda' exact component={Shop} />
          <Route path='/tienda/:id' component={ElementDetail} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
