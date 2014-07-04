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
                //'click': 'highlightName',
                'click td a.js-show': 'showClicked',
                'click button.js-delete': "deleteRecord"
            },
            
            showClicked: function(e) {
                e.preventDefault();
                e.stopPropagation();
                // Were using event listener instead trigger object because it allows us to prevent the event
                // from bubbling up in the DOM and getting our row highlighted.
                this.trigger("contact:show", this.model);

                console.log("Show");
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