'use strict';
angular.module('app').controller('HVACCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc'];

function myFunction($scope,SharedSrvc) { 
	var vm = this;
	vm.S = SharedSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};

	vm.DOM = {};

	// Counters
	vm.hvacSizeCount = 0;
	
	
	function initView() {
        vm.hvacSizeCount = vm.PARAMS.UNITS.length;
    };

 	function pushToShared() {
        vm.S.pushData(vm.PARAMS, 'HVAC');
    };

    function pullFromShared() {
        vm.PARAMS = vm.S.returnData('HVAC');
        initView();
    };

    $scope.$on("$destroy", function() {
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
        vm.JobID = vm.S.selectedJobID;
        vm.JOB = vm.S.selectedJob;
        pullFromShared();
    });

    $scope.$watch('Ctrl.hvacSizeCount', function() {
        var currentCount = vm.PARAMS.UNITS.length;
        if (vm.hvacSizeCount > currentCount) {
            vm.PARAMS.UNITS.push({qty:"0",foorprintX:"0",footprintY:"0"});
        } else if (vm.hvacSizeCount < currentCount) {
            vm.PARAMS.UNITS.pop();
        }
    });

    

};