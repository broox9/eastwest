'use strict';

/* App setup and init */
var EWstars = function () {

  var App = new Backbone.Marionette.Application();

    /* regions */
    App.addRegions({
        headerRegion: '#app-header',
        contentRegion: '#app-content',
        footerRegion: '#app-footer'
    });

    _.extend(App, {
        views: {},
        models: {}
    });


  /* PRE init */
  App.on('initialize:before', function () {
      console.log("History Started");
      Backbone.history.start();
      App.AppControl.start();
  });


  /* init */


  /* POST init */
  App.on('initialize:after', function () {
    App.vent.trigger('show:initialview');
    App.Player.start();
  });

  return App;
}();


/* start me up */
$(function () {
  EWstars.start();
});

