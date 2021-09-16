import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/Menu';
import Image from './components/Image';
import About from './components/About';

function App() {
  return (
    // Router es el que engloba y va a servir como mi enrutador
    <Router>
      <div>

        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <nav>
          <ul>
            <li>
              {/* Sustituye al tag a de HTML y permite la navegacion (redireccionamiento) */}
              <Link to="/">
                Menú
              </Link>
            </li>
            <li>
              <Link to="/imagen">
                Ver imagen del día
              </Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        {/* <Route path="/principal">
          <Redirect to="/" />
        </Route> */}
        <Route exact path="/">
          <Menu />
        </Route>
        <Route path="/imagen">
          <Image />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );




}

export default App;
