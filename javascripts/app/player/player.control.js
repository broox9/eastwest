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
            var form = new Player.Form()
            App.AppControl.Layout.formRegion.show(form);
        }
    };


    /* App Events - candidate for command execute  */
    App.vent.on('player:new', function (e) {
        Player.Controller.newPlayer();
    })



    /* start events */
    Player.on('start',function (options) {
        new Player.Router({
            controller: Player.Controller
        });
    });
});