import React from 'react';
import './dashboard.css';

const windowSize = window.availWidth;
console.log(windowSize);

export default function Dashboard() {
  return (
    <div className = "dashboardContainer">
        <div className = "container1">
            <div className = "title"><p>Developer<br/>Forum</p></div>
            <Recents/>
        </div>
        <Links/>
    </div>
  )
}

function Links() {
    return(
        <>
        <div className = "linkContainer">
            <ul className = "link">
                    <li><a href = "#page2">My Communities</a></li>
                    <li><a href = "#page3">My Threads</a></li>
                    <li><a href = "#page4">Favorites</a></li>
                </ul>
            </div>
        </>);
}

function Recents()
{
    return(
    <ul className = "recents">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>            
    </ul>);
}
