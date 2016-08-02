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

	// Extract the string to be saved from the selected item in dataProvider
	function getSelectData(){
		
		
	};
	vm.goNav = function(st){
		$state.transitionTo(st);
	};
	
	function initView(){
		// Parse the saved data to set the view elements

		
	

	};

	function pushToShared(){
		getSelectData();
		vm.S.pushData(vm.PARAMS,'EDGES');
	};

	function pullFromShared(){
		vm.PARAMS = vm.S.returnData('EDGES');
		initView();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
    });

};