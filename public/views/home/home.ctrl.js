angular.module('app').controller('HomeCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc'];

function myFunction($scope,SharedSrvc) { 
	var vm = this;
	vm.gallery = "edge";
	vm.gallery_dp = ["edge","wall","cap","drains"];

	vm.JobID = "";

	function submitJobID(){
		console.log('Input ID = '+ vm.JobID);
	}




	vm.submitJobID = submitJobID;



};