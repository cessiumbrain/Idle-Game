import './App.css';
import { useEffect, useState } from 'react';
import ship01 from './assets/ship 02/_0000_Layer-1.png'
import ship02 from './assets/ship 02/_0001_Layer-2.png'
import ship03 from './assets/ship 02/_0002_Layer-3.png'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [totalTime, setTotalTime] = useState()
  const [shipFrameNumber, setShipFrameNumber] = useState(ship01)

  const frames = [ship01, ship02, ship03]

  function cycleTimer(){
    console.log('cycle timer')
  }
  


  
  return (
    <div className={`App ${isRunning ? 'flying' : 'stationary'}`}>
      <div className={`ship-animation`} >
        <img className={`ship ${isRunning ? 'flying' : 'stationary'}`} src={frames[shipFrameNumber] || ship01}/>
              </div>
      <div className="display">
        <div className="total-time"></div>
      </div>
      <button onClick={()=>setIsRunning(!isRunning)}>{isRunning ? 'Stop' : 'Start'}</button>
      <button>Save</button>


    </div>
  );
}

export default App;
