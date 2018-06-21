import React, { Component } from 'react';
import LoginHeader from './LoginHeader';
import Form from './Form';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import GoogleLogin from './GoogleLogin';
import NewTrack from './NewTrack';



export default class Login extends React.Component {
    

    render () {
        return(
            <Router >
                <div>
                    <LoginHeader />
                    <Form />
                    <GoogleLogin />
                    <Link to="/NewTrack" ></Link>
                    <Route path="/NewTrack" component={NewTrack} />
                </div>
            </Router>

            )
    }
}