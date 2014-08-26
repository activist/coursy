'use strict';


coursyApp.controller('EditCourseController', function($scope, courseService) {

	$scope.course = {
		name: "",
		date: "",
		instructors: []
	};

	$scope.instructor = "";


	$scope.saveCourse = function(course, isValid) {
		if(isValid) {
			console.log("Saving course " + course.name);
			courseService.save(course);
			$scope.courses.push(course);

			$scope.course = {
				name: "",
				date: "",
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
		$scope.course.instructors.push(instructor);
		$scope.instructor = "";
	};

	$scope.isValidInstructorName = function(instructorName) {
		if(!instructorName || instructorName === "") {
			return false;
		}
		return instructorName.length > 0;
	}



});