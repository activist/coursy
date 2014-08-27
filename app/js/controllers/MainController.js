'use strict';

coursyApp.controller('MainController', function($scope, courseService) {

	courseService.courses()
				.then(function(data) {
					console.log(data);
					$scope.courses = data;
				});

	$scope.newcourse = {
		name: "",
		date: "",
		description: "",
		instructors: []
	};

	$scope.instructor = "";


	$scope.saveCourse = function(course, isValid) {
		if(isValid) {
			console.log("Saving course " + course.name);
			courseService.save(course);
			$scope.courses.push(course);

			$scope.newcourse = {
				name: "",
				date: "",
				description: "",
				instructors: []
			};
			$scope.instructor = "";

		} else {
			console.log("Not valid form.");
		}
	};


	$scope.addInstructor = function(instructor) {
		if(!instructor || !instructor.name || instructor.name === "") {
			return;
		}
		$scope.newcourse.instructors.push(instructor);
		$scope.instructor = "";
	};

	$scope.isValidInstructorName = function(instructorName) {
		if(!instructorName || instructorName === "") {
			return false;
		}
		return instructorName.length > 0;
	}

});