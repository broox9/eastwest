EWstars.Player = EWstars.module("Player", function (Player, App, Backbone, Marionette, $, _) {

    this.startWithParent = false;

    Player.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'player/:id' : 'showPlayer'
        }
    });

    Player.Controller = {
        showPlayer: function (data) {
            var player = new App.models.Player();
            var results = new Player.Results({model: player});
            console.log("SHOWING PLAYER", data, results);

        },

        createPlayer: function (data) {
            console.log('creating a player', data)
        },

        newPlayer: function () {

        }
    };


    /* App Events - candidate for command execute  */
    App.vent.on('player:new', function (e) {
        Player.Controller.newPlayer();
        App.Footer.start();
    })



    /* start events */
    Player.on('start', function (options) {
        console.log("creating player controller ");
        new Player.Router({
            controller: Player.Controller
        });
    });
});