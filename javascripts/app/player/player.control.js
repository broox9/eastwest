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
            var player = new App.models.Player();
            var results = new Player.Results({model: player});
            App.Content.playerSection.show(results);

        },

        createPlayer: function (e, data) {
            console.log('creating a player', data)
        }
    };


    /* App Events */
    App.vent.on('player:create', function (e) {
        Player.Controller.createPlayer(e);
    })

    /* start events */
    Player.on('start', function (options) {
        console.log("creating player controller ");
        new Player.Router({
            controller: Player.Controller
        });
        //Player.Controller.showPlayer();

    });
});