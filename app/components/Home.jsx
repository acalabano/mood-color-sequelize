import React from 'react';
import { Link } from 'react-router';
export default function Home(){

  return (

      <div style={{textAlign:"center"}} className="home">
        <h1>Welcome to the MoodApp!</h1>
        <p>Where you can post pixels according to your mood...</p>
        <p>To your heart's content!</p>
        <br></br>
        <br></br>
        <h4 style={{fontWeight: "900"}}>Click on this potato to get started</h4>
        <Link to="/pixels">
          <img src="https://68.media.tumblr.com/6080ca499bffcd12eb97426d1f33f873/tumblr_n68hzqmxXV1tv5c8ro1_500.jpg"/>
        </Link>
      </div>
  );
}
