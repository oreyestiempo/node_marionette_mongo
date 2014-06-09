requirejs.config({
  baseUrl: 'javascript',
  paths: {
    text: 'lib/text',
    jquery: 'lib/jquery-1.8.3'
  },
  shim: {
    'lib/underscore': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ['lib/underscore'],
      exports: 'Backbone'
    },
    'lib/backbone.marionette': {
      deps: ['lib/underscore', 'lib/backbone'],
      exports: 'Marionette'
    },
    'app-new': {
      deps: ['lib/underscore', 'lib/backbone', 'lib/backbone.marionette']
    }
  }
});

require(['marionette_application'], function(MarionetteApplication) {
window.MarionetteApplication = MarionetteApplication;
window.MarionetteApplication.start();
});
