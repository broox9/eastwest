EWstars.Player = EWstars.module("Player", function (Player, App, Backbone, Marionette, $, _) {

    this.startWithParent = false;

    Player.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'player/:id' : 'showPlayer',
            'player/new' : 'createPlayer'
        }
    });

    Player.Controller = {
        showPlayer: function (data) {
            console.log("SHOWING PLAYER", data);
        },

        createPlayer: function (data) {
            console.log('creating a player', data)
        }
    };


    /* start events */
    Player.on('start', function (options) {
        new Player.Router({
            controller: Player.Controller
        });
        console.log("creating player controller ")
    });
});