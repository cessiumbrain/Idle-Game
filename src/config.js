//resource gathering rates per second

export const baseRates = {
    iron: 1,
    bronze: 0.1,
    silver: 0.01,
    gold: 0.05
}

//
export function calculateResources(playerData, baseRates){
    console.log('calculate resources')
    const newResourceUnits = {
        
    }

    for (const resource in playerData.resourceUnits) {
        const currentUnits = playerData.resourceUnits[resource]
        const baseRate = baseRates[resource]
        const currentLevel = playerData.miningLevels[resource]
    }
    
}