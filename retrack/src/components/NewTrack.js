import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropdown from './Dropdown';
import Header from './Header';
import SongField from './SongField';
import LyricsField from './LyricsField';
import BPMslider from './BPM';
import base from './fb_init';

function saveTrack() {
      base.post(`users`, {
        data: {
            email: 'Tyler McGinnis', 
            uid: 25,
            username: 'test'
        },
        then(err){
            console.log("post req error");
          if(!err){
            console.log('POST SUCCESFULL');
          }
        }
      });
    }

export default class NewTrack extends React.Component {

    constructor (props) {
        super(props);
        this.state = {

        }
        this.saveTrack = this.saveTrack.bind(this);
    }

    saveTrack (e) {
        e.preventDefault();
        saveTrack();
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