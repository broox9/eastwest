EWstars.AppControl = EWstars.module('AppControl', function (AppControl, App, Backbone, Marionette, $, _ ) {

    //this.startWithParent = false;
    this.contextScope = null;

    /* Initial View */
    AppControl.InitNav = Marionette.ItemView.extend({
      template: '#initial_nav_template',
      tagName: 'section',
      className: 'initial-nav'
    });


    /* Common Content Layout - player and team share */
    AppControl.Layout = Marionette.Layout.extend({
        template: '#content_layout_template',
        tagName: 'form',
        regions: {
            navRegion: '#nav-section',
            formRegion: '#form-section',
            resultsRegion: '#results-section'
        },

        initialize: function () {
            console.log("content layout started")
        }
    })

});