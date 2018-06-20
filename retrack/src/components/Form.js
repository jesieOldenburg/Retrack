import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';
import base from './fb_init';
export default class LoginForm extends React.Component {
   
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    onSubmit = (e) => {
      e.preventDefault();
      base.push(`users`, {
        data: {
            email: this.state.email,
            uid: '001',
            username: 'je', 
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
       
        <Button type="submit" className="login-button" onSubmit={this.onSubmit}>Submit</Button>
      </Form>
    );
  }
}