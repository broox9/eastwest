EWstars.Header = EWstars.module("Header", function (Header, App, Backbone, Marionette, $, _) {
    //this.startWithParent = false;


   /* VIEW */
    Header.NavView = Marionette.ItemView.extend({
        template: '#header_template',
        className: 'header',

        initialize: function () {
            //
        }
    });


    /* CONTROLLER - instantiable
    ... is that a word? */
    Header.Controller = function (options) {
        this.options = options;
    };

    _.extend(Header.Controller.prototype, {

        start: function (options) {
            this.showNav();
        },

        showNav: function() {
            App.headerRegion.show(new Header.NavView)
        }
    });


    /* APP(HEADER) START */
    Header.addInitializer(function (options) {
        var controller = new Header.Controller(options)
        controller.start();
    });

});