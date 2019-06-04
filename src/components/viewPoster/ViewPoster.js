import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ViewPoster.scss";
import * as callApi from "../../services/apiCaller";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import SlidePoster from "./slidePoster/SlidePoster";
import RelatedPosters from "./relatedPosters/RelatedPosters";
import LikePosters from "./likePosters/LikePosters";
import Description from "./description/Description";
import Reviews from "./reviews/Reviews";
// import Poster from "../poster/Poster";

export class ViewPoster extends Component {
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      callApi
        .call(`wordpress-demo/wp-json/wc/v3/products/${id}`, "GET", null)
        .then(res => {
          this.props.onDetailProduct(res.data)
        });
        window.scrollTo(0, 0);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      var id = this.props.match.params.id;
      callApi
        .call(`wordpress-demo/wp-json/wc/v3/products/${id}`, "GET", null)
        .then(res => {
          this.props.onDetailProduct(res.data)
        });
      window.scrollTo(0, 0);
    }
  }

  render() {
    var { product } = this.props;
   
    return (
      <div className="ViewPoster">
        <div className="container">
          <div className="poster-content mt-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 poster-image">
                <SlidePoster/>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 poster-cart">
                <div className="single-item-body">
                  <h3 className="single-item-title">{product.name}</h3>
                  <h3 className="single-item-price">
                    <span>$ {product.price}</span>
                  </h3>
                </div>
                <div className="single-item-desc">
                  <p dangerouslySetInnerHTML={{ __html: product.description}} ></p>
                </div>
                <div className="single-item-options">
                  <div className="shop-cart">
                    <form
                      className="form-inline shop-cart"
                      action="/action_page.php"
                    >
                      <input
                        type="number"
                        className="form-control form-control-lg"
                      />
                      <button
                        type="submit"
                        className="btn btn-dark btn-hover btn-lg"
                      >
                        <i className="fas fa-shopping-cart" /> Add to cart
                      </button>
                    </form>
                  </div>
                  <div className="category mt-3">
                    <p className="category-title">
                      SKU: {product.sku} Category:{" "}
                      <Link to="/posters">Posters</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="poster-tab mt-5">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <span
                  className="nav-link active font-bold"
                  data-toggle="tab"
                  href="#description"
                >
                  Description
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link font-bold"
                  data-toggle="tab"
                  href="#reviews"
                >
                  Reviews
                </span>
              </li>
            </ul>
            <div className="tab-content">
              <Description/>
              <Reviews/>
            </div>
          </div>
          <div className="poster-like mt-5">
            <h3 className="font-bold">You may also like…</h3>
            <div className="row mt-5">
              <LikePosters/>
            </div>
          </div>
          <div className="poster-Related  mt-5">
            <h3 className="font-bold">Related posters</h3>
            <div className="row mt-5">
              <RelatedPosters product = {product}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.detailProduct
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDetailProduct: data => {
      dispatch(actions.detailProduct(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPoster);
