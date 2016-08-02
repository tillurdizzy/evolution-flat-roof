'use strict';
angular.module('app').controller('TerminationsCtrl', myFunction);

myFunction.$inject = ['$scope','$state','ListSrvc','SharedSrvc'];

function myFunction($scope,$state,ListSrvc,SharedSrvc) { 
	var vm = this;
	vm.L = ListSrvc;
	vm.S = SharedSrvc;
	vm.SELECT = {};
	vm.PARAMS = {};
	vm.DOM = {};
	vm.currentNavItem = 'edge';
	
	vm.goNav = function(st){
		$state.transitionTo(st);
	};
	
	// Extract the string to be saved from the selected item in dataProvider
	function getSelectData(){
		vm.PARAMS.EDGETERM = vm.SELECT.edgeTermination.id;
		vm.PARAMS.CAPMETAL = vm.SELECT.capMetal.id;
	};

	
	function initView(){
		// Parse the saved data to set the view elements

		// Set selected dataObj for Select input components
		vm.SELECT.edgeTermination = vm.L.returnObjById(vm.L.edgeTermination,vm.PARAMS.EDGETERM);
		vm.SELECT.capMetal = vm.L.returnObjById(vm.L.twoThruFortyEight,vm.PARAMS.CAPMTL);
	

	};

	function pushToShared(){
		getSelectData();
		vm.S.pushData(vm.PARAMS,'PERIMITER');
	};

	function pullFromShared(){
		vm.PARAMS = vm.S.returnData('PERIMITER');
		initView();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
    });

};