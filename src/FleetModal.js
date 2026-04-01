function FleetModal(props){
    return(
        <div className="fleet-modal">
            <h1>Fleet Info</h1>
            <div className="ships-list">
                <div className="ship-info-header">
                    <span>Ship Name</span>
                    <span>Ship Class</span>
                    <span>Total Time</span>
                    <span>Credits</span>
                    <span>Activate</span>
                </div>
                {props.fleet.map((ship, index)=>{
                    return(
                        <ShipInfo setShowFleetModal={props.setShowFleetModal} isRunning={props.isRunning} cycleTimer={props.cycleTimer} setCurrentShipID={props.setCurrentShipID} currentShipID={props.currentShipID}ship={ship} key={index}></ShipInfo>
                    )
                })}
            </div>
            <div className="button-div">
                <button onClick={()=>{props.setShowFleetModal(false)}}>close</button>

            </div>
            
        </div>
    )
}

function ShipInfo(props){
    function handleActivateShip(){
        console.log('activate ship')
        if(props.isRunning){
            props.cycleTimer()
        }
        props.setCurrentShipID(props.ship.shipID)
        props.setShowFleetModal(false)
    }
    return(
        <div className="ship-info">
            <span>{props.ship.shipName}</span>
            <span>{props.ship.shipClass}</span>
            <span>{Math.floor(props.ship.totalTime / 3600)}h {Math.floor((props.ship.totalTime % 3600) / 60)}m {props.ship.totalTime % 60}s</span>
            <span>{props.ship.currentCredits}</span>
            {props.currentShipID === props.ship.shipID ? <span>Current Ship</span> : <button onClick={()=>{handleActivateShip(props.ship)}}>Activate Ship</button>}
        </div>
    )
}

export default FleetModal