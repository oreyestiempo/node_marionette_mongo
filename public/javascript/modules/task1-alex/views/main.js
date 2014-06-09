define([
    'lib/backbone',
    'lib/backbone.marionette',
    'lib/underscore',
    'text!/javascript/modules/task1-alex/templates/main.html'],
    function (Backbone, Marionette, _, template) {
        var alexView = Backbone.Marionette.ItemView.extend({
            template: _.template(template)
        });
    
    return alexView;
});