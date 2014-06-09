define([
  'lib/backbone',
  'lib/underscore',
  'modules/main/models/task'],
  function(Backbone, _, TaskModel) {
    var TasksCollection = Backbone.Collection.extend({
      model: TaskModel
    });

    return TasksCollection;
  });
