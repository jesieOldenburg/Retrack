import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropdown from './Dropdown';
import Header from './Header';
import SongField from './SongField';
import LyricsField from './LyricsField';
import BPMslider from './BPM';
import base from './fb_init';
import './NewTrack.css';

export default class NewTrack extends React.Component {

    constructor (props) {
        super(props);
       
        this.state = {
            track_title: '',
            time_signature: '',
            bpm: 0,
            notes: ''
        }

        // this.saveTrack = this.saveTrack.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.titleLogger = this.titleLogger.bind(this);
        this.timeSigLogger = this.timeSigLogger.bind(this);
        this.tempoLogger = this.tempoLogger.bind(this);
        this.noteLogger = this.noteLogger.bind(this);
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

     onSubmit = (event) => {
      // userTitle = this.state.value; 
      // event.preventDefault();

      base.push(`tracks`, {
        data: {
            track_title: this.state.track_title,
            time_signature: this.state.time_signature,
            bpm: this.state.bpm,
            notes: this.state.notes
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
        return (
            <div>
                <Header name="Create A New Track" />
                <Form onSubmit={this.onSubmit} >
                    <FormGroup>
                        <Label for="track_title" className="track-title-label">Track Title
                            <Input value={this.state.track_title} type="text" name="track_title" onChange={this.titleLogger} ></Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="time_signature" >Time Signature
                            <Input value={this.state.time_signature} type="text" name="time_signature" onChange={this.timeSigLogger}></Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bpm">Tempo
                            <Input value={this.state.bpm} type="text" name="bpm" onChange={this.tempoLogger} ></Input>
                        </Label >
                    </FormGroup >
                    <FormGroup>
                      <Label for="notes">Notes</Label>
                      <Input value={this.state.notes} type="textarea" name="notes" onChange={this.noteLogger} />
                    </FormGroup>
                    <Button outline size="lg" type="submit" color="primary">Save Track</Button>{' '}
                </Form>
            </div>
            )
    }
}