EWstars.Player = EWstars.module("Player", function (Player, App, Backbone, Marionette, $, _) {

//    Player.Layout = Marionette.Layout.extend({
//        template: '#',
//
//        regions: {
//            playerForm: '#player-form',
//            playerResult: '#player-results'
//        }
//    });


    Player.Form = Marionette.ItemView.extend({
        template: '#player_form_template'
    });


    Player.Results = Marionette.ItemView.extend({
        template: '#player_results_template'
    });



    /* listen for start Started */
    Player.on('start', function (options) {
        console.log("player module started");
        App.Content.playerSection.show(new Player.Form);
    });
});