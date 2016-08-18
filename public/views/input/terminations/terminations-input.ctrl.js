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
		vm.capMetalCount = vm.PARAMS.PARAPET.length;
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
    	vm.JobID = vm.S.selectedJobID;
        vm.JOB = vm.S.selectedJob;
 		pullFromShared();
    });

    $scope.$watch('Ctrl.capMetalCount', function() {
        var currentCount = vm.PARAMS.PARAPET.length;
        if (vm.capMetalCount > currentCount) {
            vm.PARAMS.PARAPET.push({ length: '0', stretchout: '0',cleated:'No'});
        } else if (vm.capMetalCount < currentCount) {
            vm.PARAMS.PARAPET.pop();
        }
    });

};