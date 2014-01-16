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
        models: {},
        collections: {}
    });


  /* PRE init */
  App.on('initialize:before', function () {
      console.log("History Started");
      Backbone.history.start();
      App.AppControl.start();
  });


  /* init */
App.on('initialize', function () {
    //App.AppControl.start();
});


  /* POST init */
  App.on('initialize:after', function () {
    App.Player.start();
    App.vent.trigger('show:initialview');
  });

  return App;
}();


/* start me up */
$(function () {
  EWstars.start();
});