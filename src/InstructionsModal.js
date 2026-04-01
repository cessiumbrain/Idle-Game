import { useState } from "react"
import { secondsPerCredit, shipClasses, createNewShip } from "./config"

function InstructionsModal(props){
    const [shipName, setShipName] = useState(props.playerData.shipName || '')
    const [shipActivity, setShipActivity] = useState(props.playerData.shipActivity || '')
    const [shipClass, setShipClass] = useState(props.playerData.shipClass || '')
    const [errorMessage, setErrorMessage] = useState('')

  function handleCloseModal(){
    console.log('handleCloseModal')
    //if there's already a save file and the config form isn't needed- just close the form
    if(props.currentShip){
        props.setShowModal(false)
        return
    }
    //validate form

    if(shipActivity == '' || shipClass == '' || shipName == ""){
        setErrorMessage('complete all inputs')
        return
    } else {
        //if valid
    props.setShowModal(false)

    const newShipData= createNewShip(shipName, shipClass, shipActivity)
    props.setPlayerData(prevData=>({
      ...prevData,
      fleet: [...prevData.fleet, newShipData]
    }))

    props.changeShip(newShipData.shipID)

    }
  }

  return(
    <div className="info-modal">
        <p className="description">
            Idle Game is designed to reward you for doing things that aren't as inherently rewarding as they ought to be.  You can give your ship a name, describe what activity it is for.  Then select a class for your ship. The utility class is for daily activities that are shorter in duration.  These can be things like chores, self-care routines etc.  The research class is for growth activities that in involve larger time commitments.  This would be things like skill development and practice, reading, working etc.  The vanguard class is for difficult or emotionally challenging tasks or for things you've been avoiding.
        </p>
      
      
      {
        props.playerData.fleet.length!=0 ? '' : <ModalInputs 
        playerData={props.playerData} 
        setPlayerData={props.setPlayerData}
        shipClass={shipClass}
        setShipClass={setShipClass}
        setShipName={setShipName}
        setShipActivity={setShipActivity}
        ></ModalInputs>
      }
      
        
      
      <button onClick={handleCloseModal}>{shipClass && shipName && shipActivity ? 'Next' : 'Close'}</button>
      <div className="modal-error-div">
        {errorMessage}
      </div>
      </div>
  )
}

function ModalInputs(props){

    return(
        <div className="modal-inputs-wrapper">
            <div className="modal-inputs-group">
                <label>Ship Name:</label>
                <input className="ship-name" onChange={(e) => { props.setShipName(e.target.value) }} placeholder={props.playerData.shipName || 'enter ship name'}></input>
            </div><div className="modal-inputs-group">
                <label>Activity</label>
                <input onChange={(e) => {
                    props.setShipActivity(e.target.value)
                }} className="ship-activity" placeholder={props.playerData.shipActivity || 'enter activity'}></input>
            </div>
            <div className="modal-inputs-group">
                <label>Ship Class</label>
                <select 
                value={props.shipClass}
                onChange={(e)=>{
                    props.setShipClass(e.target.value)
                    }}>
                    <option></option>
                    {shipClasses.map((shipClass,idx)=>{
                        return(
                        <option key={idx}>{shipClass.name}</option>

                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default InstructionsModal