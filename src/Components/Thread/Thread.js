import React from 'react';
import './thread.css';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

export default function Thread() {
  return (
    <div className='threadContainer'>
      Thread
      <Button variant="contained" id="routeButton" onClick={()=>{alert("hi")}}>
        click me
      </Button>
    </div>
  )
}



