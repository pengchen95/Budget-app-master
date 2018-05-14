'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'budget-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    //contentSecurityPolicy:{'connect-src':"'self' wss://*.firebaseio.com"},
    firebase:{
      apiKey: "AIzaSyB9Am7nhEoud0OAUR6JckDqPSipsMCH1Ug",
      authDomain: "budgetapp-378d4.firebaseapp.com",
      databaseURL: "https://budgetapp-378d4.firebaseio.com",
      projectId: "budgetapp-378d4",
      storageBucket: "budgetapp-378d4.appspot.com",
      messagingSenderId: "429304776368"
    },
    torii:{
      sessionServiceName: 'session'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
     ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
