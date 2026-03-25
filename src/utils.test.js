import { getNextPlanet, convertSecondsIntoHMSObj } from "./utils";
import { shipClasses } from "./config";

describe('getNextPlanet', () => {

    test('returns the right planet initially', () => {


        expect(getNextPlanet(0, shipClasses[0].solarSystem)).toBe(shipClasses[0].solarSystem.planets[0])
    })
    test('returns the right planet after one prestige',  ()=>{
        expect(getNextPlanet(360001, shipClasses[0].solarSystem)).toBe(shipClasses[0].solarSystem.planets[0])
    })
})

describe('convert seconds into an hours/minutes/seconds object', ()=>{
    test('base case works', ()=>{

        expect(convertSecondsIntoHMSObj(3661)).toEqual({"hours":1,"minutes":1, "seconds":1})
    })
})