'use strict';
angular.module('app').controller('MembraneCtrl', myFunction);

myFunction.$inject = ['$scope','ListSrvc','SharedSrvc'];

function myFunction($scope,ListSrvc,SharedSrvc) { 
	var vm =this;
	vm.L = ListSrvc;
	var S = SharedSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};

	// Extract id from user Selected Object
	function getSelectData(){
		
	};

	// Set Selected Object from saved data
	function setSelectData(){
		
	};

	function pushToShared(){
		getSelectData();
		S.pushData(vm.PARAMS,'MEMBRANE');
	};

	function pullFromShared(){
		vm.PARAMS = S.returnData('MEMBRANE');
		setSelectData();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
    });

};