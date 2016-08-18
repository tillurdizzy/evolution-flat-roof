'use strict';
angular.module('app').controller('TerminationsDesignCtrl', myFunction);

myFunction.$inject = ['$scope','$state','ListSrvc','SharedSrvc'];

function myFunction($scope,$state,ListSrvc,SharedSrvc) { 
	var vm = this;
	vm.L = ListSrvc;
	vm.S = SharedSrvc;
	vm.SELECT = {};
	vm.PARAMS = {};
	vm.DOM = {};
	vm.currentNavItem = 'edge';

	vm.wallTypeCount = 0;
	
	vm.goNav = function(st){
		$state.transitionTo(st);
	};
	
	function formatForStorage(){
		
	};

	function formatForControl(){
		
	};

	
	function initView(){
		vm.wallTypeCount = vm.PARAMS.WALLTERM.length;
		
	};

	function pushToShared(){
		formatForStorage();
		vm.S.pushData(vm.PARAMS,'TERMINATIONS');
	};

	function pullFromShared(){
		vm.JobID = vm.S.selectedJobID;
        vm.JOB = vm.S.selectedJob;
		vm.PARAMS = vm.S.returnData('TERMINATIONS');
		initView();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
 		formatForControl();
    });

    $scope.$watch('Ctrl.wallTypeCount', function() {
        var currentCount = vm.PARAMS.WALLTERM.length;
        if (vm.wallTypeCount > currentCount) {
            vm.PARAMS.WALLTERM.push({type:'',length:'0'});
        } else if (vm.wallTypeCount < currentCount) {
            vm.PARAMS.WALLTERM.pop();
        }
    });

};