define([
  'lib/backbone',
  'lib/backbone.marionette',
  'lib/underscore',
  'modules/main/views/main',
  'modules/main/collections/tasks',
  'modules/main/views/list'],
  function(Backbone, Marionette, _, mainView, TasksCollection, ListView) {
    var MarionetteApplication = new Marionette.Application();

    MarionetteApplication.addRegions({
      header:   "#header",
      leftList: "#list",
      main:     "#main"
    });

    MarionetteApplication.addInitializer(function(){
      var collection = new TasksCollection([
	      {name:"task1_Armando"}, 
	      {name: "task1_Alejandro"}, 
	      {name: "task1_Luis"}
      ]);

      var mv = new mainView();
      var lv = new ListView({collection: collection});
      MarionetteApplication.main.show(mv);
      MarionetteApplication.leftList.show(lv);
    });

    return MarionetteApplication;
  }
);
