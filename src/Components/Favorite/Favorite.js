import React from 'react';
import './favorite.css';
import { useState } from 'react';
import VerticalList from '../VerticalList/VerticalList';
import Grid from '../../Grid/Grid';

export default function Favorite() {

  const color = ['aqua','white'];

  let [currentActive,setCurrentActive] = useState(0);

  console.log(currentActive);

  const changeActiveToButton1 = function (){
    if(currentActive == 0) return;
    currentActive = (++currentActive)%2;
    setCurrentActive(currentActive);
  }

  const changeActivetoButton2 = function (){
    if(currentActive == 1) return;
    currentActive = (++currentActive)%2;
    setCurrentActive(currentActive);
  }

  const FavSlides = function (){
    if(currentActive == 0) return <FavCommunity/>
    else return <FavThread/>
  }

  return (
    <div className = "favoriteContainer">
        <div id = "favoriteTitle">
          <span>Favorite</span>
          <button 
            onClick = {changeActiveToButton1}
            style={
              {
                width:'100%',
                fontSize :'0.67em',
                backgroundColor: (currentActive == 0)?color[1]:color[0],
              }
            }>
            Communities
          </button>
          <button 
            onClick = {changeActivetoButton2}
            style={
              {
                width:'100%',
                fontSize :'0.67em',
                backgroundColor: (currentActive == 1)?color[1]:color[0],
              }
            }>
            Thread
          </button>
        </div>
        <div id = "favoriteGrid">
          <FavSlides/>
        </div>
    </div>
    
  )
}

function FavCommunity()
{
  const array = [];
    for(let i = 0; i<40;i++)
    {
        array.push(`c${i}`);
    }
  return (
    <Grid array = {array} cols = {2}/>
  );
}

function FavThread()
{
  return (
    <VerticalList/>
  );
}
