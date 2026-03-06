//shift time for credit down for Utility class and resources per second up for Iron to test

export const shipClasses = [
    {
        name: 'Utility',
        description: 'for daily maintenance tasks, rewards are quicker',
        sprites: []
    },
    {
        name: 'Research',
        description: 'for personal growth tasks, rewards are spaced further apart',
        sprites: []
    },
    {
        name: 'Vanguard',
        description: 'for difficult, or strenuous, or emotionally challenging tasks',
        sprites: []
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