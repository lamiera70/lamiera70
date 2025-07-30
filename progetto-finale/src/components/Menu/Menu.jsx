import DarkLite from '../DarkLite/DarkLite';
import './Menu.css';
import { NavLink } from 'react-router';

export default function Menu({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          {title}
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-left" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item px-2">
              <NavLink className="nav-link" to="/">
                Home Page
              </NavLink>
            </li> */}
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/favorite">
                Preferiti
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="ms-auto">
          <DarkLite />
        </div>

      </div>
    </nav>
  );
}
