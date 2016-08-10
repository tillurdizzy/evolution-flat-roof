angular.module('app').controller('CostCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc'];

function myFunction($scope,SharedSrvc) { 
	var vm = this;
	

	vm.JobID = "";

	function xxx(){
		console.log('Input ID = '+ vm.JobID);
	}




	vm.xxx = xxx;



};