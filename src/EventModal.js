import { useState, useContext } from "react"
import { EventStatus, EventHandlers } from "./config"
import { PlayerDataContext, CurrentShipContext } from "./App"


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
                {!selectedEvent && <EventsList selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}  events={props.events}></EventsList>}
                {selectedEvent && <EventDisplay setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent}></EventDisplay>}

            
        </div>
    )
}

function EventsList(props){
    return(
        <div className="events-list">
            {props.events.map((evnt, idx)=>{
                return(
                    <EventItem selectedEvent={props.selectedEvent} setSelectedEvent={props.setSelectedEvent}  key={idx} event={evnt}/>
                )
            })}
        </div>
    )
}



function EventItem(props){
    const {playerData, setPlayerData} = useContext(PlayerDataContext)
    const currentShip = useContext(CurrentShipContext)

    function handleEventSelect(){
        const updatedEvent = {
            ...props.event,
            eventStatus: EventStatus.INPUT
        }

        props.setSelectedEvent(updatedEvent)
        setPlayerData({
            ...playerData,
            fleet: playerData.fleet.map(ship=>{
                if(ship.shipID === currentShip.shipID){
                    return{
                        ...ship,
                        shipEventQueue: ship.shipEventQueue.map(evnt=>{
                            if(evnt.eventID === props.event.eventID){
                                return updatedEvent
                            } else {
                                return evnt
                            }
                        })
                    }
                } else {
                    return ship
                }
            })
        })

    }


    return(
        <div className="event-item">
            <p>{props.event.eventType}</p>
            <i class="fa-solid fa-play" onClick={handleEventSelect}></i>
        </div>
    )
}

function EventDisplay(props){
    const {playerData, setPlayerData} = useContext(PlayerDataContext)
    const currentShip = useContext(CurrentShipContext)

    function handleEventChoice(playerInputID){
        const {updatedEvent, updatedShip, updatedPlayerData }= EventHandlers[props.selectedEvent.eventType](playerInputID,props.selectedEvent, currentShip, playerData)

        props.setSelectedEvent(updatedEvent)
        setPlayerData({
            ...updatedPlayerData,
            fleet: playerData.fleet.map(ship=>{
                if(ship.shipID === currentShip.shipID){
                    return{
                        ...updatedShip,
                        shipEventQueue: ship.shipEventQueue.filter(evnt=>evnt.eventID !== props.selectedEvent.eventID)
                    }
                } else {
                    return ship
                }
            })
        })
    }
    
    if(props.selectedEvent.eventStatus === 'input'){
        return(
        <div className="event-input-display">
          
            <img className={props.selectedEvent.eventType} src={props.selectedEvent.eventImage} alt="event"></img>
            <p>{props.selectedEvent.eventText}</p>
            <div className="event-choice-row">
                {props.selectedEvent.playerInputChoices.map((choice, idx)=>{
                    return(
                        <button onClick={()=>{handleEventChoice(choice.inputId)}} key={choice.inputId}>{choice.inputText}</button>
                    )
                    })}
            </div>
        </div>
    )
    } else if(props.selectedEvent.eventStatus === 'result'){
        return(
            <div className="event-result-display">
                <img className={props.selectedEvent.eventType} src={props.selectedEvent.eventImage} alt="event"></img>
                <p>{props.selectedEvent.outputText}</p>
            </div>
        )
    }
    
}




export default EventModal