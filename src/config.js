import ship10 from './assets/ship_1/_0000_Layer-1.png'
import ship11 from './assets/ship_1/_0001_Layer-2.png'
import ship12 from './assets/ship_1/_0002_Layer-3.png'
import ship13 from './assets/ship_1/_0003_Layer-4.png'
import ship14 from './assets/ship_1/_0004_Layer-5.png'

import ship20 from './assets/ship_2/_0000_Layer-1.png'
import ship21 from './assets/ship_2/_0001_Layer-2.png'
import ship22 from './assets/ship_2/_0002_Layer-3.png'
import ship23 from './assets/ship_2/_0003_Layer-4.png'
import ship24 from './assets/ship_2/_0004_Layer-5.png'

import ship30 from './assets/ship_3/_0000_Layer-1.png'
import ship31 from './assets/ship_3/_0001_Layer-2.png'
import ship32 from './assets/ship_3/_0002_Layer-3.png'
import ship33 from './assets/ship_3/_0003_Layer-4.png'
import ship34 from './assets/ship_3/_0004_Layer-5.png'

import planetOne from './assets/solar-systems/Planet 1.png'
import planetTwo from './assets/solar-systems/Planet 2.png'
import planetThree from './assets/solar-systems/Planet 3.png'
import planetFour from './assets/solar-systems/Planet 4.png'
import planetFive from './assets/solar-systems/Planet 5.png'
import planetSix from './assets/solar-systems/Planet 6.png'
import planetSeven from './assets/solar-systems/Planet 7.png'
import planetEight from './assets/solar-systems/Planet 8.png'
import planetNine from './assets/solar-systems/Planet 9.png'
import planetTen from './assets/solar-systems/Planet 10.png'

import dominionShip from './assets/factions/the_dominion/dominion_ship.png'
import silentShip from './assets/factions/the_silent/silent_ship.png'
import unboundShip from './assets/factions/the_unbound/unbound_ship.png'

import debris from './assets/game-events/debris.png'


export const shipClasses = [
    {
        name: 'Utility',
        description: 'for daily maintenance tasks, rewards are quicker',
        sprites: [ship10, ship11, ship12, ship13, ship14],
        solarSystem: {
            name: 'Demeter System',
            planets: [
                {
                    name: 'Focis', // Hearth
                    distanceInHours: 10,
                    widthPct: .05,
                    image: planetOne || planetOne
                },
                {
                    name: 'Colere', // Cultivate
                    distanceInHours: 20,
                    widthPct: .06,
                    image: planetTwo
                },
                {
                    name: 'Horreum', // Granary
                    distanceInHours: 30,
                    widthPct: .07,
                    image: planetThree
                },
                {
                    name: 'Messis', // Harvest
                    distanceInHours: 40,
                    widthPct: .1,
                    image: planetFour
                },
                {
                    name: 'Salus', // Health
                    distanceInHours: 50,
                    widthPct: .09,
                    image: planetFive
                },
                {
                    name: 'Divitiae', // Wealth
                    distanceInHours: 60,
                    widthPct: .05,
                    image: planetSix
                },
                {
                    name: 'Sapientia', // Wisdom
                    distanceInHours: 70,
                    widthPct: .06,
                    image: planetSeven
                },
                {
                    name: 'Amicitia', // Friendship (fixed spelling)
                    distanceInHours: 80,
                    widthPct: .1,
                    image: planetEight
                },
                {
                    name: 'Sudor', // Sweat
                    distanceInHours: 90,
                    widthPct: .08,
                    image: planetNine
                },
                {
                    name: 'Laboro', // Toil
                    distanceInHours: 100,
                    widthPct: .05,
                    image: planetTen
                }
            ],
            totalDistanceInHours: 100
        }
    },
    {
        name: 'Research',
        description: 'for personal growth tasks, rewards are spaced further apart',
        sprites: [ship20, ship21, ship22, ship23, ship24],
        solarSystem: {
            name: 'Athena System',
            planets: [
                {
                    name: 'Curiositas', // Curiosity (the spark)
                    distanceInHours: 10,
                    widthPct: .005,
                    image: planetOne
                },
                {
                    name: 'Discipulus', // Student / learner
                    distanceInHours: 50,
                    widthPct: .002,
                    image: planetTwo
                },
                {
                    name: 'Studium', // Study / focused effort
                    distanceInHours: 150,
                    widthPct: .005,
                    image: planetThree
                },
                {
                    name: 'Ratio', // Reason / understanding systems
                    distanceInHours: 400,
                    widthPct: .03,
                    image: planetFour
                },
                {
                    name: 'Ars', // Craft / applied skill
                    distanceInHours: 1000,
                    widthPct: .05,
                    image: planetFive
                },
                {
                    name: 'Disciplina', // Discipline / consistency
                    distanceInHours: 2500,
                    widthPct: .07,
                    image: planetSix
                },
                {
                    name: 'Perceptio', // Perception / pattern recognition
                    distanceInHours: 4000,
                    widthPct: .08,
                    image: planetSeven
                },
                {
                    name: 'Sapientia', // Wisdom
                    distanceInHours: 6000,
                    widthPct: .09,
                    image: planetEight
                },
                {
                    name: 'Illuminatio', // Illumination / deep insight
                    distanceInHours: 8000,
                    widthPct: .1,
                    image: planetNine
                },
                {
                    name: 'Aeternitas', // Timeless mastery / legacy
                    distanceInHours: 10000,
                    widthPct: .1,
                    image: planetTen
                }
            ],
            totalDistanceInHours: 10000
        }
    },
    {
        name: 'Vanguard',
        description: 'for difficult, or strenuous, or emotionally challenging tasks',
        sprites: [ship30, ship31, ship32, ship33, ship34],
        solarSystem: {
            name: 'Hades System',
            planets: [
                {
                    name: 'Umbra', // Shadow / fear of the unknown
                    distanceInHours: 3,
                    widthPct: .05,
                    image: planetOne
                },
                {
                    name: 'Tartarus', // Deep abyss / dread
                    distanceInHours: 6,
                    widthPct: .07,
                    image: planetTwo
                },
                {
                    name: 'Furor', // Frenzy / emotional overwhelm
                    distanceInHours: 9,
                    widthPct: .09,
                    image: planetThree
                },
                {
                    name: 'Dolor', // Pain / confronting discomfort
                    distanceInHours: 12,
                    widthPct: .1,
                    image: planetFour
                },
                {
                    name: 'Metus', // Fear (named explicitly at midpoint)
                    distanceInHours: 15,
                    widthPct: .08,
                    image: planetFive
                },
                {
                    name: 'Tenebrae', // Darkness / confusion
                    distanceInHours: 18,
                    widthPct: .07,
                    image: planetSix
                },
                {
                    name: 'Ruptura', // Breaking point / unraveling
                    distanceInHours: 21,
                    widthPct: .06,
                    image: planetSeven
                },
                {
                    name: 'Redemptio', // Redemption / turning point
                    distanceInHours: 24,
                    widthPct: .08,
                    image: planetEight
                },
                {
                    name: 'Ordo', // Order beginning to re-emerge
                    distanceInHours: 27,
                    widthPct: .09,
                    image: planetNine
                },
                {
                    name: 'Elysium', // Perfect order / peace
                    distanceInHours: 30,
                    widthPct: .1,
                    image: planetTen
                }
            ],
            totalDistanceInHours: 30
        }

    }
]
//resource gathering rates
export const baseRates = {
    Research: {
        iron: .1,
        bronze: 0.03,
        silver: 0.01,
        gold: 0.005,
        aetherium: .0001
    },
    Utility: {
        iron: 0.16,
        bronze: 0.045,
        silver: 0.006,
        gold: 0.002,
        aetherium: .0001


    },
    Vanguard: {
        iron: 0.06,
        bronze: 0.025,
        silver: 0.02,
        gold: 0.012,
        aetherium: .0001,

    }

}

export const secondsPerCredit = {
    Research: 60,
    Utility: 30,
    Vanguard: 5

}


//
export function calculateResources(currentShipData, baseRates) {

    const newResourceUnits = {}

    for (const resource in currentShipData.resourceUnits) {


        const currentUnits = currentShipData.resourceUnits[resource]

        const baseRate = baseRates[currentShipData.shipClass][resource]

        const currentLevel = currentShipData.miningLevels[resource]

        let newUnits = currentUnits + baseRate * currentLevel * (Math.log(currentLevel + 1))
        newResourceUnits[resource] = newUnits
    }
    return newResourceUnits

}

export function createNewShip(shipName, shipClass, shipActivity) {
    return {
        shipID: crypto.randomUUID(),
        shipEventQueue: [],
        shipName: shipName,
        shipActivity: shipActivity,
        shipClass: shipClass,
        totalTime: 0,
        resourceUnits: {
            iron: 0,
            bronze: 0,
            silver: 0,
            gold: 0,
            aetherium: 0
        },
        miningLevels: {
            iron: 1,
            bronze: 1,
            silver: 1,
            gold: 1,
            aetherium: 1
        },
        currentCredits: 0
    }

}

export function createNewEvent(setPlayerState, currentShip) {
    //testing faction encounters-------------------------!!!!!!!!
    // const randomEvent = new eventClasses[Math.floor(Math.random() * eventClasses.length)]()
    const randomEvent = new FactionEncounter()
    setPlayerState(prevState => {
        return {
            ...prevState,
            fleet: prevState.fleet.map(ship => {
                if (ship.shipID === currentShip.shipID) {
                    return {
                        ...ship,
                        shipEventQueue: [...ship.shipEventQueue, randomEvent]
                    }
                } else {
                    return ship
                }
            })

        }
    })
}

const factionsArray =[
    {
        name: 'The Unbound',
        shipImage: unboundShip,
        description: 'Chaotic and undisciplined, they are driven by their basest impulses.  They are a race of lost creatures consumed by darkness.'
    },
    {
        name: 'The Dominion',
        shipImage: dominionShip,
        description: 'A highly officious and bureaucratic regime, they are obsessed with order and control.'
    },
    {
        name: 'The Silent',
        shipImage: silentShip,
        description: 'A mysterious and enigmatic race, their intentions are inscrutable to humans.'
    }
]

export const EventStatus = Object.freeze({
    QUEUED: "queued",
    INPUT: "input",
    RESULT: "result",
    COMPLETED: "completed"
});

class SpaceDebris {
    constructor() {
        this.eventID = crypto.randomUUID()
        this.payload = null
        this.eventType = 'space debris'
        this.eventStatus = EventStatus.QUEUED
        this.eventImage = debris
        this.eventTextOptions = ["You encounter a mysterious piece of debris floating in space.","A mysterious piece of abandoned cargo blocks your ship's path"]
        this.eventText = this.eventTextOptions[Math.floor(Math.random() * this.eventTextOptions.length)]
        this.playerInputChoices = [{
            inputId: 1,
            inputText: 'Open airlock and take on cargo'
        },
        {
            inputId: 2,
            inputText: 'Ignore object and continue flying'
        }]
        this.outputText = null
    }

}

class FactionEncounter {
    constructor(){
        this.faction = factionsArray[Math.floor(Math.random() * factionsArray.length)]
        this.eventID = crypto.randomUUID()
        this.eventType = 'faction encounter'
        this.eventStatus = EventStatus.QUEUED
        this.eventImage = this.faction.shipImage
        this.eventSubtypes = [
            {
                type: 'friendly',
                eventTextOptions: [`You encounter an emissary of ${this.faction.name}. They greet you warmly and offer you a gift as a token of goodwill.`],
                playerInputChoices: [{
                    inputId: 1,
                    inputText: 'Accept the gift graciously'
                }]
            }, 
            { 
                type: 'neutral',
                eventTextOptions: [`A mysterious ship bearing the insignia of ${this.faction.name} approaches your vessel.  Their intenions are unclear.`],
                playerInputChoices:[{
                    inputId: 1,
                    inputText: 'Send a friendly supply drop to their ship as a gesture of goodwill. You may be deducted up to 5% of your resources.'
                },{
                    inputId: 2,
                    inputText: 'Fire on the ship preemptively in an attempt to neutralize any potential threat.'
                },
                {
                    inputId: 3,
                    inputText: 'Take no action and wait on their next move.'
                }]
            }, 
            { 
                type: 'hostile',
                eventTextOptions: [`You are ambushed by a ship from ${this.faction.name}.  They attack without warning forcing you to defend yourself.`],
                playerInputChoices:[{
                    inputId: 1,
                    inputText: 'Defend your ship and retaliate against the attackers.'
                }]
            }]
        this.eventSubtype = this.eventSubtypes[Math.floor(Math.random() * this.eventSubtypes.length)]
        //determine the event subtype and set textOptions based on the subtype
        this.eventText = this.eventSubtype.eventTextOptions[Math.floor(Math.random() * this.eventSubtype.eventTextOptions.length)]
        this.playerInputChoices = this.eventSubtype.playerInputChoices
    }
}

function modifyResources(resourceObject, mode, lowerLimit, upperLimit){
    if(mode !== 'increase' && mode !== 'decrease'){
        throw new Error("modifyResources helper function expected mode to be either 'increase' or 'decrease' instead got " + mode)
    }
    let newResourceObject = {}
    let resourceDeltas = {}
    Object.keys(resourceObject).forEach(resource=>{
        //if random num is less than .5 the user doesn't get any resource change
        if(Math.random()<.5){
            newResourceObject[resource] = resourceObject[resource]
            resourceDeltas[resource] = 0
        } else {
            const randomModifier = Math.random() * (upperLimit - lowerLimit) + lowerLimit
            if(mode === 'increase'){
                const unitsDelta = resourceObject[resource] * randomModifier
                newResourceObject[resource] = resourceObject[resource] + unitsDelta
                resourceDeltas[resource] = unitsDelta
            } else if(mode === 'decrease'){
                const unitsDelta = resourceObject[resource] * randomModifier
                newResourceObject[resource] = resourceObject[resource] - unitsDelta
                resourceDeltas[resource] = unitsDelta
            }
        }
    })
    return {newResourceObject, resourceDeltas}
}
export const EventHandlers = {
    'space debris': function (playerInputId, eventObject, currentShip, playerData) {
        let updatedEvent = { ...eventObject }
        let updatedShip = { ...currentShip }
        let updatedPlayerData = { ...playerData }

        updatedEvent.eventStatus = EventStatus.RESULT
        //player decides to take the debris
        //luck bonus
        const luckBonus = 0.2 * (1 - Math.exp(-currentShip.resourceUnits.aetherium / 50))
        const randomRoll = Math.random()
        if (playerInputId === 1) {
            //good outcome
            if (randomRoll < 0.5 + luckBonus) {
                let gainedUnits = {}
                //calculate gained resources based on current ship resources and luck bonus
                Object.keys(currentShip.resourceUnits).forEach(resource => {
                    gainedUnits[resource] = Math.random() * 0.1 * currentShip.resourceUnits[resource]
                })
                console.log(gainedUnits)
                //update ship resources
                Object.keys(currentShip.resourceUnits).forEach(resource => {
                    updatedShip.resourceUnits[resource] = gainedUnits[resource] + currentShip.resourceUnits[resource]
                })

                updatedEvent.outputText = `You open the airlock and bring the debris inside to discover it contains a cache of resources containing: ${Object.keys(gainedUnits).map(resource => `${gainedUnits[resource].toFixed(2)} units of ${resource}`).join(', ')}.`
            }
            //bad outcome
            else {
                let lostUnits = {}
                //calculate lost resources based on current ship resources and luck bonus
                Object.keys(currentShip.resourceUnits).forEach(resource => {
                    lostUnits[resource] = Math.random() * 0.1 * currentShip.resourceUnits[resource]
                })
                console.log(lostUnits)
                //update ship resources
                Object.keys(currentShip.resourceUnits).forEach(resource => {
                    updatedShip.resourceUnits[resource] = currentShip.resourceUnits[resource] - lostUnits[resource]
                })

                updatedEvent.outputText = `You open the airlock and bring the debris inside, but it contained an unstable element that explodes. You lose: ${Object.keys(lostUnits).map(resource => `${lostUnits[resource].toFixed(2)} units of ${resource}`).join(', ')}.`
            }
        }
        //player decides to ignore the debris
        else if (playerInputId === 2) {
            updatedEvent.outputText = 'You decide to play it safe and steer around the debris, leaving it behind as you continue on your journey'
        }
        return { updatedEvent, updatedShip, updatedPlayerData }

    },
    'faction encounter': function (playerInputId, eventObject, currentShip, playerData) {
        console.log('faction encounter event handler')
        console.log('eventObject', eventObject)
        let updatedEvent = { ...eventObject }
        let updatedShip = { ...currentShip }
        let updatedPlayerData = { ...playerData }

        updatedEvent.eventStatus = EventStatus.RESULT

        if (eventObject.eventSubtype.type === 'friendly') {
            const { newResourceObject, resourceDeltas } = modifyResources(currentShip.resourceUnits, 'increase', .01, .2)
            updatedEvent.outputText = `The emissary rewards you for your kindness with a gift of resources. You gain: ${Object.keys(resourceDeltas).map(resource => `${resourceDeltas[resource].toFixed(2)} units of ${resource}`).join(', ')}.`
            updatedShip.resourceUnits = newResourceObject

        }
        else if (eventObject.eventSubtype.type === 'neutral') {
            //if the player tries to bribe
            if (playerInputId === 1) {
                console.log('player input 1')
                console.log('updatedEvent', updatedEvent)
                const { newResourceObject, resourceDeltas } = modifyResources(currentShip.resourceUnits, 'decrease', .01, .05)
                updatedEvent.outputText = `Your gesture of goodwill is well received. You gave: ${Object.keys(resourceDeltas).map(resource => `${resourceDeltas[resource].toFixed(2)} units of ${resource}`).join(', ')}. ${eventObject.faction.name} allows you to pass unharmed.`
                updatedShip.resourceUnits = newResourceObject
            }
            //fire on the ship
            else if (playerInputId===2){

            }
            //if the player decides to ignore
            else if (playerInputId === 3) {
                console.log('playerInputId 3')
                const randomRoll = Math.random()
                const luckBonus = 0.2 * (1 - Math.exp(-currentShip.resourceUnits.aetherium / 50))
                //bad outcome
                if (randomRoll > 0.7 + luckBonus) {
                    const { newResourceObject, resourceDeltas } = modifyResources(currentShip.resourceUnits, 'decrease', .05, .2)

                    updatedEvent.outputText = `The ${eventObject.faction.name} perceives your inaction as a hostile act. They attack your ship causing damage and stealing resources. You lost: ${Object.keys(resourceDeltas).map(resource => `${resourceDeltas[resource].toFixed(2)} units of ${resource}`).join(', ')}.`
                    updatedShip.resourceUnits = newResourceObject

                }
                if (randomRoll < 0.3 + luckBonus) {

                    const { newResourceObject, resourceDeltas } = modifyResources(currentShip.resourceUnits, 'increase', .01, .1)
                    updatedEvent.outputText = `The ${eventObject.faction.name} perceives your inaction as a sign of strength. They decide to leave you alone and even reward you for your confidence. You gain: ${Object.keys(resourceDeltas).map(resource => `${resourceDeltas[resource].toFixed(2)} units of ${resource}`).join(', ')}.`
                    updatedShip.resourceUnits = newResourceObject
                } else {

                    updatedEvent.outputText = `The ${eventObject.faction.name} perceives your inaction as a sign of weakness. They decide to intimidate you but ultimately leave you alone. You feel shaken but suffer no material losses.`
                }
                console.log('updatedEvent', updatedEvent)
            }

        }

                return { updatedEvent, updatedShip, updatedPlayerData }

    }
}

const eventClasses = [SpaceDebris, FactionEncounter]


