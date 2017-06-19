import React from 'react';
import { browserHistory } from 'react-router';
import tinycolor from "tinycolor2"

export default class SinglePixel extends React.Component {
  componentDidMount() {
  this.props.loadSinglePixel(this.props.params.id);
  this.removePixelCallback = this.removePixelCallback.bind(this);
  this.onUpdatePixelSubmit = this.onUpdatePixelSubmit.bind(this);

  }

  removePixelCallback(event){
    const removePixel = this.props.removePixel;
    event.stopPropagation();
    removePixel(this.props.pixels.pixelId);
    browserHistory.push('/pixels');
  }

  onUpdatePixelSubmit(event) {
    event.preventDefault();
    let updatedPixelInfo = {
      id: this.props.params.id,
      color: event.target.color.value,
      day: event.target.day.value,
      content: event.target.content.value
    };
    console.log("PIXEL INFO UPDATED", updatedPixelInfo)
    this.props.updatePixel(updatedPixelInfo);
  }

  render() {

    return (

      <div>
        {console.log('PROPS IN SINGLE PIXEL', this.props)}

        <h1>{this.props.pixels.pixelDay} Pixel</h1>
        <div id="wrapper" style={{backgroundColor: this.props.pixels.pixelColor,  width: `${10}vh`, height: `${10}vh`}}><p className="text">{this.props.pixels.pixelColor}</p></div>
        <h3>Entry: </h3>
        <p>{this.props.pixels.pixelContent}</p>
        <hr />
        <h3>Update Pixel Information:</h3>
        <div className="row col-lg-4">
          <form action={`/api/pixel/${this.props.pixels.id}`} method="put" onSubmit={this.onUpdatePixelSubmit}>
            <label htmlFor="color" className="mr-sm-2">Pixel Color:</label>
            <div className="form-group">
              <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="color" id="color" />
            </div>
            <a href="/mirror.html"> Click here for the mirror page to check your mood!</a>
            <label htmlFor="day" className="mr-sm-2">Day: </label>
            <div className="form-group">
              <input className="form-control" type="date" id="day" />
            </div>
            <label htmlFor="content" className="mr-sm-2">Content: </label>
            <div className="form-group">
              <textarea className="form-control" cols="40" rows="5" id="content"></textarea>
            </div>
            <button className="btn btn-default" type="submit">Update</button>
          </form>
        </div>
        <div className="row col-lg-12">
        <hr />
        <button className="btn btn-default" name="deletePixel" onClick={this.removePixelCallback}>Delete Pixel</button>
        </div>
      </div>
    );
  }
}
