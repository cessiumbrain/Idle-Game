function ResourceDisplay(props){
  console.log(props.playerData.currentShip.resourceUnits[props.resource])
  return(
    <div className={`resource-display ${props.resource}`}  >
      <span className="resource-name">{props.resource} : {Math.round(props.playerData.currentShip.resourceUnits[props.resource])}</span>
      <div className="mining-level">mining level {props.playerData.currentShip.miningLevels[props.resource]}
        <button onClick={()=>{props.upgradeMiningLevel(props.resource)}} className="upgrade-button">+</button>
      </div>
    </div>
  )
}

export default ResourceDisplay