import './App.css';
import { useEffect, useState, useRef } from 'react';
import ship01 from './assets/ship 02/_0000_Layer-1.png'
import ship02 from './assets/ship 02/_0001_Layer-2.png'
import ship03 from './assets/ship 02/_0002_Layer-3.png'
import {calculateResources, baseRates, secondsPerCredit} from './config'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [shipFrameNumber, setShipFrameNumber] = useState(ship01)
  const [error, setError] = useState(null)
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

    currentCredits: 0

  })

  const frameIntervalRef = useRef(null)
  const timerIntervalRef = useRef(null)

  const frames = [ship01, ship02, ship03]


  function gameLoop(){
    console.log('game loop')

    //calculate new resource units
    //increment total time by 1
    //add a credit if the elapsed time is a multiple secondsPerCredit
    calculateResources(playerData, baseRates)
    setPlayerData(prevData => ({
      ...prevData,
      totalTime: prevData.totalTime + 1,
      resourceUnits: calculateResources(prevData, baseRates),
      currentCredits: calculateCreditsEarned(prevData.totalTime +1, prevData.currentCredits)
    }))
    
  }

  //turn the timer off or on and call all functions required to start or stop the game loop
  function cycleTimer(){
    console.log('cycle timer')

    //if the timer is stopped, start it...
    if(!isRunning){
      //change running state
      setIsRunning(true)

      //start timer interval
      timerIntervalRef.current = setInterval(gameLoop, 1000)

      //start frame change interval
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


  //click listener for upgrading the mining level of a resource
  function upgradeMiningLevel(resource){
    if(playerData.currentCredits === 0 ){
      setError('ERROR: not enough credits')
      setTimeout(()=>{
        setError(null)
      },3000)
    }
    console.log('upgrade mining level', resource)
    setPlayerData(prevData=>({
      ...prevData,
      miningLevels: {
        ...prevData.miningLevels,
        [resource]: prevData.miningLevels[resource] + 1
      },
      currentCredits: prevData.currentCredits -1

    }))

  
  }

  //caculate credit reward
  function calculateCreditsEarned(totalSeconds, currentCredits){
    if(totalSeconds % secondsPerCredit === 0){
      return  currentCredits + 1
    } else {
      return currentCredits
    }
  }
  


  
  return (
    <div className={`App ${isRunning ? 'flying' : 'stationary'}`}>
      <div class="credits-display">Credits: {playerData.currentCredits}</div>
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
        {
          Object.keys(playerData.resourceUnits).map((resourceUnit)=>{
            return(
              <ResourceDisplay upgradeMiningLevel={upgradeMiningLevel}playerData={playerData} key={resourceUnit} resource={resourceUnit}></ResourceDisplay>
            )
          })
        }
      </div>
      <button onClick={()=>{cycleTimer()}}>{isRunning ? 'Stop' : 'Start'}</button>
      <button>Save</button>
      <div className="error-display">{error}</div>


    </div>
  );
}

function ResourceDisplay(props){

  return(
    <div className={`resource-display ${props.resource}`}  >
      <span className="resource-name">{props.resource} : {Math.round(props.playerData.resourceUnits[props.resource])}</span>
      <div className="mining-level">mining level {props.playerData.miningLevels[props.resource]}
        <button onClick={()=>{props.upgradeMiningLevel(props.resource)}} className="upgrade-button">+</button>
      </div>
    </div>
  )
}

export default App;
