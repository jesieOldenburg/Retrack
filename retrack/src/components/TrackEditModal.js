import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import base from './fb_init';
import './TrackEditModal.css';

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
                <Button outline className="edit-button" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal  centered={true} autoFocus={true} value={this.props.fb_key} isOpen={this.state.modal} toggle={this.toggle} className="modal">
                    <ModalHeader toggle={this.toggle}>{}</ModalHeader>
                    <ModalBody className="modal-body" >
                    	<Form onSubmit={this.onSubmit} >
		                	<FormGroup>
		                		<Label className="modal-label" for="track_title" className="track-title-label">Track Title
		                            <Input className="modal-input" placeholder={this.props.trackName} onChange={this.titleLogger}></Input>
		                        </Label>
		                    </FormGroup>
		                    <FormGroup>
		                        <Label className="modal-label" for="time_signature" >Time Signature
		                        	<Input className="modal-input" placeholder={this.props.timeSig} onChange={this.timeSigLogger}></Input>
		                        </Label>
		                    </FormGroup>
		                    <FormGroup>
		                        <Label className="modal-label" for="bpm">Tempo
		                        	<Input className="modal-input" placeholder={this.props.beatsPerMin} onChange={this.tempoLogger}></Input>
		                        </Label >
		                    </FormGroup >
		                    <FormGroup>
		                      <Label className="modal-label" for="notes">Notes</Label>
		                      <Input className="modal-input" placeholder={this.props.notesProp} onChange={this.noteLogger} type="textarea" name="notes"/>
		                    </FormGroup>
		                </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button outline className="modal-button" color="primary" onClick={this.onSubmit}>Save Changes</Button>{' '}
                        <Button outline className="modal-button" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default EditTrackModal;
