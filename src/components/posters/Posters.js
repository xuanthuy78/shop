import React, { Component } from "react";
import Poster from "./poster/Poster";
import Sort from "./sortPosters/Sort";
import Result from "./resultPosters/Result";
import Search from "./searchPosters/Search";
import { connect } from "react-redux";
import PaginationPosters from "./paginationPosters/PaginationPosters";
import { filter } from 'lodash';
// import {LIST_PRODUCT} from './../../constants/ActionType'
export class Posters extends Component {
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <div key={index} className="Poster col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
            <Poster product={product} />
          </div>
          );
      });
    }
    return result;
  }

  render() {
    var { products, keyword } = this.props;

    products = filter(products, (product) => {
      return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    
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
          <PaginationPosters/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.listProduct,
    keyword : state.searchProducts
  };
};

export default connect(mapStateToProps, null)(Posters);
