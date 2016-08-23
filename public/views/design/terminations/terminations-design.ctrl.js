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
		vm.wallTypeCount = getWallTermCount();
	}

	function getWallTermCount(){
		var objLength = Object.keys(vm.PARAMS).length;
		var count = 0;
		if(objLength != 0){
			if(vm.PARAMS.WALLTERM != undefined){
				count = vm.PARAMS.WALLTERM.length;
			}
		}
		return count;
	};

	function pushToShared(){
		formatForStorage();
		vm.S.pushData(vm.PARAMS,'TERMINATIONS');
	};

	function pullFromShared(){
		vm.JobID = vm.S.returnSelectedJobID();
		vm.JOB = vm.S.returnSelectedJob();
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
        var currentCount = getWallTermCount();
        if (vm.wallTypeCount > currentCount) {
            vm.PARAMS.WALLTERM.push({type:'',length:'0'});
        } else if (vm.wallTypeCount < currentCount) {
            vm.PARAMS.WALLTERM.pop();
        }
    });

};