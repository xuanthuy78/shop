import React, { Component } from "react";
import {Container, Row} from 'reactstrap';
import  HeaderCategories from "../layout/headerCategories/HeaderCategories";
import * as callApi from "../../services/apiCaller";
import Poster from "../posters/poster/Poster";

export class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      productCategory: ''
    }
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      console.log(id);
      callApi
        .call(`wordpress-demo/wp-json/wc/v3/products/?category=${id}`, "GET", null)
        .then(res => {
          this.setState({
            productCategory : res.data
          })
        });
    }
  }

  showProducts(productCategory) {
    var result = null;
    if (productCategory.length > 0) {
      result = productCategory.map((product, index) => {
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
    var {productCategory} = this.state
    return (
      <div className='ProductCategory'>
        <HeaderCategories/>
        <Container className= "mt-5">
          <Row>
            {this.showProducts(productCategory)}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductCategory;
