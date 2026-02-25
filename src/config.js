export const shipClasses = [
    {
        name: 'Utility',
        description: 'for daily maintenance tasks, rewards are quicker'
    },
    {
        name: 'Research',
        description: 'for personal growth tasks, rewards are spaced further apart'
    },
    {
        name: 'Vanguard',
        description: 'for difficult, or strenuous, or emotionally challenging tasks'
    }
]
//resource gathering rates per second
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
    console.log('calculate resources')


    const newResourceUnits = {
        
    }

    for (const resource in currentShipData.resourceUnits) {

        const currentUnits = currentShipData.resourceUnits[resource]
        const baseRate = baseRates[currentShipData.shipClass][resource]
        const currentLevel = currentShipData.miningLevels[resource]
        console.log(currentUnits, baseRate, currentLevel)
        let newUnits = currentUnits + baseRate * currentLevel * (Math.log(currentLevel +1))
        newResourceUnits[resource] = newUnits
    }
    return newResourceUnits
    
}