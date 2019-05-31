import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Home.scss';
import HeaderCategories from "../layout/headerCategories/HeaderCategories";

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HeaderCategories/>
        <div className="container mt-5">
          <div className="content">
            <h1>Hello world!</h1>
            <p>
              Welcome to WordPress. This is your first post. Edit or delete it,
              then start writing!
            </p>
          </div>
          <div className="link float-left">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/posters" className="nav-link"><i className="far fa-user icon"></i>admin</Link>
              </li>
              <li className="nav-item">
                <Link to="/posters" className="nav-link"><i className="far fa-clock icon"></i>May 16, 2019</Link>
              </li>
              <li className="nav-item">
                <Link to="/posters" className="nav-link"><i className="fas fa-file-archive icon"></i>Posted inUncategorized</Link>
              </li>
              <li className="nav-item">
                <Link to="/posters" className="nav-link"><i className="far fa-comment-alt icon"></i>Comment</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
