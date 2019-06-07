import React, { Component } from "react";
import MenuAdmin from "./../menuAdmin/MenuAdmin";
import { Container, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import ListProduct from "./listProduct/ListProduct";
import { Link } from "react-router-dom";
import * as callApi from "../../../services/apiCaller";
import { findIndex } from 'lodash';
// import * as actions from "../../../actions/index";

export class Products extends Component {
  constructor(props) {
    super();
  }

  componentWillReceiveProps(nextProps) {

  }
  onDeleteProduct = (id) => {
    var { products } = this.props ;
    callApi
      .call(`wordpress-demo/wp-json/wc/v3/products/${id}`, "DELETE", null)
      .then(res => {
        if (res.status === 200) {
          const index = findIndex(products, (product) => { 
            return product.id === id ; 
          })

          if(index !== -1) {
            products.splice(index, 1);
            this.props.onDeteleProductAdmin(products);
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

  // showProducts = (products) => {
  //   console.log('re render');
  //   var result = null;
  //   if (products.length > 0) {
  //     result = products.map((product, index) => {
  //       return (
  //         <ListProduct onDeleteProduct= {this.onDeleteProduct} product={product} key={index} index={index}/>
  //       );
  //     });
  //   }
  //   return result;
  // }
}

// function Products (props) {
//   const { products } = props;
//   console.log(products);
//   return ( )
// }

const mapStateToProps = state => {
  console.log('kenh 2', state.products.listProduct)
  return {
    products: state.products.listProduct
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeteleProductAdmin: data => {
      console.log('kenh 1',data);
      dispatch(actions.listProduct(data));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);