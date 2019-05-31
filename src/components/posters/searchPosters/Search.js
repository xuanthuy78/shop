import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../../actions/index";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      keyword: ""
    };
  }

  onChange = event => {
    event.preventDefault();
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };

  onClear = () => {
    this.setState({
      keyword : '',
    });
  }

  onSearch = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.keyword);
    this.onClear();
  };
  render() {
    var { keyword } = this.state;
    return (
      <div className="Search col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="keyword"
              placeholder="Search"
              value={keyword}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <button 
                className="btn btn-dark btn-hover" 
                type="submit"
                onClick={this.onSearch}
                >
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch : keyword => {
      dispatch(actions.searchProducts(keyword));
    }
  };
};

export default connect(null , mapDispatchToProps)(Search);