define([
  'lib/backbone',
  'lib/backbone.marionette',
  'lib/underscore',
  'text!/javascript/modules/main/templates/main.html'],
  function(Backbone, Marionette, _, template) {
    var mainView = Backbone.Marionette.ItemView.extend({
      template: _.template(template)
    });

    return mainView;
  });
