function InfoModal(props){
    return(
        <div className="info-modal">
            <h1>Info Modal</h1>
            <i class="fa-solid fa-xmark" onClick={()=>{props.setShowInfoModal(false)}}></i>
            <button onClick={()=>{props.setShowFleetModal(true)}}>Fleet</button>
            <button onClick={()=>{
                
                props.setShowSolarSystemModal(true)}}>System Map</button>
            <button>Events</button>
        </div>
    )
}

export default InfoModal