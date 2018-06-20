import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';

export default class LoginForm extends React.Component {
  //Need to add state here...
  render() {
    return (
      <Form>
        <FormGroup className="email-form-group">
          <Label className="email-label" for="email-login">Email</Label>
          <Input type="email" name="email" id="email-login" />
        </FormGroup>
        <FormGroup className="password-form-group">
          <Label className="password-label" for="password-login">Password</Label>
          <Input className="password-field" type="password" name="password" id="password-login" />
        </FormGroup>
       
        <Button className="login-button">Submit</Button>
      </Form>
    );
  }
}