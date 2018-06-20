import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
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
          items: []
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.deleteTrack = this.deleteTrack.bind(this);
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

      base.post(`tracks/${item.key}`, {
        data: {
            track_title: `${item.track_title}`,
            time_signature: `${item.time_signature}`,
            bpm: `${item.bpm}`,
            notes: `${item.notes}` 

        },
        then(err){
            console.log("erroro");
        }
      });

    }

    deleteTrack = (e) => {

    }

    render () {
        console.log("stateee", this.state);
        if (this.state.isLoaded === true) {
            const db_tracks  = this.state.items.map((item, index ) => {
                return <Card key={item.key} className="song-cards">
                <CardBody>
                  <CardTitle name={item.key} className="card-title">{item.track_title}</CardTitle>
                  <CardText className="card-text">{item.time_signature}</CardText>
                  <CardText className="card-text">{item.bpm}</CardText>
                  <CardText className="card-text">{item.notes}</CardText>
                  <Button onClick={() => { this.handleEdit(item) }}>Edit Track</Button>
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

        } else {
            return <div>LOOOADD.....</div>
        }
            
        }



    } 


export default UserTracks;