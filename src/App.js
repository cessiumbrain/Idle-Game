import './App.css';
import { useEffect, useState, useRef } from 'react';
import ship01 from './assets/ship 02/_0000_Layer-1.png'
import ship02 from './assets/ship 02/_0001_Layer-2.png'
import ship03 from './assets/ship 02/_0002_Layer-3.png'
import {calculateResources, baseRates, secondsPerCredit} from './config'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [shipFrameNumber, setShipFrameNumber] = useState(ship01)
  const [messages, setMessages] = useState([])
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
  const [showModal, setShowModal] = useState(true)

  const frameIntervalRef = useRef(null)
  const timerIntervalRef = useRef(null)

  const frames = [ship01, ship02, ship03]

  useEffect(() => {
  const savedData = localStorage.getItem('playerData')
  // if (savedData) {
  //   setPlayerData(JSON.parse(savedData))
  //   setMessages(prevMessages=>{
  //     console.log(prevMessages)
  //     return [...prevMessages, 'game loaded']})
  //   setTimeout(()=>{
  //     setMessages(prevMessages=>{ return prevMessages.slice(1)})
  //   }, 5000)
  // } else {

  // }
}, [])

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
      setMessages(['ERROR: not enough credits'])

      setTimeout(()=>{
        setMessages(prevMessages=>prevMessages.slice(1))
      },3000)
    } else {

    setPlayerData(prevData=>({
      ...prevData,
      miningLevels: {
        ...prevData.miningLevels,
        [resource]: prevData.miningLevels[resource] + 1
      },
      currentCredits: prevData.currentCredits -1

    }))
    }
    

  
  }

  //caculate credit reward
  function calculateCreditsEarned(totalSeconds, currentCredits){
    if(totalSeconds % secondsPerCredit === 0){
      return  currentCredits + 1
    } else {
      return currentCredits
    }
  }

  //save game
  function saveGame(){
    console.log('save game')
    localStorage.setItem('playerData', JSON.stringify(playerData))
    setMessages(['game saved'])
    setTimeout(()=>{
      setMessages(prevMessages=>prevMessages.slice(1))
    }, 5000)
  }
  


  
  return (
    <div className={`App ${isRunning ? 'flying' : 'stationary'}`}>
      <i class="info-icon fa-solid fa-info"></i>
      <i class="instructions-icon fa-solid fa-question" onClick={()=>setShowModal(true)}></i>
      {showModal && <Modal setShowModal={setShowModal}></Modal>}
      <div class="credits-display">Credits: {playerData.currentCredits}</div>
      <div className={`ship-animation`} >
        <img className={`ship ${isRunning ? 'flying' : 'stationary'}`} src={frames[shipFrameNumber] || ship01}/>
      </div>
      <div className="display">
        <div className="total-time">
          <span>Total Time: </span>
          {Math.floor(playerData.totalTime / 3600)}h {Math.floor((playerData.totalTime % 3600) / 60)}m {playerData.totalTime % 60}s
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
      <button onClick={saveGame}>Save</button>
      {messages ?  <Messages messages={messages}></Messages> : null}

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

function Messages(props){

  return(
    <div className="message-display">
      {props.messages.map((message, index)=>{
      return(
        <div className="message" key={index}>
          {message}
        </div>
      )
    })}
    </div>
    
  )
}

function Modal(props){
  return(
    <div className="info-modal">

      Idle Game is designed to reward you for doing things that aren't as inherently rewarding as they ought to be.  When doing something good for you, start the timer.  Every {(secondsPerCredit /60).toFixed(2)} minutes, you'll earn one credit to upgrade the rate at which your ship gathers a certain resource.
      <button onClick={()=>{props.setShowModal(false)}}>close</button>
      </div>
  )
}

export default App;
