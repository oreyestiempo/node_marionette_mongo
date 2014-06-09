define([
  'lib/backbone',
  'lib/backbone.marionette',
  'lib/underscore',
  'text!/javascript/modules/main/templates/item_list.html'],
  function(Backbone, Marionette, _, template) {
    var ItemListView = Backbone.Marionette.ItemView.extend({
      template: _.template(template),
      tagName: 'li',
    });

    return ItemListView;
  });
