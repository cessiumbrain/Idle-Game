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
        gold: 0.005
    },
    Utility: {
        iron:   0.16,
        bronze: 0.045,
        silver: 0.006,
        gold:   0.002,
        
    },
    Vanguard: {
        iron:   0.06,
        bronze: 0.025,
        silver: 0.02,
        gold:   0.012
    }
    
}

export const secondsPerCredit = {
    Research: 5,
    Utility: 5,
    Vanguard: 5

}


//
export function calculateResources(currentShipData, baseRates){

    const newResourceUnits = {}

    for (const resource in currentShipData.resourceUnits) {


        const currentUnits = currentShipData.resourceUnits[resource]

        const baseRate = baseRates[currentShipData.shipClass][resource]

        const currentLevel = currentShipData.miningLevels[resource]

        let newUnits = currentUnits + baseRate * currentLevel * (Math.log(currentLevel +1))
        newResourceUnits[resource] = newUnits
    }
    return newResourceUnits
    
}

export function createNewShip(shipName, shipClass, shipActivity) {
    return {
      shipID: crypto.randomUUID(),
      shipName: shipName,
      shipActivity: shipActivity,
      shipClass: shipClass,
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
    
  }

export class GameEvent {
    constructor(eventType, mineralPayload, creditPayload){
        this.eventType = eventType
        this.mineralPayload = mineralPayload
        this.creditPayload = creditPayload
        this.eventDispatched = false
    }

    dispatchEvent(stateSetterFn){

    }

}