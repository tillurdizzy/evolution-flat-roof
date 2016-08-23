'use strict';
angular.module('app').controller('TermsCtrl', myFunction);

myFunction.$inject = ['$scope','$state','ListSrvc','SharedSrvc'];

function myFunction($scope,$state,ListSrvc,SharedSrvc) { 
	var vm = this;
	vm.L = ListSrvc;
	vm.S = SharedSrvc;
	vm.SELECT = {};
	vm.PARAMS = {};
	vm.DOM = {};
	vm.currentNavItem = 'edge';
	vm.capMetalCount = 0;

	vm.goNav = function(st){
		$state.transitionTo(st);
	};

	// Extract the string to be saved from the selected item in dataProvider
	function formatForStorage(){
		
		
	};
	
	
	function initView(){
		vm.capMetalCount = getParapetCount();
	};

	function getParapetCount(){
		var objLength = Object.keys(vm.PARAMS).length;
		var count = 0;
		if(objLength != 0){
			if(vm.PARAMS.PARAPET != undefined){
				count = vm.PARAMS.PARAPET.length;
			}
		}
		return count;
	};

	function pushToShared(){
		formatForStorage();
		vm.S.pushData(vm.PARAMS,'TERMINATIONS');
	};

	function pullFromShared(){
		vm.PARAMS = vm.S.returnData('TERMINATIONS');
		initView();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
    	vm.JobID = vm.S.returnSelectedJobID();
		vm.JOB = vm.S.returnSelectedJob();
 		pullFromShared();
    });

    $scope.$watch('Ctrl.capMetalCount', function() {
        var currentCount = getParapetCount();
        if (vm.capMetalCount > currentCount) {
            vm.PARAMS.PARAPET.push({ length: '0', stretchout: '0',cleated:'No'});
        } else if (vm.capMetalCount < currentCount) {
            vm.PARAMS.PARAPET.pop();
        }
    });

};