EWstars.Player = EWstars.module("Player", function (Player, App, Backbone, Marionette, $, _) {

    Player.Form = Marionette.ItemView.extend({
        template: '#player_form_template',

        events: {
            'click #submit-player-form': 'triggerPlayerCreate'
        },

        initialize: function () {
            console.log("player form here");
        },

        triggerPlayerCreate: function (e) {
            e.preventDefault();
            App.vent.trigger("player:form:submit");
        }
    });


    Player.EmptyResults = Marionette.ItemView.extend({
      template: '#results_empty_template'
    });


    Player.Results = Marionette.ItemView.extend({
        model: App.models.Player,
        template: '#player_results_template',

        initialize: function (options) {
            console.log("results init'd", options);
        },

        onRender: function (options) {
            console.log("result view render ", options)
        }
    });

  Player.Nav = Marionette.ItemView.extend({
    template: '#main_nav_template'
  });


    /* listen for start Started */
//    Player.addInitializer('start', function (options) {
//
//    });
});