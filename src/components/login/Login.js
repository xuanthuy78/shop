import React, { Component } from "react";
import "./Login.scss";
import * as callApi from './../../services/apiCaller';
import { Redirect } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : '',
      redirect: false
    };
  }

  onChange =  (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onLogin = (e) => {
    e.preventDefault();
    var data = {
      username : this.state.username,
      password : this.state.password
    }
    callApi.NoAuth('wordpress-demo/wp-json/jwt-auth/v1/token', 'POST', data ).then(res =>{
      if (res && res.data) {
        localStorage.setItem('token', res.data.token);
        this.setState({redirect: true});
      } else {
        NotificationManager.warning('Username & Password incorrect');
      }
    })
  }
  render() {
    var {username, password, redirect} = this.state;

    if(redirect) {
      return <Redirect to="/home" />
    }

    return (
      <div className="container Login">
        <div className="row">
          <div className="col-md-12">
            <div className="box">
              <h1>Login</h1>
              <form onSubmit={this.onLogin}>
                <div className="inputBox">
                  <input
                    type="text"
                    className="Username"
                    autoComplete="off"
                    required
                    name = "username"
                    value={username}
                    onChange = {this.onChange}
                  />
                  <label className="label">Username</label>
                </div>
                <div className="inputBox">
                  <input
                    type="password"
                    className="password"
                    autoComplete="off"
                    required
                    name="password"
                    value={password}
                    onChange = {this.onChange}
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
        <NotificationContainer/>
      </div>
    );
  }
}

export default Login;
