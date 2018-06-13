import React, { Component } from 'react';
import LoginHeader from './LoginHeader';
import Form from './Form';
import { Container, Row, Col } from 'reactstrap';


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