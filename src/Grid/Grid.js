import React from 'react';
import CardItem from '../Components/Item/CardItem/CardItem';
import './grid.css';

export default function Grid({array,cols}) {

    const myStyle = {
        gridTemplateColumns: `repeat(${cols}, 1fr)`
      };

  return (
    <div className = "gridContainer" style={myStyle} gridTemplate>
        {array.map((item,index)=>(
            <CardItem key={index} name={item}/>
        ))}
    </div>
  );
}