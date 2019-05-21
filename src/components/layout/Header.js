import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a className="navbar-brand text-white">Demo - Just another ReactJs site</a>
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
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/posters" className="nav-link">Posters</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
