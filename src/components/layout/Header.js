import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <Link to="/home"  className="navbar-brand text-white">Demo - Just another ReactJs site</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link text-info font-bold">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/posters" className="nav-link text-info font-bold">Posters</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-info font-bold">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
