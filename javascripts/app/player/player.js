EWstars.models.Player = Backbone.Model.extend({
    defaults: {
        position: 'rb',
        first_name: 'new',
        last_name: 'player'
    },

    initialize: function (options) {
        console.log('player created');
    }
});