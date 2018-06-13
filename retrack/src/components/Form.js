import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup className="form-group">
          <Label className="email-label" for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label className="password-label" for="examplePassword">Password</Label>
          <Input className="password-field" type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
       
        <Button>Submit</Button>
      </Form>
    );
  }
}