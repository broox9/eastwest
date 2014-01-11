EWstars.Footer = EWstars.module("Footer", function (Footer, App, Backbone, Marionette, $, _) {
    this.startWithParent = false;
    this.started = false;
    this.currentView;

    /* VIEW */
    Footer.View = Marionette.ItemView.extend({
        template: '#footer_template',
        className: 'footer',

        initialize: function () {
            //
        }
    });


    /* CONTROLLER - instantiable
     ... is that a word? */
    Footer.Controller = function (options) {
        this.options = options;
    };

    _.extend(Footer.Controller.prototype, {

        startFooter: function() {
            Footer.currentView =  new Footer.View;
            App.footerRegion.show(Footer.currentView)
        },

        showFooter: function () {
            var el = Footer.currentView.$el
            el.fadeIn('fast');
        }
    });


    /* Event Listeners */
    App.vent.on("footer:show", function () {
        Footer.currentView.$el.fadeIn('fast');

    });

    App.vent.on("footer:hide", function () {
        Footer.currentView.$el.fadeOut('fast');

    });


    /* APP(Footer) START */
    Footer.addInitializer(function (options) {
        this.controller = new this.Controller(options)
        this.controller.startFooter();
        this.started = true;
        console.log("footer module", this)
    });
});