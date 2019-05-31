import React, { Component } from "react";
import { NavItem, NavLink } from 'reactstrap';

export class Category extends Component {
  render() {
    var { category } = this.props;
    return (
      <NavItem>
        <NavLink href="/components/">{category.name}</NavLink>
      </NavItem>
    );
  }
}

export default Category;
