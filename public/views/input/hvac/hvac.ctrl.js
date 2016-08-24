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
	
	vm.clearInput = function(){
        vm.PARAMS = vm.S.setHVAC();
        initView();
    };

	function initView() {
        vm.hvacSizeCount = getUnitCount();
    };

    function getUnitCount(){
        var objLength = Object.keys(vm.PARAMS).length;
        var count = 0;
        if(objLength != 0){
            if(vm.PARAMS.UNITS != undefined){
                count = vm.PARAMS.UNITS.length;
            }
        }
        return count;
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
        vm.JobID = vm.S.returnSelectedJobID();
        vm.JOB = vm.S.returnSelectedJob();
        pullFromShared();
    });

    $scope.$watch('Ctrl.hvacSizeCount', function() {
        var currentCount = getUnitCount();
        if (vm.hvacSizeCount > currentCount) {
            vm.PARAMS.UNITS.push({qty:"0",foorprintX:"0",footprintY:"0"});
        } else if (vm.hvacSizeCount < currentCount) {
            vm.PARAMS.UNITS.pop();
        }
    });

    

};