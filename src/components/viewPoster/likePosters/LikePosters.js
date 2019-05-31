import React, { Component } from 'react';
import { Link } from "react-router-dom";
import imagesPoster from '../../../../src/images/poster.jpg';

export class LikePosters extends Component {
  render() {
    return (
      <div className="Poster col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
        <Link to="" className="card mb-3 link-cart">
          <img
            className="card-img-top"
            src={imagesPoster}
            alt="Card image"
            style={{ width: "100%" }}
            aria-hidden
          />
          <div className="card-body">
            <h4 className="card-title">Price</h4>
            <p className="card-text">$ 10</p>
            <div to="/" className="nav-link btn btn-dark btn-cart">
              <i className="fas fa-shopping-cart" /> Add to cart
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default LikePosters
