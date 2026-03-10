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





export const shipClasses = [
    {
        name: 'Utility',
        description: 'for daily maintenance tasks, rewards are quicker',
        sprites: [ship10, ship11, ship12, ship13, ship14]
    },
    {
        name: 'Research',
        description: 'for personal growth tasks, rewards are spaced further apart',
        sprites: [ship20, ship21, ship22, ship23, ship24]
    },
    {
        name: 'Vanguard',
        description: 'for difficult, or strenuous, or emotionally challenging tasks',
        sprites: [ship30, ship31, ship32, ship33, ship34]
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