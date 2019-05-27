import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div className="Search col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
        <form>  
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-append">
              <button className="btn btn-dark btn-hover" type="submit">
              <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
