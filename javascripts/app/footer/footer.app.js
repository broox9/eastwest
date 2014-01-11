EWstars.Footer = EWstars.module("Footer", function (Footer, App, Backbone, Marionette, $, _) {
    this.startWithParent = false;
    this.started = false;
    this.currentView;
    this.contextScope = null;

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
            var el= Footer.currentView.$el;
            if (el.not(':visible')) {
                Footer.currentView.$el.fadeIn('fast');
            }
        },

        hideFooter: function () {
            var el= Footer.currentView.$el;
            if (el.is(':visible')) {
                Footer.currentView.$el.fadeOut('fast');
            }
        },

        setContext: function (context) {
            //"team" , "player" , or null
            Footer.contextScope = context;
            return this;
        }
    });


    /* Event Listeners */
    App.vent.on({
        "footer:show": function (context) {
            Footer.controller.setContext(context).showFooter();
        },
        "footer:hide": function() {
            Footer.controller.setContext(null).hideFooter();
        }
    });


    /* APP(Footer) START */
    Footer.addInitializer(function (options) {
        this.controller = new this.Controller(options)
        this.controller.startFooter();
        this.started = true;
    });
});