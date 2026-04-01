import { useState } from "react"

function EventModal(props){
    
    const [selectedEvent, setSelectedEvent] = useState(null)

    function handleModalClose(){
        setSelectedEvent(null)

        props.setShowEventModal(false)
    }

    return(
        <div className="event-modal">
            <i class="fa-solid fa-xmark" onClick={handleModalClose}></i>
            <h1>Events</h1>
                {selectedEvent && <i class="fa-solid fa-arrow-left" onClick={()=>{
                    setSelectedEvent(null)
                }}></i>}
                {!selectedEvent && <EventsList selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} setShowSelectedEvent={setShowSelectedEvent} setShowList={setShowList} events={props.events}></EventsList>}
                {selectedEvent && <EventDisplay selectedEvent={selectedEvent}></EventDisplay>}

            
        </div>
    )
}

function EventsList(props){
    return(
        <div className="events-list">
            {props.events.map((evnt, idx)=>{
                return(
                    <EventItem selectedEvent={props.selectedEvent} setSelectedEvent={props.setSelectedEvent} setShowList={props.setShowList} setShowSelectedEvent={props.setShowSelectedEvent} key={idx} event={evnt}/>
                )
            })}
        </div>
    )
}



function EventItem(props){
    return(
        <div className="event-item">
            <p>{props.event.eventType}</p>
            <i class="fa-solid fa-play" onClick={()=>{
                props.setShowList(false) 
                props.setShowSelectedEvent(true)
                props.setSelectedEvent(props.event)}
                }></i>
        </div>
    )
}

function EventDisplay(props){
    return(
        <div className="event-input-display">
            <img className={props.selectedEvent.eventType} src={props.selectedEvent.eventImage} alt="event"></img>
            <p>{props.selectedEvent.eventText}</p>
            <div className="event-choice-row">
                {props.selectedEvent.playerInputChoices.map((choice, idx)=>{
                    return(
                        <button onClick={()=>{props.selectedEvent.eventLogic(choice.inputId)}} key={choice.inputId}>{choice.inputText}</button>
                    )
                    })}
            </div>
        </div>
    )
}




export default EventModal