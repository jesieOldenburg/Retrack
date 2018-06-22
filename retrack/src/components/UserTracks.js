import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody, Input} from 'reactstrap';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import './UserTracks.css';
import base from './fb_init';
import TrackEditModal from './TrackEditModal';
import NewTrack from './NewTrack';

class UserTracks extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          edit: false,
          back: false
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.deleteTrack = this.deleteTrack.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount () {
        base.fetch('tracks', {
        context: this,
        asArray: true,
        then(data){
          console.log("This is your data", data);
            this.setState({
                isLoaded: true,
                items: data,
            });

        },

      });
     }//Component Did Mount Closing Bracket

    handleEdit = (item) => {
      this.setState({edit: true});
      base.post(`tracks/${item.key}`, {
        data: {
            track_title: `${item.track_title}`,
            time_signature: `${item.time_signature}`,
            bpm: `${item.bpm}`,
            notes: `${item.notes}` 
        },
        then(err){
            console.log("erroro");
        },
      });
    }

    deleteTrack = (item) => {
    	console.log("delete key?", item.key);
    	base.remove(`tracks/${item.key}`, function(err){
    if(!err){
    	console.log("delete err");
    }
  });
    }

    goBack = (e) => {

    	this.setState({
    		back: true
    	});

    	// window.location.reload();
    }


    render () {
        console.log("stateee", this.state);
        if (this.state.isLoaded === true && this.state.edit === false) {
            
            const db_tracks  = this.state.items.map((item, index) => {
                return <Card key={item.key} className="song-cards">
                  <CardBody>
                    <CardTitle value={item.track_title}  name={item.key} className="card-title">{item.track_title}</CardTitle>
                    <CardText value={item.time_signature} className="card-text">{item.time_signature}</CardText>
                    <CardText value={item.bpm} className="card-text">{item.bpm}</CardText>
                    <CardText value={item.notes} className="card-text">{item.notes}</CardText>
                    <TrackEditModal className="edit-button" onClick={() => { this.handleEdit(item) }} fb_key={item.key} timeSig={item.time_signature} beatsPerMin={item.bpm} notesProp={item.notes} trackName={item.track_title}  buttonLabel="Edit Track"/>
                    <Button deleteKey={item.key} className="delete-button" onClick={() => { this.deleteTrack(item) }}>Delete Track</Button>
                </CardBody>
              </Card>
          }) 
        return (
        <div>
            <Header name="Your Saved Tracks" />
            <div className="card-container">
                {db_tracks}
            </div>
            <div className="return-button-container" >
            	<Button value={this.state.back} onClick={this.goBack} className="return-button">Go Back</Button>
            </div>
        </div>
        
        );
      } else if (this.state.edit === true && this.state.loaded === true) {
          return <TrackEditModal />
      } else if (this.state.back === true) {
      		return (
      			<div>
	      			<NewTrack />
	      		</div>)
      } else {
            return (
            <div>
              <Header name="Your Saved Tracks" />
              <div>LOOOADD.....</div>
            </div>
            );

        } 

         
            console.log('Edit State?', this.state.edit);
        }
}

export default UserTracks;