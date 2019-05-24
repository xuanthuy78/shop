import React, { Component } from "react";

export class Sort extends Component {
  render() {
    return (
      <div className="Sort col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
        <select className="form-control" id="sel1">
          <option>Default sorting</option>
          <option>Sort by popularity</option>
          <option>Sort by average rating</option>
          <option>Sort by latest</option>
          <option>Sort by price: low to hight</option>
          <option>Sort by price: hight to low</option>
        </select>
      </div>
    );
  }
}

export default Sort;
