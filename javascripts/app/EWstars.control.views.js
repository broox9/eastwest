EWstars.AppControl.InitView = EWstars.module('AppControl.InitView', function (InitView, App, Backbone, Marionette, $, _ ) {

    this.startWithParent = false;

    /* Initial View */
    InitView.Nav = Marionette.ItemView.extend({
      template: "#main_nav_template",
      tagName: 'section',
      className: "initial-nav",

      initialize: function () {
          console.log("initial view init'd");
      }
    });

    InitView.on('start', function () {
        console.log("initview init'd");
        App.contentRegion.show(new InitView.Nav);
    });



//  /* Layout Header View */
//  Layout.Header = Marionette.ItemView.extend({
//    template: '#main_nav_template',
//    tagName: 'nav',
//    className: 'header-nav',
//
//    ui: {},
//    modelEvents: {},
//    collectionEvents: {},
//    events: {}
//
//
//  });



//  /* Layout Footer View */
//  Layout.Footer = Marionette.ItemView.extend({
//    template: '#footer_template',
//
//    ui: {},
//    modelEvents: {},
//    collectionEvents: {},
//    events: {}
//
//  });

//  Layout.Content = Marionette.Layout.extend({
//    template: '#content_layout_template',
//
//    regions: {
//        playerSection: '#player-section',
//        teamSection: '#team-section'
//    },
//
//    ui: {},
//    modelEvents: {},
//    collectionEvents: {},
//    events: {},
//
//    initialize: function (options) {
//      console.log("Layout Module Content Section Init'd", options);
//      this.render();
//    }
//
//  });

});