'use strict';

(function() {

	var MainController = function($scope) {

		$scope.courses = 
		[{
			name: "Dansband - korleis bli ein racer",
			instructors : [
				{ name : "Christer Sjøgren" }
			],
			date : "23/11/14",
			location: {
						venueName : "Hotel Norge",
						address : "Derja 23",
						zipcode : "5223",
						city: "Bergen"
					}
		},
		{
			name: "Et kurs er bra",
			instructors : [
				{ name : "Polly Petra" }
			],
			date : "23/11/14",
			location: {
						venueName : "Hotel Lala",
						address : "Derja 23",
						zipcode : "5223",
						city: "Bergen"
					}
		}];
	};

	angular.module("coursyApp.controllers").controller("MainController", MainController);

}());
