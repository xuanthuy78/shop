import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";

function Poster() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Route path="/" exact component={Home} />
        <Route path="/posters/" component={Poster} />
      </div>
    </Router>
  );
}

export default App;
