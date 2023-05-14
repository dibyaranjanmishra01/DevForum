import './app.scss';
import Dashboard2 from './Components/Dashboard/Dashboard2.js';
import Community2 from './Components/Community/Community2';
import Thread from './Components/Thread/Thread';
import ErrorPage from './Components/ErrorPage'
import { Route,Routes } from 'react-router-dom';
import AppbarLayout from './Components/AppbarLayout/AppbarLayout'
import CommunityItem from './Components/CommunityId/CommunityItem';


function App() {
  return (
    <div id="test">
      <div className="container">
        <Routes>
          <Route path = '/' element = {<Dashboard2/>} />
          <Route element = {<AppbarLayout/>}>
            <Route path = '/community' element = {<Community2/>} />
            <Route path = '/community/:id' element = {<CommunityItem/>}/>
            <Route path = '/thread' element = {<Thread/>} />
          </Route>
          <Route path = '*' element ={<ErrorPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
