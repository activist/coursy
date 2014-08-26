'use strict';

coursyApp.controller('MainController', function($scope, courseService) {

	courseService.courses()
				.then(function(data) {
					console.log(data);
					$scope.courses = data;
				});
});