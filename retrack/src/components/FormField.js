import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class FormField extends React.Component {
    constructor (props) {
        super(props);
    }

    render (){
        return(
     <FormGroup>
          <Label for="">{props.name}</Label>
          <Input type="text" />
    </FormGroup>
            )
    }
}