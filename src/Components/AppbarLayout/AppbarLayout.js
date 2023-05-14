import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar';
import { Outlet } from 'react-router-dom';
import './appbarlayout.css';

export default function AppbarLayout() {
 return (
    <div className = 'appbarlayoutcontainer'>
        <ResponsiveAppBar/>
        <Outlet/>
    </div>
  )
}
