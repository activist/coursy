'use strict';


coursyApp.directive('courseInfo', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'partials/directives/courseinfo.html'
	};

});