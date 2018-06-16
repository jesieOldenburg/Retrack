import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropdown from './Dropdown';
import Header from './Header';
import SongField from './SongField';
import LyricsField from './LyricsField';
import BPMslider from './BPM';
import base from './fb_init';

// function addUser(){
//       base.post(`users`, {
//         data: {name: 'Tyler McGinnis', age: 25},
//         then(err){
//           if(!err){
//             console.log("post req error");
//           }
//         }
//       });
//     }

export default class NewTrack extends React.Component {

    constructor (props) {
        super(props);
        this.state = {

        }
        this.saveTrack = this.saveTrack.bind(this);
    }

    saveTrack (e) {
        e.preventDefault();
        // addUser();
        console.log("clicked");

    }

    render(){
        return (
            <div>
                <Header name="Create A New Track" />
                <Form>
                    <SongField />
                    <Dropdown />
                    <BPMslider />
                    <LyricsField />
                    <Button outline size="lg" onClick={this.saveTrack} color="primary">Save Track</Button>{' '}
                </Form>
            </div>
            )
    }
}