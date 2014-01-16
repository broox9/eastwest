EWstars.Player = EWstars.module("Player", function (Player, App, Backbone, Marionette, $, _) {

    this.startWithParent = false;

    Player.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'player/:id' : 'showPlayer'
        }
    });

    Player.Controller = {
        showPlayer: function (model) {
            var player = model || new App.models.Player();
            var results = new Player.Results({model: player});

            this.layout.resultsRegion.show(results);


        },

        createPlayer: function (data) {
            console.log('creating a player', data)
        },

        newPlayer: function () {
          var form = new Player.Form(),
              nav = new Player.Nav(),
              results = new Player.EmptyResults();
          this.layout = new App.AppControl.Layout();

          App.contentRegion.show(this.layout);
          this.layout.resultsRegion.show(results);
          this.layout.navRegion.show(nav);
          this.layout.formRegion.show(form);
        }
    };


    /* App Events - candidate for command execute  */
    App.vent.on({
      'player:new': function (e) {
        Player.Controller.newPlayer();
      },
      'player:form:submit': function (model) {
        Player.Controller.showPlayer(model);
      }
    });



    /* start events */
    Player.on('start',function (options) {
        new Player.Router({
            controller: Player.Controller
        });
    });
});