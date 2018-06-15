import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class SongField extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
          song: ' '
        }
    }

    render (){
        return(
     <FormGroup>
          <Label for="">Track Title
            <Input type="text" />
          </Label>
    </FormGroup>
            )
    }
}