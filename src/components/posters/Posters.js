import React, { Component } from "react";
import Poster from "./poster/Poster";
import Sort from "./sortPosters/Sort";
import Result from "./resultPosters/Result";
import { Link } from "react-router-dom";
import Search from "./searchPosters/Search";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
import * as callApi from "../../services/apiCaller";
// import {LIST_PRODUCT} from './../../constants/ActionType'
export class Posters extends Component {
  componentDidMount() {
    callApi
      .call("wordpress-demo/wp-json/wc/v3/products", "GET", null)
      .then(res => {
        if (res && res.data) {
          this.props.onListProduct(res.data);
        }
      }
    );
  }

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Poster key={index} product={product} />;
      });
    }
    return result;
  }

  render() {
    var { products } = this.props;
    
    return (
      <div className="Posters mt-5">
        <div className="container">
          <div className="posters-title">
            <h1>Posters</h1>
            <div className="form-group row justify-content-end">
              <Sort />
              <Search />
            </div>
            <Result count={products.length} />
          </div>
          <div className="posters-content">
            <div className="row">
              {/* Poster */}
              {this.showProducts(products)}
            </div>
          </div>
          <div className="posters-end">
            <ul className="pagination">
              <li className="page-item">
                <Link to="/home" className="page-link">
                  <i className="fas fa-angle-left" />
                </Link>
              </li>
              <li className="page-item">
                <Link to="/home" className="page-link">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link to="/home" className="page-link">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link to="/home" className="page-link">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link to="/home" className="page-link">
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.listProduct
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onListProduct: data => {
      dispatch(actions.listProduct(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posters);
