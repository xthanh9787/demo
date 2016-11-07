'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:ContactController
 * @description
 * # ContactCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
	.controller('ContactController', function ($scope) {
	this.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];
	$scope.success=false;
    $scope.submitForm = function (isValid)
    {
		$scope.success=true;
    }
  });
