'use strict';

coursyApp.directive('newCourse', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'partials/directives/newcourse.html'
	}
});