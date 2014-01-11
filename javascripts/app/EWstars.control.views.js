EWstars.AppControl.InitView = EWstars.module('AppControl.InitView', function (InitView, App, Backbone, Marionette, $, _ ) {

    this.startWithParent = false;

    /* Initial View */
    InitView.Nav = Marionette.ItemView.extend({
      template: "#initial_nav_template",
      tagName: 'section',
      className: "initial-nav",

      initialize: function () {
          //
      }
    });

    InitView.on('start', function () {
        console.log("showing init view");
        App.contentRegion.show(new InitView.Nav);
    });


});