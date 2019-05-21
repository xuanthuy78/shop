import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Posters from "./components/posters/Posters";

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Route path="/" exact component={Home} />
        <Route path="/posters/" component={Posters} />
      </div>
    </Router>
  );
}

export default App;
