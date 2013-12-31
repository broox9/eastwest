EWstars.AppControl = EWstars.module('AppControl', function (AppControl, App, Backbone, Marionette, $, _) {

    //this.startWithParent = false;

    /*
    *   I privatized the router and controller pretty much
    *   just to do it :-)
    */

    /* private */
    var router = Marionette.AppRouter.extend({
       appRoutes: {
        'player' : 'viewPlayer',
        'team' : 'viewTeam',
        '' : 'initializeView',
        '#' : 'initializeView'
       }
    });

    /* private */
    var controller = {
        defaults: {
            init: true
        },

        initializeView: function () {
            console.log('initial view fired');
            var layout = App.Layout,
                header = new layout.Header(this.defaults),
                footer = new layout.Footer(this.defaults),
                content = new layout.Content(this.defaults);

            /* make the content section which is a layout accessible */
            App.Content = content;


            App.headerRegion.show(header);
            App.footerRegion.show(footer);
            App.contentRegion.show(content);
        },

        viewPlayer: function () {
            console.log('view player fired');
            App.vent.trigger("show:player");
        },

        viewTeam: function () {
            App.vent.trigger("show:team");
        }
    };


    /* initialize when needed */
    App.vent.on('show:initialview', function(){
        controller.initializeView();
    });


    /* get it started - this module is started manually
    * so no AppControl.addInitializer
    * */
    AppControl.on('start', function (options) {
        //var controller = this.controller
        new router({
            controller: controller
        });
        console.log("app controller started");
    });

});