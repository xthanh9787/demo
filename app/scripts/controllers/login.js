'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('LoginController', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 
    $scope.login = function () {
        alert('logged in!');
    };
  });
