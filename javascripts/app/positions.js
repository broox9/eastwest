Positions = {
    "offense": ["qb", "rb", "fb", "wr", "te", "ot", "og", "c"],

    "defense": ["dt", "de", "lb", "olb", "ilb", "cb","s", "ss", "fs"],

    "specialteams": ["k", "p", "kr", "pr", "ls"],

    "qb": {
        "name": "Quarterback",
        "phase": "offense",
        "numberRange": [[1,19]],
        "starters": 1
    },

    "rb": {
        "name": "Running Back",
        "phase": "offense",
        "numberRange": [[20,49]],
        "starters": 1
    },

    "wr": {
        "name": "Wide Receiver",
        "phase": "offense",
        "numberRange": [[10,19],[80,89]],
        "starters": 2
    },

    "te": {
        "name": "Tight End",
        "phase": "offense",
        "numberRange": [[40,49],[80,89]],
        "starters": 1
    },

    "fb": {
        "name": "Fullback",
        "phase": "offense",
        "numberRange": [[30,49]],
        "starters": 1
    },

    "ot": {
        "name": "Tackle",
        "phase": "offense",
        "numberRange": [[50,79]],
        "starters": 2
    },

    "og": {
        "name": "Guard",
        "phase": "offense",
        "numberRange": [[50,79]],
        "starters": 2
    },

    "c": {
        "name": "Center",
        "phase": "offense",
        "numberRange": [[50,79]],
        "starters": 1
    },

    "dt": {
        "name": "Defensive Tackle",
        "phase": "defense",
        "numberRange": [[50,79],[90,99]],
        "starters": 2
    },

    "de": {
        "name": "Defensive End",
        "phase": "defense",
        "numberRange": [[50,79],[90,99]],
        "starters": 2
    },

    "lb": {
        "name": "Linebacker",
        "phase": "defense",
        "numberRange": [[50,79],[90,99]],
        "starters": 3
    },

    "olb": {
        "name": "Outside Linebacker",
        "phase": "defense",
        "numberRange": [[50,79],[90,99]],
        "starters": 2
    },

    "ilb": {
        "name": "Inside Linebacker",
        "phase": "defense",
        "numberRange": [[50,79],[90,99]],
        "starters": 1
    },

    "cb": {
        "name": "Cornerback",
        "phase": "defense",
        "numberRange": [[20,39]],
        "starters": 2
    },
    "s": {
        "name": "Safety",
        "phase": "defense",
        "numberRange": [[20,49]],
        "starters": 2
    },
    "fs": {
        "name": "Free Safety",
        "phase": "defense",
        "numberRange": [[20,49]],
        "starters": 1
    },
    "ss": {
        "name": "Strong Safety",
        "phase": "defense",
        "numberRange": [[20,49]],
        "starters": 1
    },

    "k": {
        "name": "Kicker",
        "phase": "specialteams",
        "numberRange": [[0,19]],
        "starters": 1
    },
    "p": {
        "name": "Punter",
        "phase": "specialteams",
        "numberRange": [[0,19]],
        "starters": 1
    },

    "kr": {
        "name": "Kick Returner",
        "phase": "specialteams",
        "numberRange": [[10,19],[20,49],[80,89]],
        "starters": 1
    },

    "pr": {
        "name": "Punt Returner",
        "phase": "specialteams",
        "numberRange": [[10,19],[20,49],[80,89]],
        "starters": 1
    },

    "ls": {
        "name": "Long Snapper",
        "phase": "specialteams",
        "numberRange": [[40,99]],
        "starters": 1
    }
};