define([
    'lib/backbone',
    'lib/backbone.marionette',
    'lib/underscore'],
function(Backbone, Marionette, _ ) {
    
    var BookModel = Backbone.Model.extend({
        defaults: {
            title: '',
            author: 'Unknown'
        },
    });
    
    return BookModel;
    
 });