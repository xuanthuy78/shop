import React, { Component } from "react";
import Poster from "./poster/Poster";
import Sort from "./sortPosters/Sort";
import Result from "./resultPosters/Result";
import { Link } from "react-router-dom";

export class Posters extends Component {
  render() {
    return (
      <div className="Posters mt-5">
        <div className="container">
          <div className="posters-title">
            <h1>Posters</h1>
            <Sort />
            <Result/>
          </div>
          <div className="posters-content">
            <div className="row">
              <Poster/>
              <Poster/>
              <Poster/>
              <Poster/>
              <Poster/>
              <Poster/>
            </div>
          </div>
          <div className="posters-end">
            <ul className="pagination">
              <li className="page-item"><Link to="/" className="page-link"><i className="fas fa-angle-left"></i></Link></li>
              <li className="page-item"><Link to="/" className="page-link">1</Link></li>
              <li className="page-item"><Link to="/" className="page-link">2</Link></li>
              <li className="page-item"><Link to="/" className="page-link">3</Link></li>
              <li className="page-item"><Link to="/" className="page-link"><i className="fas fa-angle-right"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Posters;
