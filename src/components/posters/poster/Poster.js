import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgPoster from '../../../../src/images/poster.jpg';

import './Poster.scss';
export class Poster extends Component {
  render() {
    return (
        <div className="Poster col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <Link to="/poster/viewPoster/" className="card mb-3 link-cart">
            <img
              className="card-img-top"
              src={imgPoster}
              alt="Card image"
              style={{ width: "100%" }}
              aria-hidden
            />
            <div className="card-body">
              <h4 className="card-title">Ship Your Idea</h4>
              <p className="card-text">$15.00</p>
              <div to="/" className="nav-link btn btn-dark btn-cart">
                <i className="fas fa-shopping-cart"></i> Add to cart
              </div>
            </div>
          </Link>
        </div>
    );
  }
}

export default Poster;
