import React, { Component } from "react";
import MenuAdmin from "./../menuAdmin/MenuAdmin";
import { Container, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import ListProduct from "./listProduct/ListProduct";
import { Link } from "react-router-dom";
import * as callApi from "../../../services/apiCaller";
import { findIndex } from 'lodash';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { bindActionCreators } from "redux";

export class Products extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1
    };
  }

  componentDidMount() {
    this.props.actions.actProductRequest(this.state.pageNumber);
  }


  onDeleteProduct = (id) => {
    var products = [...this.props.products] ;
    callApi
      .call(`wordpress-demo/wp-json/wc/v3/products/${id}`, "DELETE", null)
      .then(res => {
        if (res.status === 200) {
          const index = findIndex(products, (product) => { 
            return product.id === id ; 
          })

          if(index !== -1) {
            products.splice(index, 1);
            this.props.actions.listProduct(products)
          }
        }
        this.getListPoster(this.state.pageNumber)
      });
  }

  getListPoster (number) {
      this.props.actions.actProductRequest(number);
    //   callApi
    //   .call(`/wordpress-demo/wp-json/wc/v3/products?page=${number}`, "GET", null )
    //   .then(res => {
    //     if (res && res.data) {
    //       this.props.actions.listProduct(res.data);
    //     }
    //   }
    // );
  }

  handlePagination = (number) => {
    if (number !== this.state.pageNumber) {
      this.getListPoster(number);
      this.setState({
        pageNumber: number
      })
    }
  }

  render() {
    var { products } = this.props;

    return (
      <div>
        <MenuAdmin />
        <Container>
          <div className="title mt-5 mt-2">
            <h2>Products</h2>
            <div className="btn-add mb-3">
              <Link to="/admin/createProduct"> 
                <Button color="primary">Add Products</Button>{' '}
              </Link>
            </div>
          </div>
          <Table hover bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Images</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              { 
                products.map((product, index) => 
                  <ListProduct onDeleteProduct= {this.onDeleteProduct} product={product} key={index} index={index} /> 
                )
              }
            </tbody>
          </Table>
          <Pagination
            onShowSizeChange={this.onShowSizeChange}
            onChange={this.handlePagination}
            defaultCurrent={3}
            total={100}
            current={this.state.pageNumber}
            className="mb-5"
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.listProduct
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators(actions, dispatch)

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);