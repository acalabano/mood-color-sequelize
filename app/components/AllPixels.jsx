import React from 'react';
import { Link } from 'react-router';

export default class AllPixels extends React.Component {
  componentDidMount() {
    this.props.loadPixels();
  }

  render() {
    return (
      <div>
        <h1>All Interplanetary Pixels</h1>
        <div>
          <div className="row">
            <div className="row col-lg-1 col-centered">
              {
                this.props.pixels.pixels.map(pixel => {
                  return (
                  <Link to={`/pixel/${pixel.id}`} key={pixel.id} style={{textDecoration: 'none'}}>
                    <div className="marker" id="wrapper" style={{backgroundColor: pixel.color}}><p className="text">{pixel.day}</p></div>
                  </Link>);
                })
              }
            </div>
          </div>
        </div>
        <Link to="/pixels/add" className="btn btn-default">Add Pixel +</Link>
      </div>
    );
  }
}
