import React from 'react';
import './Card.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function TrackCard (props) {
  return (
    <div>
      <Card className="track-card">
        <CardBody>
          <CardTitle name="song-title" className="card-title">Card title</CardTitle>
          <CardSubtitle className="card-subtitle">Card subtitle</CardSubtitle>
          <CardText className="card-desc">Notes and Lyrics Notes and Lyrics Notes and Lyrics Notes and Lyrics Notes and Lyrics Notes and Lyrics Notes and Lyrics Notes and Lyrics Notes and Lyrics Notes and Lyrics Notes and Lyrics Notes and Lyrics </CardText>
        </CardBody>
      </Card>
    </div>
  );
};