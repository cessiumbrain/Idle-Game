import { useEffect, useRef, useMemo } from "react"
import { shipClasses } from "./config"
import ship1 from './assets/ship_1/_0000_Layer-1.png'
import { loadImageToCanvas, getNextPlanet, convertSecondsIntoHMSObj } from "./utils"



function SolarSystemModal(props){
    const canvasRef = useRef(null)

    const shipClassObject = shipClasses.find(cls => cls.name === props.currentShip.shipClass)

    if (!shipClassObject) {
        console.error("couldn't find ship class object in solar system modal")
    }

    const solarSystem = shipClassObject.solarSystem

    if (!solarSystem) {
        console.error('solar system not found')
    }

    const nextPlanet = getNextPlanet(props.currentShip.totalTime, solarSystem)
    console.log(nextPlanet)
    const totalSecondsThisCycle = props.totalTime % (solarSystem.totalDistanceInHours*60*60)
    const distanceToNextPlanetInSeconds = (nextPlanet.distanceInHours * 60 * 60) - totalSecondsThisCycle  
    const HMSOBject = convertSecondsIntoHMSObj(distanceToNextPlanetInSeconds)
    useEffect(()=>{
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        // Set canvas size
        canvas.width = 800
        canvas.height = 400

        

        const solarSystemTotalTimeInSeconds = solarSystem.totalDistanceInHours * 3600

        const travelPercentage = (props.currentShip.totalTime%solarSystemTotalTimeInSeconds) / solarSystemTotalTimeInSeconds


        //render the path

        //render completed portion in white
        ctx.beginPath()

        ctx.moveTo(0, canvas.height/2)
        ctx.lineTo(canvas.width *travelPercentage, canvas.height/2)
        ctx.strokeStyle='white'
        ctx.stroke()

        //render the remaining portion in gray
        ctx.moveTo(canvas.width*travelPercentage, canvas.height/2)
        ctx.lineTo(canvas.width, canvas.height /2 )
        ctx.strokeStyle= 'gray'
        ctx.stroke()


        //loop over the planets to render each
        async function renderPlanets(planetsArray){
            for(const planet of planetsArray){

                const planetImg = await loadImageToCanvas(planet.image)
                // the width will be determined by a percentage on the planet object
                const width = canvas.width * planet.widthPct
                //figure out the ratio at which the planet was resized based on width %
                const resizeRatio = width/ planetImg.width
                //set the height by that to keep preserve aspect ratio
                const height = planetImg.height * resizeRatio
                //the y coord should place the middle of the image in the middle of the canvas
                const yCoord = (canvas.height/2) - (.5*height)
                //figure out what precetage of the canvas width the xCoord should be at
                const percentageOfTotalDistance = planet.distanceInHours / solarSystem.totalDistanceInHours
                //the xCoord should be in the middle of that % of canvas width
                const xCoord = percentageOfTotalDistance * canvas.width -(.5*width)
                //draw the image there
                ctx.drawImage(planetImg, xCoord,yCoord, width, height)
                
            }
        }
        //render the ship
        async function renderShip(context, shipImgSrc, imageLoader, travelPct){
            
            const shipImage = await imageLoader(shipImgSrc)
            //ship size should 7% of canvas width
            const width = canvas.width * 0.07
            const resizeRatio = width / shipImage.width
            const height = shipImage.height * resizeRatio
            const x = (travelPct * canvas.width) - (width / 2)
            const y = canvas.height *.5 - (.5*height)
            
            context.save();

            context.translate(x + width / 2, y + height / 2);

            context.rotate(Math.PI / 2);

            context.drawImage(shipImage, -width / 2, -height / 2, width, height)

            context.restore();
        }
        
        // Render planets first, then ship on top
        (async () => {
            await renderPlanets(solarSystem.planets);
            await renderShip(ctx, shipClassObject.sprites[0], loadImageToCanvas, travelPercentage);
        })();


    }, [])


    return(
        <div className="solar-system-modal">
            <h1>Solar System Map</h1>
                <canvas ref={canvasRef} id="solar-system-canvas"></canvas>
            

            <i onClick={()=>props.setShowSolarSystemModal(false)} class="fa-solid fa-xmark"></i>
        <div className="solar-system-display">
        <p>System Name: {solarSystem.name}</p>
        <p>Approaching Planet: {nextPlanet.name}</p>
        <p>Distance to Next Planet: H:{HMSOBject.hours} M: {HMSOBject.minutes} S: {HMSOBject.seconds}</p>
        </div>
        

            
        </div>
    )
}

export default SolarSystemModal