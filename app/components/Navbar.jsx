import React from 'react';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
      <ul className="nav navbar-nav">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/pixels">PIXELS</Link></li>
        <li><a href="/mirror.html">MIRROR</a></li>
      </ul>
      </div>
    </nav>
    </div>
  );
}
