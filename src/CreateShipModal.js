import { shipClasses } from "./config"
import { useState } from "react"
function CreateShipModal(props){

    const [shipName, setShipName] = useState(null)
    const [shipActivity, setShipActivity] = useState(null)
    const [shipClass, setShipClass] = useState('Utility')
    const [error, setError] = useState(null)

    console.log(shipName)

    function handleAddNewShip(){
        console.log('handle add new ship', shipName, shipActivity, shipClass)
        //if the form is filled out
        if(shipName && shipActivity && shipClass){
            console.log('valid form')
            props.setShowCreateShipModal(false)
            props.createNewShip(shipName, shipActivity, shipClass)
        } else {
            setError("please fill out all fields")
        }

    }

    return(
        <div className="create-ship-modal">
            <div className="modal-inputs-wrapper">
                <h1>Create New Ship</h1>
            <label>Ship Name:</label>
            <input onChange={(e)=>{setShipName(e.target.value)}} type="text"></input>
            <label>Ship Activity:</label>
            <input onChange={(e)=>{setShipActivity(e.target.value)}}type="text"></input>
            <label>Ship Class</label>
            <select onChange={(e)=>{setShipClass(e.target.value)}}>

                {
                    shipClasses.map((shipClass, idx)=>{
                        return(
                            <option key={idx}>{shipClass.name}</option>
                        )
                    })
                }
            </select>
            </div>
            
            <div className="error-display">
                {error ? <span>{error}</span> : ''}
            </div>
            <div className="button-row">
                <button onClick={()=>{props.setShowCreateShipModal(false)}}>Close</button>
                <button onClick={()=>{handleAddNewShip()}}>Add Ship</button>
            </div>
            
        </div>
    )
}

export default CreateShipModal