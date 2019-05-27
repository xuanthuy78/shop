import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Posters from "./components/posters/Posters";
import ViewPoster from "./components/posters/viewPoster/ViewPoster";
import Login from "./components/login/Login";
import './App.scss';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/posters/" exact component={Posters} />
        <Route path="/poster/viewPoster" exact component={ViewPoster} />
      </div>
    </Router>
  );
}

export default App;
