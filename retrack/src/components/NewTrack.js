import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropdown from './Dropdown';
import Header from './Header';
import SongField from './SongField';
import LyricsField from './LyricsField';
import BPMslider from './BPM';

export default class NewTrack extends React.Component {

    render(){
        return (
            <div>
                <Header name="Create A New Track" />
                <Form>
                    <SongField />
                    <Dropdown />
                    <BPMslider />
                    <LyricsField />
                    <Button outline size="lg" color="primary">Save Track</Button>{' '}
                </Form>
            </div>
            )
    }
}