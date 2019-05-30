import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PaginationPosters extends Component {
  render() {
    return (
      <div className="posters-end PaginationPosters">
        <ul className="pagination">
          <li className="page-item">
            <Link to="/home" className="page-link">
              <i className="fas fa-angle-left" />
            </Link>
          </li>
          <li className="page-item">
            <Link to="/home" className="page-link">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link to="/home" className="page-link">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link to="/home" className="page-link">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link to="/home" className="page-link">
              <i className="fas fa-angle-right" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default PaginationPosters;
