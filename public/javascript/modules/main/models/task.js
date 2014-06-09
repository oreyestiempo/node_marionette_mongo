define([
  'lib/backbone',
  'lib/underscore'],
  function(Backbone, _) {
    var TaskModel = Backbone.Model.extend({
      defaults:{
        name: ""
      } 
    });

    return TaskModel;
  });
