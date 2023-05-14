import React from 'react';
import './community.css';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

function It(props)
{
  return(
    <Card id = "cardItem">
        {/* <img src = {} id="cardImage"/> */}
        <PeopleRoundedIcon id = "cardImage" color="primary"/>
        <p>{props.nameOfCommunity}</p>
    </Card>
  );
}

export default function Community() {
  return (
    <div className = "communityContainer">
      <div className ="communityTitle">
        <p>My Communities</p>
      </div>
      <div className = 'gridContainer'>
        <GetGrid/>
      </div>
    </div>
  );
}

function GetGrid()
{
  return(
      <Grid container spacing = {1} className='df'>
        <Grid item xs={6} md={4} lg={3}>
          <It nameOfCommunity="hi"/>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <It/>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <It/>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <It/>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <It/>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <It/>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <It/>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <It/>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <It/>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <It/>
        </Grid>
      </Grid>
  );
}


