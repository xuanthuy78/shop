import React, { Component } from "react";
import "./Login.scss";

export class Login extends Component {
  render() {
    return (
      <div className="container Login">
        <div className="row">
          <div className="col-md-12">
            <div className="box">
              <h1>Login</h1>
              <form autoComplete="off" action="" method="post">
                <div className="inputBox">
                  <input
                    type="text"
                    className="Username"
                    autoComplete="off"
                    required
                  />
                  <label className="label">Username</label>
                </div>
                <div className="inputBox">
                  <input
                    type="password"
                    className="password"
                    autoComplete="off"
                    required
                  />
                  <label className="label">Password</label>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
