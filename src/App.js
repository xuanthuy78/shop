import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import './App.scss';
import routes from './router';


export class App extends Component {
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

export default App;
