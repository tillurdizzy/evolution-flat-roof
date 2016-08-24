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

	vm.clearInput = function(){
		switch(vm.currentNavItem){
			case 'edge':resetEdge();break;
			case 'wall'resetWall();:break;
			case 'cap':resetCap();break;
			case 'other':resetOther();break;
		}
    };

    function resetEdge(){
    	vm.PARAMS.PERIMETER = 0;
    };

    function resetWall(){
    	vm.PARAMS.WALL = 0;
    };

    function resetCap(){
    	vm.PARAMS.PARAPET = [];
    	initView();
    };

    function resetOther(){
    	vm.PARAMS.OTHER = { length:'0',description: '', cost: '0' };
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