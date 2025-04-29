# Idea

## Origin
We were just playing Ravenswatch and chilling and playing, and I was asking about how to build a Piper build. But I didn't wanna look up stuff or have a list to look at. And then we spoke about a way to have a lil assistant to make data driven decisions, to help make the best decisions in the moment. And of course, being software engineers, we came up with an idea that's stupidly out of scope and way overdesigned. That is this.

## Problems to solve
- Remembering things is hard
    - can't remember talents (ravenswatch)
    - forgor which items exist (rabbit & steel)
    - ... you know this issue
- Recommendations / Data driven decision making is hard
    - should I reroll right now? Or should I take x/y item/talent
    - Is this talent useful to my build?
    - What should I do right now (ravenswatch map)
- This shit is fun

## What is this good for?
- Data driven / optimization games
    - rogue likes, mostly lol
    - lots of decision making
    - randomness, mostly
    - high complexity / dimensionality
    - dynamic gameplay
    - resource management
- Examples
    - Ravenswatch
        - high randomness, but agency
        - tradeoffs, decision making
    - Rabbit & Steel
        - high randomness, but agency
        - tradeoffs, decision making
    - City Builders
        - randomness
        - decision making
    - Leauge of Legends
        - some downtime to make decisions
        - build / items / etc
    - ...

## What is this NOT good for?
- Call of Duty
    - no value
    - way too fast
    - mechanical skill based, less on the fly optimization / data driven decision making
- Elden Ring 
    - optimization is optional
    - no randomness, easy to plan ahead of time
- and more

## Features
- Standalone program
- Wiki mode for searchability
- additionally
    - data driven decision making engine
    - can live capture screen to aide in decision making on the fly

## Components
- GUI (browser or native?)
- Local webserver / program to take screenshots, house data
- extensible architecture to allow for multiple game modules

