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
            //console.log("triggered Player Create", e)
            //App.vent.trigger("player:create", form);
        }
    });


    Player.Results = Marionette.ItemView.extend({
        template: '#player_results_template',

        initialize: function (options) {
            console.log("results init'd", options);
        },

        onRender: function (options) {
            console.log("result view render ", options)
        }
    });


    /* listen for start Started */
//    Player.addInitializer('start', function (options) {
//
//    });
});