EWstars.AppControl = EWstars.module('AppControl', function (AppControl, App, Backbone, Marionette, $, _) {

    //this.startWithParent = false;

    /*
    *   I privatized the router and controller pretty much
    *   just to do it :-)
    */

    /* private */
    var _router = Marionette.AppRouter.extend({
       appRoutes: {
        'player'        : 'viewPlayer',
        'team'          : 'viewTeam',
        ''              : 'initializeView',
        '#'             : 'initializeView'
       },

       initialize: function () {
        console.log("app router Started");
       }
    });

    /* private */
    var _controller = {
        defaults: {
            init: true
        },

        initializeView: function () {
            console.log('initial view fired');
            App.Header.start();
            this.startOrHideFooter();
            AppControl.InitView.start();
        },

        viewPlayer: function () {
            console.log('view player fired');
            App.vent.trigger("player:new");
            App.vent.trigger("footer:show");
        },

        viewTeam: function () {
            App.vent.trigger("team:new");
            App.vent.trigger("footer:show");
        },

        startOrHideFooter: function () {
            if (App.Footer.started) {
              App.vent.trigger("footer:hide");
              return;
            }
            App.Footer.start();
        }
    };


    /* initialize when needed */
    App.vent.on('show:initialview', function(){
        _controller.initializeView();
    });


    /* get it started - this module is started manually
    * so no AppControl.addInitializer
    * */
    AppControl.on('start', function (options) {
        this.router = new _router({
            controller: _controller
        });
        console.log("app control started");
    });

});