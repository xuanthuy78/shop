import React, { Component } from "react";
import "./Login.scss";
import callApi from './../../services/apiCaller';



export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'username' : '',
      'password' : ''
    };
  }

  onChange =  (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }

  onLogin = (e) => {
    e.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
    var data = {
      username : this.state.username,
      password : this.state.password
    }
    callApi('wordpress-demo/wp-json/jwt-auth/v1/token', 'POST', data ).then(res =>{
      console.log(res.data.token) 
   
     
    })
  }
  render() {
    var {username, password} = this.state;
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
      </div>
    );
  }
}

export default Login;
