import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LyricsField extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            notes: ''
        }
    }

    render () {
        return (
        <FormGroup>
          <Label for="exampleText">Notes</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
            )
    }

}