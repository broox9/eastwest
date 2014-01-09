/* Collection*/
EWstars.collections.PlayersEast = Backbone.Collection.extend({
    model: EWstars.models.Player,
    localStorage: new Backbone.LocalStorage("Players"),

    positions: {
        offense: Positions.offense,
        defense: Positions.defense
    }
})


/* MODEL*/
EWstars.models.Player = Backbone.Model.extend({
    defaults: {
        "first": "Firstname",
        "middle": "",
        "last": "Lastname",
        "prefix": "",
        "suffix": "",
        "college": "College University",
        "team": "west",
        "position": "ls",
        "number" : ""
    },

    initialize: function (options) {
        var newPlayer  = this.existingPlayer(),
            phase = "offense";
        newPlayer.name =  this.playerName(newPlayer);
        newPlayer.position = Positions[newPlayer.position] || this.setPosition(phase);
        newPlayer.number = newPlayer.number || this.setNumber(newPlayer.position);
        this.set(newPlayer);
    },

    existingPlayer: function () {
        var ep = ExistingProfiles,
            epArray = _.union(ep.east, ep.west, ep.real),
            len = epArray.length - 1,
            entryIndex = _.random(len),
            entryObj = epArray[Math.round(entryIndex)]

        return entryObj;
    },

    playerName: function (player) {
        var nameComponents = [player.prefix, player.first, player.middle, player.last, player.suffix],
            nameArray = [],
            name = "";

        _.each(nameComponents, function (item) {
            if (item.length) {
                nameArray.push(item);
            }
        });

        name = nameArray.join(" ");
        return $.trim(name);
    },

    setPosition: function (phase) {
        var positions = Positions,
            phases = Positions[phase] || null;

        if (!phases) {
            phases =  _.union(positions.offense, positions.defense, positions.specialteams);
        }

        var phaseLen = phases.length - 1,
            posIndex = _.random(phaseLen),
            pos = phases[posIndex];

        return positions[pos];
    },

    setNumber: function (position) {
        var ranges =  position.numberRange,
            rangeLen = ranges.length - 1,
            segment = _.random(rangeLen),
            currentRange = ranges[segment],
            number = _.random(currentRange[0],currentRange[1])

        console.log("Set Number", position.name, number);
        return number;
    }
});