import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import './App.scss';
import routes from './router';
import * as callApi from "./services/apiCaller";
import { connect } from "react-redux";
import * as actions from "./actions/index";

export class App extends Component {
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
  showContentMenu = (routes) => {
    var result = null
    if(routes.length > 0) {
      result = routes.map((route,index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />);
      })
    }
    return <Switch>{result}</Switch>
  }
  render() {
    return (
      <Router>
        <div>
          <Header/>
          {this.showContentMenu(routes)}
        </div>
      </Router>
    );
  } 
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onListProduct: data => {
      dispatch(actions.listProduct(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
