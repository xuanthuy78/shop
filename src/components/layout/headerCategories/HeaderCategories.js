import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';
import * as callApi from "../../../services/apiCaller";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import Category from './category/Category';

export class HeaderCategories extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    callApi
      .call("wordpress-demo/wp-json/wc/v3/products/categories", "GET", null)
      .then(res => {
        if (res && res.data) {
          this.props.onListCategories(res.data);
        }
      }
    );
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  showCategories(categories) {
    var result = null;
    if (categories && categories.length > 0) {
      result = categories.map((category, index) => {
        return (
          <Category key={index} category={category} />
        );
      });
    }
    return result;
  }

  render() {
    var { categories } = this.props;
    
    return (
      <Navbar color="info" light expand="md">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {this.showCategories(categories)}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories : state.categories.listCategories
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onListCategories: data => {
      dispatch(actions.listCategories(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCategories);
