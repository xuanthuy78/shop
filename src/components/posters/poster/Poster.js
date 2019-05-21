import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Poster extends Component {
  render() {
    return (
        <div className="Poster col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
          <div to="/" className="card mb-3">
            <img
              className="card-img-top"
              src="http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              alt="Card image"
              style={{ width: "100%" }}
              aria-hidden
            />
            <div className="card-body">
              <h4 className="card-title">Ship Your Idea</h4>
              <p className="card-text">$15.00</p>
              <Link to="/" className="nav-link btn btn-dark">
                Add to cart
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

export default Poster;
