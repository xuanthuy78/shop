import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Posters from "./components/posters/Posters";
import ViewPoster from "./components/posters/viewPoster/ViewPoster";
import Login from "./components/login/Login";
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
          {/* <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/posters/" exact component={Posters} />
          <Route path="/poster/viewPoster" exact component={ViewPoster} /> */}
        </div>
      </Router>
    );
  } 
}

export default App;
