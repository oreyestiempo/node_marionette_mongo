define([
  'lib/backbone',
  'lib/backbone.marionette',
  'lib/underscore',
  'modules/main/views/main',
  'modules/task1-alex/collections/library',
  'modules/task1-alex/views/table-list'],
  function(Backbone, Marionette, _, mainView, TasksCollection, ListView) {
    var MarionetteApplication = new Marionette.Application();

    MarionetteApplication.addRegions({
      header:   "#header",
      leftList: "#list",
      main:     "#main"
    });

    MarionetteApplication.addInitializer(function(){
      var collection = new TasksCollection([
	      {idAttribute: 1,title: 'Javascript',author: 'Alejandro'},
        {idAttribute: 2,title: 'Javascript',author: 'Sebastian'},            
      ]);

      //var mv = new mainView();
      var lv = new ListView({collection: collection});
      //MarionetteApplication.main.show(mv);
      MarionetteApplication.leftList.show(lv);
    });

    return MarionetteApplication;
  }
);
