define([
  'lib/backbone',
  'lib/backbone.marionette',
  'lib/underscore',
  'modules/main/views/main'],
  function(Backbone, Marionette, _, mainView) {
    var MarionetteApplication = new Marionette.Application();

    MarionetteApplication.addRegions({
      header:   "#header",
      leftList: "#list",
      main:     "#main"
    });

    MarionetteApplication.addInitializer(function(){
      var mv = new mainView();
      MarionetteApplication.main.show(mv);
    });

    return MarionetteApplication;
  }
);
