define([
    'lib/backbone',
    'lib/backbone.marionette',
    'lib/underscore',
    'modules/task1-alex/models/book'],
function(Backbone, Marionette, _, BookModel ) {
    
    var Library = Backbone.Collection.extend({
        model: BookModel
    });
    
    return Library;
    
 });