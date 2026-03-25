export function loadImageToCanvas(imgSrc){
    return new Promise((resolve, reject)=>{
        const img = new Image()

        img.src = imgSrc
        img.onload = ()=>{
            resolve(img)
        }    
    })
}

export function getNextPlanet(currentTimeInSeconds, solarSystem){

    //if we've already completed this solarSystem trim off that time to find time in this loop
    const solarSystemTimeInSeconds = solarSystem.totalDistanceInHours * 60 * 60

    const timeInSecondsThisCycle = currentTimeInSeconds % solarSystemTimeInSeconds

    const timeInHoursThisCycle = timeInSecondsThisCycle / 60 / 60
    const nextPlanet = solarSystem.planets.find(planet=>{

        return planet.distanceInHours > timeInHoursThisCycle
    })

    return nextPlanet
}

export function convertSecondsIntoHMSObj(seconds){
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return {
        hours: hours,
        minutes: minutes,
        seconds: secs
    }
}


