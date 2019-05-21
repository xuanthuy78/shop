import React, { Component } from "react";

import Poster from "./poster/Poster";
import Sort from "./sort/Sort";

export class Posters extends Component {
  render() {
    return (
      <div className="Posters mt-5">
        <div className="container">
          <div className="posters-title">
            <h1>Posters</h1>
            <Sort />
            <div className="result">
              <h6>Showing all 5 results</h6>
            </div>
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
        </div>
      </div>
    );
  }
}

export default Posters;
