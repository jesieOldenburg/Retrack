import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Form from './components/Form';
import NewTrack from './components/NewTrack';
import TrackCard from './components/TrackCards';
// import Rebase from "re-base";
// import { RebaseProvider } from "react-rebase";


class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
          <NewTrack />
          <TrackCard />
      </div>
    );
  }
}

export default App;
