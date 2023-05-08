import './app.scss';
import Dashboard2 from './Components/Dashboard/Dashboard2.js';
import Community2 from './Components/Community/Community2.js';
import Thread from './Components/Thread/Thread';


function App() {
  return (
    <div id="test">
      <div className="container">
        <Dashboard2/>
        <Community2/>
        <Thread/>
      </div>
    </div>
  );
}

export default App;
