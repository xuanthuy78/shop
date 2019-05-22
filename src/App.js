import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Posters from "./components/posters/Posters";
import ViewPoster from "./components/posters/viewPoster/ViewPoster";


function App() {
  return (
    <Router>
      <div>
        <Header/>
        
        <Route path="/" exact component={Home} />
        <Route path="/posters/" component={Posters} />
        <Route path="/poster/viewPoster" component={ViewPoster} />
      </div>
    </Router>
  );
}

export default App;
