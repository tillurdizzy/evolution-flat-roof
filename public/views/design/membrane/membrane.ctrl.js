'use strict';
angular.module('app').controller('MembraneCtrl', myFunction);

myFunction.$inject = ['$scope','ListSrvc','SharedSrvc'];

function myFunction($scope,ListSrvc,SharedSrvc) { 
	var vm =this;
	vm.L = ListSrvc;
	var S = SharedSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};
	vm.FIELD = {};
	vm.gridPosition = "A1";

	// Extract id from user Selected Object
	function formatForStorage(){
		switch(vm.gridPosition.substr(0,1)){
			case "A":vm.PARAMS.THICKNESS = 45;
			case "B":vm.PARAMS.THICKNESS = 45;
			case "C":vm.PARAMS.THICKNESS = 45;
			case "D":vm.PARAMS.THICKNESS = 45;
		}
		switch(vm.gridPosition.substr(1,1)){
			case "1":vm.PARAMS.MEMBRANE = "TPO";
			case "2":vm.PARAMS.MEMBRANE = "PVC";
			case "3":vm.PARAMS.MEMBRANE = "E4434";
			case "4":vm.PARAMS.MEMBRANE = "E6722";
		}
		vm.PARAMS.GRIDPOS = vm.gridPosition;
	};

	vm.clearInput = function(){
        vm.PARAMS = vm.S.setMembrane();
        initView();
    };

	// Set Selected Object from saved data
	function initView(){
		vm.gridPosition = vm.PARAMS.GRIDPOS;
	};

	function pushToShared(){
		formatForStorage();
		S.pushData(vm.PARAMS,'MEMBRANE');
	};

	function pullFromShared(){
		vm.PARAMS = S.returnData('MEMBRANE');
		vm.FIELD = S.returnData('FIELD');
		initView();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
    	vm.JobID = S.returnSelectedJobID();
		vm.JOB = S.returnSelectedJob();
 		pullFromShared();
    });

};