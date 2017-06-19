import React, {Component} from 'react';
import { browserHistory } from 'react-router';
console.log("GETTING INTO ADD PIXEL FIRST?")
export default class AddPixel extends React.Component {
  constructor(props) {
        super(props);
    }

  onPixelSubmit(event){
    event.preventDefault();
    console.log('EVENT TARGETSSSS', event.target)
    console.log(event.target.color)
    console.log(event.target.day)
    console.log(event.target.sketchColor)
    let pixelInfo = {
      color: event.target.color.value,
      day: event.target.day.value,
      content: event.target.content.value
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
            <input className="form-control" type="color" id="color" />
          </div>
          <div className="form-group">
            <label htmlFor="day">"Date :" </label>
            <input className="form-control" type="date" id="day" />
          </div>
          <div className="form-group">
            <label htmlFor="content">"What happened on this day :" </label>

            <textarea className="form-control" cols="40" rows="5" id="content"></textarea>
          </div>

            <button className="btn btn-default" type="submit">Add New Pixel</button>
          </form>

        </div>
        <a href="/mirror.html"> Click here for the mirror page</a>
        <br></br>



      </div>
    );
  }

}
