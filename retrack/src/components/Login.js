import React, { Component } from 'react';
import LoginHeader from './LoginHeader';
import Form from './Form';
import { Container, Row, Col } from 'reactstrap';
// import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

export default class Login extends React.Component {
    

    render () {
        return(

                <div>
                    <LoginHeader />
                    <Form />
                </div>

            )
    }
}