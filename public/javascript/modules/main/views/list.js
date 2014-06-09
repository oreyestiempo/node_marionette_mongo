define([
  'lib/backbone',
  'lib/underscore',
  'modules/main/views/item_list',
  'text!/javascript/modules/main/templates/list.html'],
  function(Backbone, _, ItemListView, template) {
    var ListView = Backbone.Marionette.CompositeView.extend({
      template: _.template(template),
      itemView: ItemListView,
      itemViewContainer: 'ul'
    });

    return ListView;
  });
