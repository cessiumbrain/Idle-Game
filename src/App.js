import ResourceDisplay from './ResourceDisplay';
import InstructionsModal from './InstructionsModal';
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
    currentShip: {
      totalTime: 0,
      shipName: "",
      shipActivity: "",
      shipClass: "",
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
    }
  }
  )
  const [showInstructionsModal, setShowInstructionsModal] = useState(true)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [hasSaveFile, setHasSaveFile] = useState(false)

  const frameIntervalRef = useRef(null)
  const timerIntervalRef = useRef(null)

  const frames = [ship01, ship02, ship03]

  useEffect(() => {
  //if there is saved data, load it and display a message confirming the load 
  // if not, pop up a modal with initial instructions and prompts
  const savedData = localStorage.getItem('playerData')

  if (savedData) {
    console.log(savedData)
    setPlayerData(JSON.parse(savedData))
    setMessages(prevMessages=>{
      return [...prevMessages, 'game loaded']})
    setTimeout(()=>{
      setMessages(prevMessages=>{ return prevMessages.slice(1)})
    }, 5000)
    setHasSaveFile(true)
  } else {
    setShowInstructionsModal(true)
    setHasSaveFile(false)
  }
}, [])

  function gameLoop(){
    console.log('game loop')

    //calculate new resource units
    //increment total time by 1
    //add a credit if the elapsed time is a multiple of secondsPerCredit
    calculateResources(playerData, baseRates)
    setPlayerData(prevData => ({
      ...prevData,
      currentShip: {
        ...prevData.currentShip, 
      totalTime: prevData.currentShip.totalTime + 1,
      resourceUnits: calculateResources(prevData.currentShip, baseRates),
      currentCredits: calculateCreditsEarned(prevData.currentShip.totalTime +1, prevData.currentShip.currentCredits)
      }
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
    if(playerData.currentShip.currentCredits === 0 ){
      setMessages(['ERROR: not enough credits'])

      setTimeout(()=>{
        setMessages(prevMessages=>prevMessages.slice(1))
      },3000)
    } else {

      setPlayerData(prevData => ({
        ...prevData,
        currentShip: {
          ...prevData.currentShip,
          miningLevels: {
            ...prevData.currentShip.miningLevels,
            [resource]: prevData.currentShip.miningLevels[resource] + 1
          },
          currentCredits: prevData.currentShip.currentCredits - 1
        }
      }))
    }
    

  
  }

  //caculate credit reward
  function calculateCreditsEarned(totalSeconds, currentCredits){

    if(totalSeconds % secondsPerCredit[playerData.currentShip.shipClass] === 0){
      return  currentCredits + 1
    } else {
      return currentCredits
    }
  }

  //save game
  function saveGame(){

    localStorage.setItem('playerData', JSON.stringify(playerData))
    setMessages(['game saved'])
    setTimeout(()=>{
      setMessages(prevMessages=>prevMessages.slice(1))
    }, 5000)
    setHasSaveFile(true)
  }
  

  return (
    <div className={`App ${isRunning ? 'flying' : 'stationary'}`}>
      <i className="info-icon fa-solid fa-info"></i>
      <i className="instructions-icon fa-solid fa-question" onClick={()=>setShowInstructionsModal(true)}></i>
      {showInstructionsModal && <InstructionsModal hasSaveFile={hasSaveFile} setPlayerData={setPlayerData} playerData={playerData} setShowModal={setShowInstructionsModal}></InstructionsModal>}
      <div className="credits-display">Credits: {playerData.currentShip.currentCredits}</div>
      <div className={`ship-animation`} >
        <img className={`ship ${isRunning ? 'flying' : 'stationary'}`} src={frames[shipFrameNumber] || ship01}/>
      </div>
      <div className="display">
        <div className="row-one">
          <div className="ship-name-div">
            <span>Ship Name: {playerData.shipName}</span>  
          </div>
          <div className="ship-activity-div">
            <span>Ship Activity: {playerData.shipActivity}</span>
          </div>
          <div className="ship-class-div">
            <span>Ship Class: {playerData.shipClass}</span>
          </div>
          
        </div>
        <div className="row-two">
          <span className="total-time">Total Time: </span>
          {Math.floor(playerData.currentShip.totalTime / 3600)}h {Math.floor((playerData.currentShip.totalTime % 3600) / 60)}m {playerData.currentShip.totalTime % 60}s
        </div>
        {
          Object.keys(playerData.currentShip.resourceUnits).map((resourceUnit)=>{
            console.log('resource unit', resourceUnit)
            return(
              <ResourceDisplay upgradeMiningLevel={upgradeMiningLevel}playerData={playerData} key={resourceUnit} resource={resourceUnit}></ResourceDisplay>
            )
          })
        }
        <div className="button-row">
          `<button onClick={()=>{cycleTimer()}}>{isRunning ? 'Stop' : 'Start'}</button>
          <button onClick={saveGame}>Save</button>
        </div>
      </div>
      
      
      {messages ?  <Messages messages={messages}></Messages> : null}

    </div>
  );
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



export default App;
