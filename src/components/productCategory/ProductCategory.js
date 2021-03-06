import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import HeaderCategories from "../layout/headerCategories/HeaderCategories";
import * as callApi from "../../services/apiCaller";
import Poster from "../posters/poster/Poster";
import { connect } from "react-redux";
import { findIndex } from "lodash";
export class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      productCategory: ""
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      callApi
        .call(
          `wordpress-demo/wp-json/wc/v3/products/?category=${id}`,
          "GET",
          null
        )
        .then(res => {
          this.setState({
            productCategory: res.data
          });
        });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      let { match } = this.props;
      if (match) {
        let id = match.params.id;
        callApi
          .call(
            `wordpress-demo/wp-json/wc/v3/products/?category=${id}`,
            "GET",
            null
          )
          .then(res => {
            this.setState({
              productCategory: res.data
            });
          });
      }
    }
  }

  showProducts(productCategory) {
    var result = null;
    if (productCategory.length > 0) {
      result = productCategory.map((product, index) => {
        return (
          <div
            key={index}
            className="Poster col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
          >
            <Poster product={product} />
          </div>
        );
      });
    }
    return result;
  }

  showCategory(categories, match) {
    var result = null;
    if (categories.length > 0) {
      var id = parseInt(match.params.id);
      var index = findIndex(categories, category => {
        return category.id === id;
      });
      if (index !== -1) {
        return <h1>{categories[index].name}</h1>;
      }
    }
    return result;
  }

  render() {
    var { productCategory } = this.state;
    var { categories, match } = this.props;
    return (
      <div className="ProductCategory">
        <HeaderCategories />
        <Container className="mt-5">
          {this.showCategory(categories, match)}
          <Row>{this.showProducts(productCategory)}</Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.listCategories
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductCategory);
