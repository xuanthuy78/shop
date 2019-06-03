import React, { Component } from "react";
import { NavItem, NavLink } from 'reactstrap';

export class Category extends Component {
  render() {
    var { category } = this.props;
    return (
      <NavItem>
        <NavLink href={`/product/${category.id}`}>{category.name}</NavLink>
      </NavItem>
    );
  }
}

export default Category;
