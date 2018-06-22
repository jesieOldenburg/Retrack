import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import base from './fb_init';

class EditTrackModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            track_title: '',
            time_signature: '',
            bpm: 0,
            notes: ''
        };
        this.titleLogger = this.titleLogger.bind(this);
        this.timeSigLogger = this.timeSigLogger.bind(this);
        this.tempoLogger = this.tempoLogger.bind(this);
        this.noteLogger = this.noteLogger.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
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
    	this.setState({
    		modal: false
    	})
    	console.log("key?", this.props.fb_key);
      base.post(`tracks/${this.props.fb_key}`, {
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

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal value={this.props.fb_key} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{}</ModalHeader>
                    <ModalBody>
                    	<Form onSubmit={this.onSubmit} >
		                	<FormGroup>
		                		<Label for="track_title" className="track-title-label">Track Title
		                            <Input placeholder={this.props.trackName} onChange={this.titleLogger}></Input>
		                        </Label>
		                    </FormGroup>
		                    <FormGroup>
		                        <Label for="time_signature" >Time Signature
		                        	<Input placeholder={this.props.timeSig} onChange={this.timeSigLogger}></Input>
		                        </Label>
		                    </FormGroup>
		                    <FormGroup>
		                        <Label for="bpm">Tempo
		                        	<Input placeholder={this.props.beatsPerMin} onChange={this.tempoLogger}></Input>
		                        </Label >
		                    </FormGroup >
		                    <FormGroup>
		                      <Label for="notes">Notes</Label>
		                      <Input placeholder={this.props.notesProp} onChange={this.noteLogger} type="textarea" name="notes"/>
		                    </FormGroup>
		                </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onSubmit}>Save Changes</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default EditTrackModal;