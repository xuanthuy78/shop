import React, { Component } from 'react'
import { Button } from "reactstrap";
import imagesPoster from '../../../../images/poster.jpg';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from "react-router-dom";
export class ListProduct extends Component {

  onDeleteProduct = (product) => {
    confirmAlert({
      title: 'Are you sure ?',
      message: `You want to delete this ${product.name} poster`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.onDeleteProduct(product.id)
        },
        {
          label: 'No'
        }
      ]
    });
  }
  
  render() {
    var { product, index } = this.props;
    var imgPoster = product.images.length > 0 ? product.images[0].src : imagesPoster;

    return (
      <tr>
        <th scope="row" style={{ width: "5%" }}>{index + 1}</th>
        <td style={{ width: "20%" }}>
          <img
            src={imgPoster}
            alt="Card image"
            style={{ width: "50%" }}
            aria-hidden
          />
        </td>
        <td style={{ width: "30px" }}>{product.name}</td>
        <td style={{ width: "10px" }}>{product.price}</td>
        <td style={{ width: "20px" }}>
          <Link to={`/admin/product/${product.id}/edit`}>
            <Button color="success"><i className="fas fa-edit"></i></Button>{' '}
          </Link>
          <Button color="danger" onClick={() => this.onDeleteProduct(product)}><i className="fas fa-trash-alt"></i></Button>{' '}
        </td>
      </tr>
    )
  }
}

export default ListProduct
