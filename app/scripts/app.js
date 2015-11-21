'use strict';

/**
 * @ngdoc overview
 * @name driveBuyApp
 * @description
 * # driveBuyApp
 *
 * Main module of the application.
 */
angular
  .module('driveBuyApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
