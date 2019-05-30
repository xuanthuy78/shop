import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgPoster from "../../../../src/images/poster.jpg";
import "./ViewPoster.scss";
import * as callApi from "../../../services/apiCaller";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
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
                <div id="demo" className="carousel slide" data-ride="carousel">
                  {/* Indicators */}
                  <ul className="carousel-indicators">
                    <li
                      data-target="#demo"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                  </ul>
                  {/* The slideshow */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={imgPoster}
                        className="image-resize"
                        alt="Los Angeles"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={imgPoster}
                        className="image-resize"
                        alt="Chicago"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={imgPoster}
                        className="image-resize"
                        alt="New York"
                      />
                    </div>
                  </div>
                  {/* Left and right controls */}
                  <a
                    className="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 poster-cart">
                <div className="single-item-body">
                  <h3 className="single-item-title">{product.name}</h3>
                  <h3 className="single-item-price">
                    <span>$ {product.price}</span>
                  </h3>
                </div>
                <div className="single-item-desc">
                  <p>
                    {product.description}
                  </p>
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
                      SKU: POSTER-PREMIUM-QUALITY Category:{" "}
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
              <div id="description" className="tab-pane active">
                <div className="description mt-4">
                  <h3 className="font-bold">Description</h3>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo.
                  </p>
                </div>
              </div>
              <div id="reviews" className="tab-pane fade post-review">
                <div className="review mt-4">
                  <h3 className="font-bold">Reviews (0)</h3>
                  <p>There are no reviews yet.</p>
                </div>
                <div className="idea mt-2">
                  <h3 className="font-bold">
                    Be the first to review “Ship Your Idea”
                  </h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form>
                    <div className="rating form-group">
                      <p>Your rating *</p>
                      <div>
                        <fieldset className="rating">
                          <input
                            type="radio"
                            id="star5"
                            name="rating"
                            defaultValue={5}
                          />
                          <label
                            className="full"
                            htmlFor="star5"
                            title="Awesome - 5 stars"
                          />
                          <input
                            type="radio"
                            id="star4half"
                            name="rating"
                            defaultValue="4 and a half"
                          />
                          <label
                            className="half"
                            htmlFor="star4half"
                            title="Pretty good - 4.5 stars"
                          />
                          <input
                            type="radio"
                            id="star4"
                            name="rating"
                            defaultValue={4}
                          />
                          <label
                            className="full"
                            htmlFor="star4"
                            title="Pretty good - 4 stars"
                          />
                          <input
                            type="radio"
                            id="star3half"
                            name="rating"
                            defaultValue="3 and a half"
                          />
                          <label
                            className="half"
                            htmlFor="star3half"
                            title="Meh - 3.5 stars"
                          />
                          <input
                            type="radio"
                            id="star3"
                            name="rating"
                            defaultValue={3}
                          />
                          <label
                            className="full"
                            htmlFor="star3"
                            title="Meh - 3 stars"
                          />
                          <input
                            type="radio"
                            id="star2half"
                            name="rating"
                            defaultValue="2 and a half"
                          />
                          <label
                            className="half"
                            htmlFor="star2half"
                            title="Kinda bad - 2.5 stars"
                          />
                          <input
                            type="radio"
                            id="star2"
                            name="rating"
                            defaultValue={2}
                          />
                          <label
                            className="full"
                            htmlFor="star2"
                            title="Kinda bad - 2 stars"
                          />
                          <input
                            type="radio"
                            id="star1half"
                            name="rating"
                            defaultValue="1 and a half"
                          />
                          <label
                            className="half"
                            htmlFor="star1half"
                            title="Meh - 1.5 stars"
                          />
                          <input
                            type="radio"
                            id="star1"
                            name="rating"
                            defaultValue={1}
                          />
                          <label
                            className="full"
                            htmlFor="star1"
                            title="Sucks big time - 1 star"
                          />
                          <input
                            type="radio"
                            id="starhalf"
                            name="rating"
                            defaultValue="half"
                          />
                          <label
                            className="half"
                            htmlFor="starhalf"
                            title="Sucks big time - 0.5 stars"
                          />
                        </fieldset>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="form-group">
                      <label>Your review *</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        id="comment"
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label>Name *</label>
                        <input className="form-control" id="name" type="text" />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label>Email *</label>
                        <input
                          className="form-control"
                          id="email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" />
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="poster-like mt-5">
            <h3 className="font-bold">You may also like…</h3>
            <div className="row mt-5">
              {/* <Poster/>
              <Poster/>
              <Poster/> */}
            </div>
          </div>
          <div className="poster-Related  mt-5">
            <h3 className="font-bold">Related products</h3>
            <div className="row mt-5">
              {/* <Poster/>
              <Poster/>
              <Poster/> */}
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
