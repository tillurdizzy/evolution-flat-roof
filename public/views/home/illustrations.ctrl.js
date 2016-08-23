angular.module('app').controller('IllusCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc','$state'];

function myFunction($scope,SharedSrvc,$state) { 
	var vm = this;
	var S = SharedSrvc;
	var traceMe = true;
	var ME = "IllusCtrl: ";
	vm.gallery = "edge";
	vm.gallery_dp = ["edge","wall","cap","drains"];
	
};