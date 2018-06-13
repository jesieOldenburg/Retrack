import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const time_signatures = ["4/4", "2/4", "2/2", "3/4", "3/8", "3/8", "6/8", "9/8", "12/8" ]
console.log("timesig", time_signatures);

export default class Dropdown extends React.Component {
    
    constructor(props) {
    super(props);
    }

    render () {
        
        let time_values;
        time_values = time_signatures.map((item, index) => {
          {console.log("item", item)}
          return <option>{item}</option>
          })

        {console.log("mapped", time_values)}
        return (
            <FormGroup>
              <Label for="exampleSelect"></Label>
              <Input type="select" name="select" id="exampleSelect">
                {time_values}
              </Input>
            </FormGroup>
            )  
    }
}