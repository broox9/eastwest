EWstars.Footer = EWstars.module("Footer", function (Footer, App, Backbone, Marionette, $, _) {
    this.startWithParent = false;

    /* VIEW */
    Footer.View = Marionette.ItemView.extend({
        template: '#footer_template',
        className: 'footer',

        initialize: function () {
            console.log("new footer init'd")
        }
    });


    /* CONTROLLER - instantiable
     ... is that a word? */
    Footer.Controller = function (options) {
        this.options = options;
    };

    _.extend(Footer.Controller.prototype, {

        start: function (options) {
            console.log("footer app controller init'd", options);
            this.showFooter();
        },

        showFooter: function() {
            App.footerRegion.show(new Footer.View)
        }
    });


    /* APP(Footer) START */
    Footer.on('start', function (options) {
        console.log("footer app start");
        var controller = new Footer.Controller(options)
        controller.start();
    });

});