// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var belfastsalah = {
  constants: angular.module('belfastsalah.constants', []),
  controllers: angular.module('belfastsalah.controllers', ['belfastsalah.constants']),
  services: angular.module('belfastsalah.services', ['belfastsalah.constants', 'angularMoment']),
  filters: angular.module('belfastsalah.filters', [])
};

belfastsalah.app = angular.module('belfastsalah', ['ionic', 'belfastsalah.controllers', 'belfastsalah.services', 'belfastsalah.constants', 'belfastsalah.filters', 'angularMoment', 'ngCordova'])
.run(function($ionicPlatform, Ticker, Notify) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // start the time ticker
    Ticker.start();
    Notify.cancelAll();
    Notify.scheduleDay();
    
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.today', {
    url: '/today',
    views: {
      'tab-today': {
        templateUrl: 'templates/tab-today.html',
        controller: 'TodayCtrl'
      }
    }
  })

  .state('tab.selectMonth', {
      url: '/month',
      views: {
        'tab-month': {
          templateUrl: 'templates/tab-select-month.html'
        }
      }
    })
  .state('tab.month', {
      url: '/month/:month',
      views: {
        'tab-month': {
          templateUrl: 'templates/tab-month.html',
          controller: 'MonthCtrl'
        }
      }
    })
  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/today');

});
