import angular from 'angular';
import './root.component.js';
import './gifs.component.js';

angular
  .module('angularJS-app')
  .config(($stateProvider, $locationProvider) => {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    });

    $stateProvider
      .state('root', {
        url: '/angularJS',
        template: '<root />',
      })

      .state('root.gifs', {
        url: '/gifs',
        template: '<gifs />',
      })
  });