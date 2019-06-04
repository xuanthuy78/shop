import React, { Component } from 'react'
import { Button } from "reactstrap";
import imagesPoster from '../../../../images/poster.jpg';
export class ListProduct extends Component {
  render() {
    var { product, index } = this.props;
    var imgPoster = product.images.length > 0 ? product.images[0].src : imagesPoster;
    console.log('dafd', index);
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
          <Button color="success"><i className="fas fa-edit"></i></Button>{' '}
          <Button color="danger"><i className="fas fa-trash-alt"></i></Button>{' '}
        </td>
      </tr>
    )
  }
}

export default ListProduct
