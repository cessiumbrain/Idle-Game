import ResourceDisplay from './ResourceDisplay';
import InstructionsModal from './InstructionsModal';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import FleetModal from './FleetModal';
import CreateShipModal from './CreateShipModal';
import SolarSystemModal from './SolarSystemModal';
import InfoModal from './InfoModal'
import { shipClasses } from './config';
import ship from './assets/ship_1/_0000_Layer-1.png'
import launch from './assets/sounds/launch.mp3'
import stopAudio from './assets/sounds/stop.wav'


import {calculateResources, baseRates, secondsPerCredit} from './config'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [shipFrameNumber, setShipFrameNumber] = useState(0)
  const [messages, setMessages] = useState([])
  const [playerData, setPlayerData] = useState(
    {
    fleet:[],
    events: []
  }
  )
  const [showInstructionsModal, setShowInstructionsModal] = useState(false)
  const [showFleetModal, setShowFleetModal] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [showCreateShipModal, setShowCreateShipModal] = useState(false)
  const [hasSaveFile, setHasSaveFile] = useState(false)
  const [currentShipID, setCurrentShipID] = useState(null)
  const [shipAnimation, setShipAnimation] = useState('')
  const [showSolarSystemModal, setShowSolarSystemModal] = useState(false)

  const frameIntervalRef = useRef(null)
  const timerIntervalRef = useRef(null)

  const currentShip = playerData.fleet.find(ship=>ship.shipID === currentShipID) || null
  const frames = shipClasses.find(cls=>cls.name === currentShip?.shipClass)?.sprites || [ship]


//on load
  useEffect(() => {
  //if there is saved data, load it and display a message confirming the load 
  // if not, pop up a modal with initial instructions and prompts
  const savedData = localStorage.getItem('playerData')

  if (savedData) {
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
    //calculate new resource units
    //increment total time by 1
    //add a credit if the elapsed time is a multiple of secondsPerCredit
    calculateResources(playerData, baseRates)

    
    setPlayerData(prevData => ({
      ...prevData,
      fleet: prevData.fleet.map(ship=>{
      return  ship.shipID === currentShipID ? {
          ...ship,
          totalTime: ship.totalTime + 1,
          resourceUnits: calculateResources(ship, baseRates),
          currentCredits: calculateCreditsEarned(ship, secondsPerCredit) 
        } : ship
      })
      
    }))
    
  }

  //turn the timer off or on and call all functions required to start or stop the game loop
  function cycleTimer(){
    //if the timer is stopped...
    if(!isRunning){
      //play launch sound
      try {
      const launchSound = new Audio(launch)
      launchSound.play()
      } catch (error){
        throw new Error( `failed to load launch sound ${error}`)
      }
      
      //change running state
      setIsRunning(true)

      //start timer interval
      timerIntervalRef.current = setInterval(gameLoop, 1000)

      //start frame change interval
      frameIntervalRef.current = setInterval(()=>{
        const randomNum = Math.floor(Math.random()*3)
        setShipFrameNumber(randomNum)
      }, 4000)
    } 
    //if the timer is running...
    else {

      //play stop sound
      try {
        const stopSound = new Audio(stopAudio)
        stopSound.play()
      } catch(error){
        throw new Error(`failed to load stop sound ${error}`)
      }
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
    const currentShip = playerData.fleet.find(ship=>ship.shipID === currentShipID)
    if(currentShip.currentCredits === 0 ){
      setMessages(['ERROR: not enough credits'])

      setTimeout(()=>{
        setMessages(prevMessages=>prevMessages.slice(1))
      },3000)
    } else {

      setPlayerData(prevData => ({
        ...prevData,
        fleet: prevData.fleet.map(ship => {
          return ship.shipID === currentShipID ? {
            ...ship,
            miningLevels: {
              ...ship.miningLevels,
              [resource]: ship.miningLevels[resource] + 1
            },
            currentCredits: ship.currentCredits - 1
          } : ship
        })
      }))
    }
  }

  //caculate credit reward
  function calculateCreditsEarned(currentShip, secondsPerCredit){
    //if you earned a credit
    if(currentShip.totalTime % secondsPerCredit[currentShip.shipClass] === 0){
      return  currentShip.currentCredits + 1
    } else {
      return currentShip.currentCredits
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

  //create new ship
  function createNewShip(shipName, shipActivity, shipClass){
    //stop the timer if it's running
    if(isRunning){
      cycleTimer()
    }
    //create a new ship object and add it to the fleet array
    const newShip = {
      shipName: shipName,
      shipActivity: shipActivity,
      shipClass: shipClass,
      shipID: crypto.randomUUID(),
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
    }

    setPlayerData(prevData=>({
      ...prevData,
      fleet: [...prevData.fleet, newShip]
    }))
    changeShip(newShip.shipID)

  }
  
  function changeShip(shipID){

    setShipAnimation('fly-out')
    //flyout animation lasts three seconds
    setTimeout(()=>{
      setShipAnimation('fly-in')
      setCurrentShipID(shipID)
    }, 3000)
    //setTimeout to reset animation state after fly-in
    setTimeout(()=>{
      setShipAnimation('')
    },6000)

  }
  
  return (
    <div className={`App ${isRunning ? 'flying' : 'stationary'}`}>
      <i className="info-icon fa-solid fa-info" onClick={()=>setShowInfoModal(true)}></i>
      <i className="instructions-icon fa-solid fa-question" onClick={()=>setShowInstructionsModal(true)}></i>
      <i className="add-ship-icon fa-solid fa-plus" onClick={()=>{setShowCreateShipModal(true)}}></i>
      {showInfoModal && <InfoModal setShowInfoModal={setShowInfoModal}setShowSolarSystemModal={setShowSolarSystemModal}setShowFleetModal={setShowFleetModal}></InfoModal>}

      {showSolarSystemModal && <SolarSystemModal totalTime={currentShip.totalTime} currentShip={currentShip} setShowSolarSystemModal={setShowSolarSystemModal}></SolarSystemModal>}

      {showInstructionsModal && <InstructionsModal currentShip={currentShip} changeShip={changeShip} hasSaveFile={hasSaveFile} setPlayerData={setPlayerData} playerData={playerData} setShowModal={setShowInstructionsModal} ></InstructionsModal>}

      {showFleetModal && <FleetModal isRunning={isRunning} cycleTimer={cycleTimer} setCurrentShipID={setCurrentShipID} currentShipID={currentShipID} fleet={playerData.fleet} setShowFleetModal={setShowFleetModal}></FleetModal>}

      {showCreateShipModal && <CreateShipModal createNewShip={createNewShip}setShowCreateShipModal={setShowCreateShipModal}></CreateShipModal>}

      <div className="credits-display">Credits: {currentShip ? currentShip.currentCredits :''}</div>
      <div className={`ship-animation`} >
        <img className={`ship ${isRunning ? 'flying' : 'stationary'} ${shipAnimation}`} src={frames[shipFrameNumber] || ship}/>
      </div>
      { currentShip ?
      <div className="display">
        <div className="row-one">
          <div className="ship-name-div">
            <span>Ship Name: {currentShip.shipName}</span>  
          </div>
          <div className="ship-activity-div">
            <span>Ship Activity: {currentShip.shipActivity}</span>
          </div>
          <div className="ship-class-div">
            <span>Ship Class: {currentShip.shipClass}</span>
          </div>
          
        </div>
        <div className="row-two">
          <span className="total-time">Total Time: </span>
          {Math.floor(currentShip.totalTime / 3600)}h {Math.floor((currentShip.totalTime % 3600) / 60)}m {currentShip.totalTime % 60}s
        </div>
        {
          currentShip ? Object.keys(currentShip.resourceUnits).map((resourceUnit)=>{

            return(
              <ResourceDisplay upgradeMiningLevel={upgradeMiningLevel} currentShip={currentShip} playerData={playerData} key={resourceUnit} resource={resourceUnit}></ResourceDisplay>
            )
          }) : null
        }
        <div className="button-row">
          `<button onClick={()=>{cycleTimer()}}>{isRunning ? 'Stop' : 'Start'}</button>
          <button onClick={saveGame}>Save</button>
        </div>
      </div> : null}
      
      
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
