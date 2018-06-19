import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';



export default class SongField extends React.Component {
    constructor (props) {
        super(props);

        // this.state = { track_title: '' };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
      // this.setState({value: event.target.value})
      this.props.onTitleChange(e.target.value)
    }

    onSubmit = (event) => {
      // userTitle = this.state.value ; 
      event.preventDefault();
    }



    render (){
      const userTitle = this.props.userTitle; 
        return(
     <FormGroup onSubmit={this.onSubmit}>
          <Label for="">Track Title
            <Input type="text" value={userTitle} onChange={this.onChange}  />
          </Label>
    </FormGroup>
            )
    }
}
    // console.log("userTitle", userTitle)