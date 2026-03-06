function ResourceDisplay(props){

  return(
    <div className={`resource-display ${props.resource}`}  >
      <span className="resource-name">{props.resource} : {Math.round(props.currentShip.resourceUnits[props.resource])}</span>
      <div className="mining-level">mining level {props.currentShip.miningLevels[props.resource]}
        <button onClick={()=>{props.upgradeMiningLevel(props.resource)}} className="upgrade-button">+</button>
      </div>
    </div>
  )
}

export default ResourceDisplay