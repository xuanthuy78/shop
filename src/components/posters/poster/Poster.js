import React, { Component } from "react";
import { Link } from "react-router-dom";
import imagesPoster from '../../../../src/images/poster.jpg';
import './Poster.scss';
export class Poster extends Component {
  render() {
    var { product } = this.props;
    var imgPoster = product.images.length > 0 ? product.images[0].src : imagesPoster;
    
    return (
      <div className="Poster col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
        <Link to={`/posters/${product.id}`} className="card mb-3 link-cart">
          <img
            className="card-img-top"
            src={imgPoster}
            alt="Card image"
            style={{ width: "100%" }}
            aria-hidden
          />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">$ {product.price}</p>
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
