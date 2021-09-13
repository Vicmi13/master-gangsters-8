import App from '../App.css';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/about">
                <li>About</li>
                </Link>
                <Link to="/tienda">
                <li>Shops</li>
                </Link>

            </ul>
        </nav>
    </div>
  );
}

export default Nav;
