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
		var x = vm.gridPosition.substr(0,1);
		switch(x){
			case "A":vm.PARAMS.MIL = 36;break;
			case "B":vm.PARAMS.MIL = 45;break;
			case "C":vm.PARAMS.MIL = 50;break;
			case "D":vm.PARAMS.MIL = 60;break;
			case "E":vm.PARAMS.MIL = 80;break;
		}
		var y = vm.gridPosition.substr(1,1);
		switch(y){
			case "1":vm.PARAMS.CLASS = "TPO";break;
			case "2":vm.PARAMS.CLASS = "PVC";break;
			case "3":vm.PARAMS.CLASS = "E4434";break;
			case "4":vm.PARAMS.CLASS = "D6754";break;
		}
		vm.PARAMS.GRIDPOS = vm.gridPosition;
	};

	vm.clearInput = function(){
        vm.PARAMS = S.setMembrane();
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