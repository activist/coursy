'use strict';


// Declare app level module which depends on filters, and services
var coursyApp = angular.module('coursyApp', [
	  'ngRoute',
	  'coursyApp.filters',
	  'coursyApp.services',
	  'coursyApp.directives',
	  'coursyApp.controllers'
	]).
	config(['$routeProvider', function($routeProvider) {

		$routeProvider.when('/',
						{
							templateUrl: 'partials/main.html',
							controller: 'MainController'
						});

		$routeProvider.when('/view1', 
						{ 
							templateUrl: 'partials/partial1.html',
							controller: 'MyCtrl1'
						});

		$routeProvider.when('/view2', 
						{
							templateUrl: 'partials/partial2.html',
							controller: 'MyCtrl2'
						});
		$routeProvider.otherwise({redirectTo: '/'});
	}]);
