import React from 'react'
import './community2.css';
import Grid from '../../Grid/Grid';

export default function Community2() {
    const array = [];
    for(let i = 0; i<40;i++)
    {
        array.push(`c${i}`);
    }
  return (
    <div className ="communityContainer">
        <div id = "communityTitle">
            <span>My<br/>Community</span>
        </div>
        <div id = "communityGrid">
            <Grid array = {array} cols = {3}/>
        </div>
    </div>
  )
}



