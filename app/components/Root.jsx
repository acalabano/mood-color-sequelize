import React from 'react';
import Navbar from './Navbar';

export default function Root({children}){
  return (
    <div>
      <Navbar />
      { children }
    </div>
  );
}
