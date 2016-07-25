'use strict';
angular.module('app').controller('NavCtrl',myFunction);

myFunction.$inject = ['$state','$location'];

function myFunction($state,$location) { 
	
	var Me = this;
	
	Me.goNav = function(st){
		$state.transitionTo(st);
	};

	Me.isCurrentPath = function (path) {
        var x = $location.path();
        return $location.path() == path;
    };


 };