define([
    'lib/backbone',
    'lib/backbone.marionette',
    'lib/underscore',
    'text!/javascript/modules/task1-alex/templates/list.html'],
    function (Backbone, Marionette, _, template) {
        var tableView = Backbone.Marionette.ItemView.extend({
            
            template: _.template(template),
            
            tagName: 'tr',
            
            events: {
                'click button.js-delete': "deleteRecord"
            },
            
            deleteRecord: function(e) {
                e.stopPropagation();
                alert("Delete button was clicked");
                this.model.collection.remove(this.model);
            },
            
            remove: function(){
                this.$el.fadeOut(function(){
                    $(this).remove();
                })
            }
            
            
        });
        
    
    return tableView;
});