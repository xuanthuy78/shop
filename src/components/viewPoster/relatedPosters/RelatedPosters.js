import React, { Component } from "react";
import * as callApi from "../../../services/apiCaller";
import { isEmpty } from 'lodash';
import { connect } from "react-redux";
import * as actions from "./../../../actions/index";
import Poster from "../../posters/poster/Poster";

export class RelatedPosters extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (isEmpty(prevProps.product) && this.props.product) {
      var arrIds = this.props.product ? this.props.product.related_ids : [];
      if(arrIds) {
        callApi
          .call(`wordpress-demo/wp-json/wc/v3/products?include=${arrIds.join(',')}`, "GET", null)
          .then(res => {
            this.props.onRelatedProduct(res.data)
        });
      }
    }
  }

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <div key={index} className="Poster col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <Poster product={product} />
          </div>
        );
      });
    }
    return result;
  }

  render() {
    console.log('render')
    var {products} = this.props;
    return (
        this.showProducts(products)
    );
  }
}


const mapStateToProps = state => {
  return {
    products: state.products.relatedProducts
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onRelatedProduct: data => {
      dispatch(actions.relatedProducts(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedPosters);