EWstars.Layout = EWstars.module('Layout', function (Layout, App, Backbone, Marionette, $, _ ) {

  /* Layout Header View */
  Layout.Header = Marionette.ItemView.extend({
    template: '#main_nav_template',

    ui: {},
    modelEvents: {},
    collectionEvents: {},
    events: {}


  });



  /* Layout Footer View */
  Layout.Footer = Marionette.ItemView.extend({
    template: '#footer_template',

    ui: {},
    modelEvents: {},
    collectionEvents: {},
    events: {}

  });

  Layout.Content = Marionette.Layout.extend({
    template: '#content-layout-template',

    regions: {},

    ui: {},
    modelEvents: {},
    collectionEvents: {},
    events: {},

    initialize: function () {
      console.log("Layout Module Content Section Init'd")
    }

  });

});