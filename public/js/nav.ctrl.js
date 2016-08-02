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
        var xSplit = x.split('/')
        var y = xSplit[1];
       
        return y == path;
    };


 };