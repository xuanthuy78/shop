import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/layout/Header";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Route path="/" exact component={Index} />
        <Route path="/product/" component={About} />
      </div>
    </Router>
  );
}

export default App;
