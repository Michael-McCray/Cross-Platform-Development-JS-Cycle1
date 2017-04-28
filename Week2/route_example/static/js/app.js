angular.module("example-app",[ "ngRoute" ])
	.config(function($routeProvider){
		$routeProvider
			.when("/",{
				templateUrl: "templates/main.html"
			})
			.when("/red",{
				templateUrl: "templates/red.html"
			})
			.when("/blue",{
				templateUrl: "templates/blue.html"
			})

	})
	.controller("someController", function() {



	})