import React from 'react'
import './dashboard2.css';
import HorizontalList from '../HorizontalList/HorizontalList';
import VerticalList from '../VerticalList/VerticalList';
import { Link } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';


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
                <div className = "recentThread">
                    Recent Threads
                    <VerticalList/>
                </div>
            </div>
            <div className="dashboardLinks">
                <div><Link to="/community">My communities</Link></div>
                <div><Link to = '/thread'>My Threads</Link></div>
                <div>Favorites</div>
            </div>
        </div>
        <Favorite/>
    </div>
  )
}

