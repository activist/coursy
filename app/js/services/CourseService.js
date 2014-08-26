
coursyApp.value("courseList", []);

//TODO: remove courseList global later on
coursyApp.service("courseService", function($http, courseList) {
	
	return {
		courses : function() {
			return $http.get('/app/data/courses.json')
						.then(function(resp) {
							courseList.concat(resp.data);
							console.log("Courselist; " + courseList);
							return courseList.concat(resp.data);
						});
		},

		save : function(course) {
			courseList.push(course);
			console.log("Saved course: " + course.name);
		}
	};

});
