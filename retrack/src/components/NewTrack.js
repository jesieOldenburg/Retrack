import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import Dropdown from './Dropdown';
import Header from './Header';
import SongField from './SongField';
import LyricsField from './LyricsField';
import BPMslider from './BPM';
import base from './fb_init';
import './NewTrack.css';
import UserTracks from './UserTracks';

var faker = require('faker');
var fakeTrack = faker.random.word(),
    fakeTime = Math.floor((Math.random() * 6) + 1) + " / " + Math.floor((Math.random() * 11) + 1),
    fakeBPM =  Math.floor((Math.random() * 299) + 1) + ' BPM',
    fakeNotes = faker.lorem.paragraphs();

export default class NewTrack extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            track_title: '',
            time_signature: '',
            bpm: '0' + ' BPM',
            notes: '',
            viewTracks: false
        }

        // this.saveTrack = this.saveTrack.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.titleLogger = this.titleLogger.bind(this);
        this.timeSigLogger = this.timeSigLogger.bind(this);
        this.tempoLogger = this.tempoLogger.bind(this);
        this.noteLogger = this.noteLogger.bind(this);
        this.renderUserTracks = this.renderUserTracks.bind(this);
    }

    titleLogger = (e) => {
        const userTitle = e.target.value;

        this.setState({track_title: userTitle})
        console.log('track_title', this.state);
    }

    timeSigLogger = (e) => {
        const userTimeSig = e.target.value;

        this.setState({time_signature: userTimeSig})
        console.log('time_signature', this.state);
    }

    tempoLogger = (e) => {
        const userBpm = e.target.value;

        this.setState({bpm: userBpm})
        console.log('userBpm', this.state);
    }

    noteLogger = (e) => {
        const userNotes = e.target.value;

        this.setState({notes: userNotes})
        console.log('notes', this.state);
    }

    renderUserTracks = () => {
        this.setState({viewTracks: true})
    }

     onSubmit = (event) => {
      // userTitle = this.state.value;
      // event.preventDefault();

      base.push(`tracks`, {
        data: {
            track_title: fakeTrack,
            time_signature: fakeTime,
            bpm: fakeBPM,
            notes: fakeNotes
        },
        then(err){
            console.log("post req error");
          if(!err){
            console.log('POST SUCCESFULL');
          }
        }
      })

    }

    render(){
        if (this.state.viewTracks === false) {
            return (
                <div>
                    <Header  name="New Track" />
                    <Form onSubmit={this.onSubmit} >
                        <FormGroup>
                            <Label for="track_title" className="track-title-label">Track Title
                                <Input className="track-title-field" value={this.state.track_title} type="text" name="track_title" onChange={this.titleLogger} ></Input>
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label className="timesig-label" for="time_signature" >Time Signature
                                <Input className="timesig-field" value={this.state.time_signature} type="text" name="time_signature" onChange={this.timeSigLogger}></Input>
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label className="bpm-label" for="bpm">Tempo
                                <Input className="bpm-field" value={this.state.bpm} type="text" name="bpm" onChange={this.tempoLogger} ></Input>
                            </Label >
                        </FormGroup >
                        <FormGroup>
                          <Label className="notes-label" for="notes">Notes</Label>
                          <Input className="notes-field" value={this.state.notes} type="textarea" name="notes" onChange={this.noteLogger} />
                        </FormGroup>
                        <Button className="save-track-button" outline size="lg" type="submit" color="primary">Save Track</Button>{' '}
                    </Form>

                    <Col>
                        <Button className="stored-tracks-button" outline color="primary" value={this.state.viewTracks} onClick={this.renderUserTracks}>View Stored Tracks</Button>
                    </Col>
                </div>
            )
        } else if (this.state.viewTracks === true) {
            return (
                <div>
                    <UserTracks />
                </div>    )
        }


    }
}
