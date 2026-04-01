[ ] - why is distance to next planet negative

game events:
- types
- by default are set to queue until the player is ready to address them
- the queue stores events and then calls the event's dispatch method which updates player state appropriately
- player can make choices
- events are affected by player stats
- events in the future will be affected by players standing with factions

    
types of events:
    - solar system traversal - you land on a planet and extract resources from it, you encounter hostile factions, you encounter friendly factions, you encounter a mysterious object

event mechanics
 - set event probability per ship class
    - utility one per 4 minutes meaning 
    - research one per 15 minutes
    - vanguard one per 3 minutes
- or launched by in game event like reaching a planet
