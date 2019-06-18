import React, { Component } from "react";
import MenuAdmin from "./../menuAdmin/MenuAdmin";
import { Container, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import ListProduct from "./listProduct/ListProduct";
import { Link } from "react-router-dom";
import * as callApi from "../../../services/apiCaller";
import { findIndex } from 'lodash';

export class Products extends Component {
  constructor(props) {
    super();
  }

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
            this.props.onListProduct(products)
            // this.componentDidMount()
          }
        }
      });
  }

  render() {
    var { products } = this.props;
    console.log('kenh 3',products)
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
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("kenh 2", state.products.listProduct )
  return {
    products: state.products.listProduct
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onListProduct: data => {
      dispatch(actions.listProduct(data));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);