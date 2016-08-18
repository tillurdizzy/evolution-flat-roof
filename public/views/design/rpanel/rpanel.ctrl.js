'use strict';
angular.module('app').controller('RpanelCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc'];

function myFunction($scope,SharedSrvc) { 
	var vm =this;
	
	var S = SharedSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};

	// Extract id from user Selected Object
	function getSelectData(){
		
	};

	// Set Selected Object from saved data
	function setSelectData(){
		
	};

	function pushToShared(){
		getSelectData();
		S.pushData(vm.PARAMS,'RPANEL');
	};

	function pullFromShared(){
		vm.JobID = S.selectedJobID;
        vm.JOB = S.selectedJob;
		vm.PARAMS = S.returnData('RPANEL');
		setSelectData();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
    });

};