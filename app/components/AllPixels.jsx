import React from 'react';
import { Link } from 'react-router';
//, width: `${100/pixLength}vh`, height: `${100/pixLength}vh`

export default class AllPixels extends React.Component {
  componentDidMount() {
    this.props.loadPixels();
  }

  render() {
    let pixLength= this.props.pixels.pixels.length
    let height=100/(pixLength)
    let offset;
    if(pixLength>6){
      offset=2
      height=100/Math.ceil(pixLength/3)
    }
    else{
      offset=Math.floor(12/pixLength)
    }

    return (
      <div>
        <h1>Welcome to the Pixel Mood App</h1>
        <Link to="/pixels/add" className="btn btn-default">Add Pixel +</Link>
        <div className="container-fluid">
          <div className="row">

            {
              this.props.pixels.pixels.map(pixel => {

                return (

                    <Link to={`/pixel/${pixel.id}`} key={pixel.id} style={{textDecoration: 'none'}}>
                      <div className={`col-xs-${offset}`} id="wrapper" style={{backgroundColor: pixel.color,  height: `${height}vh`}}><p className="text">{pixel.day}</p></div>
                    </Link>

                );
              })
            }

          </div>
        </div>
      </div>
    );
  }
}
