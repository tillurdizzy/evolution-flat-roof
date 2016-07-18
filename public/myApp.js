'use strict';
var app = angular.module('MyApp', ['ui.router','ngDialog','ngYoutubeEmbed','angularjs.media.directives','C172MOD']);

app.config(function($stateProvider, $urlRouterProvider) {
 	
 	$urlRouterProvider.otherwise("/home");
  	
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl:"views/home.html"
		})

		.state('grnd', {
			url: "/ground-school",
			templateUrl:"views/Grnd/toc.html"
		})

		.state('aircraft', {
			url: "/aircraft",
			templateUrl:"views/aircraft.html"
		})

		.state('acronyms', {
			url: "/acronyms",
			templateUrl:"views/Grnd/acronyms/acronyms.html"
		})

		.state('C172SP', {
			url: "/C172SP",
			templateUrl:"views/C172/container.html"
		})

		.state('C208B', {
			url: "/cessena-caravan",
			templateUrl:"views/C208B/container.html"
		})

		.state('C208B.overview', {
			url: "/overview",
			templateUrl:"views/C208B/overview.html"
		})

		.state('C208B.specs', {
			url: "/specs",
			templateUrl:"views/C208B/specs.html"
		})
		.state('C208B.tutorial', {
			url: "/tutorial",
			templateUrl:"views/C208B/tutorial.html"
		})

		.state('C208B.checklists', {
			url: "/checklists",
			templateUrl:"views/C208B/checklists.html"
		})

		.state('C208B.video', {
			url: "/video",
			templateUrl:"views/C208B/video.html"
		})

		.state('EMB110', {
			url: "/emb-110",
			templateUrl:"views/EMB110/container.html"
		})

		.state('EMB110.overview', {
			url: "/overview",
			templateUrl:"views/EMB110/overview.html"
		})

		.state('EMB110.specs', {
			url: "/specs",
			templateUrl:"views/EMB110/specs.html"
		})
		.state('EMB110.tutorial', {
			url: "/tutorial",
			templateUrl:"views/EMB110/tutorial.html"
		})

		.state('EMB110.checklists', {
			url: "/checklists",
			templateUrl:"views/EMB110/checklists.html"
		})

		.state('EMB110.video', {
			url: "/video",
			templateUrl:"views/EMB110/video.html"
		})
	
});	



