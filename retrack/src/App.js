import React, { Component } from 'react';
import logo from './record_logo.svg';
import './App.css';
import Login from './components/Login';
import Form from './components/Form';
import NewTrack from './components/NewTrack';
import TrackCard from './components/TrackCards';
import UserTracks from './components/UserTracks';
import base from './components/fb_init.js';
import Logout from './components/Logout';
import user from './components/userAuth';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            relogin: true
        }
    }

    componentDidMount(){
    this.authListener = base.initializedApp.auth().onAuthStateChanged((user) =>{
      if (user){
        this.setState({
          loggedIn: true,
          relogin: false
        });

      }else{
        this.setState({
          loggedIn: false,
        })
      }
    })
  }

  render() {

    const userLoggedIn = this.state.loggedIn;
    if (userLoggedIn === false ) {
        return <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
      </div>
    } else if (userLoggedIn === true) {
    
    return (
      <div className="App">
        <div className="logout-button-container" >
            <Logout />
        </div>
          <NewTrack />
      </div>
    );
    } else if (this.state.relogin === false) {
      return <div>
              <p>Hie</p>
            </div>
    }
  }
}

export default App;