import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody, Input} from 'reactstrap';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import './UserTracks.css';
import base from './fb_init';

class UserTracks extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          edit: false
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.deleteTrack = this.deleteTrack.bind(this);
        this.renderEditModal = this.renderEditModal.bind(this);
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

      console.log("what item", item.key);
      
      const TRACK_ID = item.key;
      
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

    deleteTrack = (e) => {

    }

    renderEditModal = () => {}


    render () {
        console.log("stateee", this.state);
        if (this.state.isLoaded === true) {
            const db_tracks  = this.state.items.map((item, index ) => {
                return 
                <Card key={item.key} className="song-cards">
                  <CardBody>
                    <Input value={item.track_title} placeholder={item.track_title} name={item.key} className="card-title">{item.track_title}</Input>
                    <Input value={item.time_signature} placeholder={item.time_signature} className="card-text">{item.time_signature}</Input>
                    <Input value={item.bpm} placeholder={item.bpm} className="card-text">{item.bpm}</Input>
                    <Input value={item.notes} placeholder={item.notes} className="card-text">{item.notes}</Input>
                    <Button value={this.state.edit} onClick={() => { this.handleEdit(item) }}>Edit Track</Button> 
                    <Button onClick={this.deleteTrack}>Delete Track</Button>
                </CardBody>
              </Card>
          })
        return (
        <div>
            <Header name="Your Saved Tracks" />
            <div className="card-container">
                {db_tracks}
            </div>
        </div>
        
        );

        } else if (this.state.edit !== false) {

              <Card key={this.props.key} className="{this.props.className}">
                <CardBody>
                  <CardTitle name={this.props.name} className="card-title">{this.props.value}</CardTitle>
                  <CardText className="card-text">{this.props.value}</CardText>
                  <CardText className="card-text">{this.props.value}</CardText>
                  <CardText className="card-text">{this.props.value}</CardText>
                  <Button value={this.state.edit} >Edit Track</Button>
                  <Button onClick={this.deleteTrack}>Delete Track</Button>
                </CardBody>
              </Card>
        } else {
            return (
            <div>
              <Header name="Your Saved Tracks" />
              <div>LOOOADD.....</div>
            </div>
            );
        }
            
        }



    } 


export default UserTracks;