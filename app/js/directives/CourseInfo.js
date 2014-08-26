'use strict';


coursyApp.directive('courseInfo', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/courseinfo.html',
		scope: {
			course : '='
		}
	};

});