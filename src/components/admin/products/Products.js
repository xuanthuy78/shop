import React, { Component } from "react";
import MenuAdmin from "./../menuAdmin/MenuAdmin";
import { Container, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import ListProduct from "./listProduct/ListProduct";
// import * as actions from "../../../actions/index";

export class Products extends Component {
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ListProduct product={product} key={index} index={index}/>
        );
      });
    }
    return result;
  }

  render() {
    var { products } = this.props;
    console.log('co phai toi', products)
    return (
      <div>
        <MenuAdmin />
        <Container>
          <div className="title mt-5 mt-2">
            <h2>Products</h2>
            <div className="btn-add mb-3">
              <Button color="primary">Add Products</Button>{' '}
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
              {this.showProducts(products)}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.listProduct,
  };
};

export default connect(mapStateToProps, null )(Products);
