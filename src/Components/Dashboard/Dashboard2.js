import React from 'react'
import './dashboard2.css';
import HorizontalList from '../HorizontalList/HorizontalList';


export default function Dashboard2() {
  return (
    <div>
        <div className="dashboardContainer">
            <div className="dashboardTitle">Dev<br/>Forum</div>
            <div className="dashboardRecents">
                <div>
                    Recent Communities
                    <HorizontalList/>
                </div>
                
                <div>
                    Recent Threads
                    <HorizontalList/>
                </div>
            </div>
            <div className="dashboardLinks">
                <div>My communities</div>
                <div>My Threads</div>
                <div>Favorites</div>
            </div>
        </div>
    </div>
  )
}

