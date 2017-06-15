import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import SketchExample from './SketchExample';

export default class AddPixel extends React.Component {

  onPixelSubmit(event){
    event.preventDefault();
    console.log('EVENT TARGETSSSS', event.target)
    console.log(event.target.color)
    console.log(event.target.day)
    console.log(event.target.sketchColor)
    let pixelInfo = {
      color: event.target.color.value,
      day: event.target.day.value
    };
    this.props.addPixel(pixelInfo);
    browserHistory.push('/pixels');
  }

  render(){
    this.onPixelSubmit = this.onPixelSubmit.bind(this);
    return (
      <div>
      <h1>Add a Pixel</h1>
        <div className="row col-lg-4">
          <form action={`/api/pixels`} method="post" onSubmit={this.onPixelSubmit}>
          <div className="form-group">
            <label htmlFor="color">Pixel Color:</label>
            <input className="form-control" type="text" id="color" />
          </div>
          <div className="form-group">
            <label htmlFor="day">"Date :" </label>
            <input className="form-control" type="text" id="day" />
          </div>
            <SketchExample htmlFor="sketchColor"/>
            <button className="btn btn-default" type="submit">Add New Pixel</button>
          </form>
        </div>

      </div>
    );
  }
}
