EWstars.Layout = EWstars.module('Layout', function (Layout, App, Backbone, Marionette, $, _ ) {

  /* Layout Header View */
  Layout.Header = Marionette.ItemView.extend({
    template: '#main_nav_template',
    tagName: 'nav',
    className: 'header-nav',

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
    template: '#content_layout_template',

    regions: {
        playerSection: '#player-section',
        teamSection: '#team-section'
    },

    ui: {},
    modelEvents: {},
    collectionEvents: {},
    events: {},

    initialize: function (options) {
      console.log("Layout Module Content Section Init'd", options);
      this.render();
    }

  });

});