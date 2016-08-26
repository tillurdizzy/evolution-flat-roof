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

	vm.clearInput = function(){
        alert('Delete Terminations from their Input page.');
    };

   
	
	function initView(){
		vm.wallTypeCount = getWallTermCount();
	}

	function getWallTermCount(){
		var objLength = Object.keys(vm.PARAMS).length;
		var count = 0;
		if(objLength != 0){
			if(vm.PARAMS.DESIGN.WALLS != undefined){
				count = vm.PARAMS.DESIGN.WALLS.length;
			}
		}
		return count;
	};

	function pushToShared(){
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
 		
    });

    $scope.$watch('Ctrl.wallTypeCount', function() {
        var currentCount = getWallTermCount();
        if (vm.wallTypeCount > currentCount) {
            vm.PARAMS.DESIGN.WALLS.push({type:'',length:'0'});
        } else if (vm.wallTypeCount < currentCount) {
            vm.PARAMS.DESIGN.WALLS.pop();
        }
    });

};