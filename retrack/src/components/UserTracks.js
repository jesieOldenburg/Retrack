import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import './UserTracks.css';
import base from './fb_init';

let trackData;
let db_tracks;

class UserTracks extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount () {
        base.fetch('tracks', {
        context: this,
        asArray: true,
        then(data){
            this.setState({
                isLoaded: true,
                items: data.items,
            });
          console.log("This is your data", data);
        },

      });
     }//Component Did Mount Closing Bracket

    handleEdit = (e) => {
        
    }

    render () {
        const { error, isLoaded, items } = this.state;
        return (
        <div>
            <Header name="Your Saved Tracks" />
            <div>
            {items.map((index, item) => {
               <p>{item.bpm}</p> 
            })}
            </div>
        </div>
    );
            
        }



    }


export default UserTracks;