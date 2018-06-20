import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-rangeslider';
import './BPM.css';

let bpmData;

export default class BPMslider extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      horizontal: 10
    }
  }

  handleChangeHorizontal = value => {
    this.setState({
      horizontal: value
    })
  bpmData = this.state; 
  console.log("bpm", bpmData)
  };

  render () {
    const { horizontal } = this.state
    const horizontalLabels = {
      0: 'Larghissimo',
      20: 'Grave',
      40: 'Lento',
      60: 'Larghetto',
      66: 'Adagio',
      70: 'Adagietto',
      76: 'Andante',
      108: 'Moderato',
      112: 'Allegro moderato',
      120: 'Allegro',
      168: 'Presto',
      200: 'Prestissimo'
    }


    const formatBPM = value => value + ' BPM'

    return (
      <div className='slider custom-labels'>
        <Slider
          min={0}
          max={300}
          value={horizontal}
          labels={horizontalLabels}
          format={formatBPM}
          handleLabel={horizontal}
          onChange={this.handleChangeHorizontal}
        />
        <div className='value'>{formatBPM(horizontal)}</div>
        <hr />
      </div>
    )
  }
}


