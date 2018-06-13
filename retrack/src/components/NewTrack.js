import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropdown from './Dropdown';
import Header from './Header';

var $ = require("jquery");


export default class NewTrack extends React.Component {

    render(){
        return (
            <div>
                <Header name="Create A New Track" />
                <Dropdown />
                
            </div>
            )
    }
}