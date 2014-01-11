EWstars.Header = EWstars.module("Header", function (Header, App, Backbone, Marionette, $, _) {
    //this.startWithParent = false;


   /* VIEW */
    Header.NavView = Marionette.ItemView.extend({
        template: '#header_template',
        className: 'header',

        initialize: function () {
            console.log("new NavView init'd")
        }
    });


    /* CONTROLLER - instantiable
    ... is that a word? */
    Header.Controller = function (options) {
        this.options = options;
    };

    _.extend(Header.Controller.prototype, {

        start: function (options) {
            console.log("header app controller init'd", options);
            this.showNav();
        },

        showNav: function() {
            App.headerRegion.show(new Header.NavView)
        }
    });


    /* APP(HEADER) START */
    Header.on('start', function (options) {
        console.log("header app start");
        var controller = new Header.Controller(options)
        controller.start();
    });

});