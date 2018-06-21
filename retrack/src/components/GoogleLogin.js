import React, { Component } from 'react';
import { login, loginWithGoogle, resetPassword } from './../config/userAuth';
import {googleProvider} from './../config/userAuth';
import './GoogleLogin.css';
var userAuthState;

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class GoogleLogin extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            loginMessage: null,
            loggedIn: false
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
       
      }

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.setState({
          loggedIn: true
        })

        loginWithGoogle(googleProvider)
        .catch((error) => {
            this.setState(setErrorMsg('Invalid username/password.'))
        })

    }
    

    resetPassword = () => {
        resetPassword(this.email.value)
        .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
        .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
    }

    
  render () {
    userAuthState = this.state.loggedIn;
console.log("auth", this.state.loggedIn);
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <button value={this.state.loggedIn} className="google-login-button" onClick={this.handleSubmit}>Login With Google</button>
      </div>
    )
  }
}
export default GoogleLogin;