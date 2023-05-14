import React from 'react';
import CardItem from '../Components/Item/CardItem/CardItem';
import './grid.css';
import { Link } from 'react-router-dom';

export default function Grid({array,cols}) {

    const myStyle = {
        gridTemplateColumns: `repeat(${cols}, 1fr)`
      };

  return (
    <div className = "gridContainer" style={myStyle} gridTemplate>
        {array.map((item,index)=>(
          <CardItem key={index} link ={'/community/'+index} name={item} onClick={()=>{}} />           
        ))}
    </div>
  );
}