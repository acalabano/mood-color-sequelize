import React from 'react';
import { browserHistory } from 'react-router';

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
      day: event.target.day.value
    };
    this.props.updatePixel(updatedPixelInfo);
  }

  render() {
    return (
      <div>
        {console.log('PROPS IN SINGLE PIXEL', this.props)}
        <h1>{this.props.pixels.pixelColor} Pixel</h1>
        <h3>Answers:</h3>
        <table className="table">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>

        </tbody>
        </table>
        <hr />
        <h3>Update Pixel Information:</h3>
        <div className="row col-lg-4">
          <form action={`/api/pixel/${this.props.pixels.id}`} method="put" onSubmit={this.onUpdatePixelSubmit}>
            <label htmlFor="color" className="mr-sm-2">Pixel Name:</label>
            <div className="form-group">
              <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" id="color" />
            </div>
            <label htmlFor="day" className="mr-sm-2">"Date: "</label>
            <div className="form-group">
              <input className="form-control" type="text" id="day" />
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
