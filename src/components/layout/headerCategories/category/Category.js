import React, { Component } from "react";
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Category extends Component {
  render() {
    var { category } = this.props;
    return (
      <NavItem>
        <Link to={`/category/${category.id}`} className="link-category">{category.name}</Link>
      </NavItem>
    );
  }
}

export default Category;
