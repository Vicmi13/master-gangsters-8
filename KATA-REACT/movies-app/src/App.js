import { Menu } from './components/Menu/';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Dashboard } from './components/Dashboard/';

function App() {
    
  return (
    <Router>
        <Menu/>
        <Dashboard/>
    </Router>
  );
}

export default App;
