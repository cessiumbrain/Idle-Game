import './App.css';
import { useEffect, useState, useRef } from 'react';
import ship01 from './assets/ship 02/_0000_Layer-1.png'
import ship02 from './assets/ship 02/_0001_Layer-2.png'
import ship03 from './assets/ship 02/_0002_Layer-3.png'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [totalTime, setTotalTime] = useState()
  const [shipFrameNumber, setShipFrameNumber] = useState(ship01)
  const [playerData, setPlayerData] = useState({
    totalTime: 0,
    resourceUnits: {
      iron: 0,
      bronze: 0,
      silver: 0,
      gold: 0,
    },
    miningLevels: {
      iron: 1,
      bronze: 1,
      silver: 1,
      gold: 1
    },
    credits: 0
  })

  const frameIntervalRef = useRef(null)
  const timerIntervalRef = useRef(null)

  const frames = [ship01, ship02, ship03]

  function updateTimer(){
    console.log('update timer')

    setPlayerData(prevData => ({
      ...prevData,
      totalTime: prevData.totalTime + 1
    }))
    
  }

  function cycleTimer(){
    console.log('cycle timer')

    if(!isRunning){

      setIsRunning(true)

      //timer interval
      timerIntervalRef.current = setInterval(updateTimer, 1000)

      //frame change interval
      frameIntervalRef.current = setInterval(()=>{
        const randomNum = Math.floor(Math.random()*3)
        setShipFrameNumber(randomNum)
      }, 4000)

    } else {
      console.log('stopping timer')
      setIsRunning(false)

      clearInterval(frameIntervalRef.current);
      frameIntervalRef.current = null;
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null

      setShipFrameNumber(0)
    }
  }
  


  
  return (
    <div className={`App ${isRunning ? 'flying' : 'stationary'}`}>
      <div className={`ship-animation`} >
        <img className={`ship ${isRunning ? 'flying' : 'stationary'}`} src={frames[shipFrameNumber] || ship01}/>
              </div>
      <div className="display">
        <div className="total-time">
          <span>Total Time: </span>
          <span className="hours">{}</span>
          <span className="minutes">{}</span>
          <span className="seconds">{playerData.totalTime}</span>
        </div>
        <div className="resources">
          <div calssName="iron">
            <span>Iron: {playerData.resourceUnits.iron} </span>

          </div>
        </div>
      </div>
      <button onClick={()=>{cycleTimer()}}>{isRunning ? 'Stop' : 'Start'}</button>
      <button>Save</button>


    </div>
  );
}

export default App;
