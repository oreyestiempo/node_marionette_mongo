define([
    'lib/backbone',
    'lib/underscore',
    'modules/task1-alex/views/main',
    'text!/javascript/modules/task1-alex/templates/main.html'],
    function(Backbone, _, ItemListView, template) {
        var ListView = Backbone.Marionette.CompositeView.extend({
            template: _.template(template),
            
            itemView: ItemListView,
            
            itemViewContainer: '#table-list tbody',
            
            events: {
                'click button.js-delete': "deleteRecord"
            },
            
            deleteRecord: function(e) {
                e.stopPropagation();
                alert("Delete button was clicked");
                this.model.collection.remove(this.model);
            }
            
        });

    return ListView;
    });