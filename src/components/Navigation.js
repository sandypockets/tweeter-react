import React from 'react';
import './Navigation.css';

export const Navigation = () => {

  return(
    <nav className="top-nav">
      <span id="logo-type">tweeter</span>
      <span id="write-new-tweet" className="new-tweet">Write a new tweet</span>
    </nav>
  )
}