define([
    'lib/backbone',
    'lib/backbone.marionette',
    'lib/underscore',
    'text!/javascript/modules/task1-alex/templates/list.html'],
    function (Backbone, Marionette, _, template) {
        var tableView = Backbone.Marionette.ItemView.extend({
            template: _.template(template),
            tagName: 'tr'
        });
    
    return tableView;
});