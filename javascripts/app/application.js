/* App setup and init */
var EWstars = function () {

  var App = new Backbone.Marionette.Application();


  App.on('initialize:before', function () {
    Backbone.history.start();
  });


  App.on('initialize:after', function () {
    console.log("App Intialized");

    var layout = App.Layout,
        header = new layout.Header(),
        footer = new layout.Footer(),
        content = new layout.Content();

    App.headerRegion.show(header);
    App.footerRegion.show(footer);
    App.contentRegion.show(content);
  });


  /* regions */
  App.addRegions({
    headerRegion: '#app-header',
    contentRegion: '#app-content',
    footerRegion: '#app-footer'
  });

  return App;
}();


/* start me up */
$(function () {
  EWstars.start();
});

