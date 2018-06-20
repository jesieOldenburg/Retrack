import React, { Component } from 'react';
import logo from './record_logo.svg';
import './App.css';
import Login from './components/Login';
import Form from './components/Form';
import NewTrack from './components/NewTrack';
import TrackCard from './components/TrackCards';
import UserTracks from './components/UserTracks';
import base from './components/fb_init.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
          <NewTrack />
          <UserTracks />

      </div>
    );
  }
}

export default App;