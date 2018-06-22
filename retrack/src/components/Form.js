import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';
import base from './fb_init';

var faker = require('faker');

export default class LoginForm extends React.Component {
   
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        this.saveNewUser = this.saveNewUser.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    saveNewUser = (e) => {
      console.log("submit");
      e.preventDefault();
     base.push('users', {
        data: {
            email: faker.internet.email(), 
            uid: faker.random.uuid(),
            username: faker.name.findName()
        },
        then(err){
            console.log("post req error");
          if(!err){
            console.log('POST SUCCESFULL');
          }
        }
      })
    }
    
    emailChange = (e) => {
      const userEmail = e.target.value;
        this.setState({
          email: e.target.value
        })

    }

    passwordChange = (e) => {
      const userPass = e.target.value;
        this.setState({
          password: e.target.value
        })

    }
    

  render() {
    return (
      <Form>
        <FormGroup className="email-form-group">
          <Label className="email-label" for="email-login">Email</Label>
          <Input value={this.state.email} type="email" name="email" id="email-login" onChange={this.emailChange}/>
        </FormGroup>
        <FormGroup className="password-form-group">
          <Label className="password-label" for="password-login">Password</Label>
          <Input value={this.state.password} className="password-field" type="password" name="password" id="password-login" onChange={this.passwordChange} />
        </FormGroup>
       
        <Button outline color="primary"  className="login-button" onClick={this.saveNewUser}>Submit</Button>
      </Form>
    );
  }
}