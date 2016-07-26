'use strict';
angular.module('app').controller('MembraneCtrl', myFunction);

myFunction.$inject = ['ListSrvc','SharedSrvc'];

function myFunction($scope,ListSrvc,SharedSrvc) { 
	var vm =this;
	vm.L = ListSrvc;
	var S = SharedSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};

	// Extract id from user Selected Object
	function getSelectData(){
		vm.PARAMS.membrane = vm.SELECT.membrane.id;
		vm.PARAMS.thickness = vm.SELECT.thickness.id;
	};

	// Set Selected Object from saved data
	function setSelectData(){
		vm.SELECT.membrane = vm.L.returnObjById(vm.L.membrane,vm.PARAMS.membrane);
		vm.SELECT.thickness = vm.L.returnObjById(vm.L.membraneThickness,vm.PARAMS.thickness);
	};

	function pushToShared(){
		getSelectData();
		S.pushData(vm.PARAMS,'MEMBRN');
	};

	function pullFromShared(){
		vm.PARAMS = S.returnData('MEMBRN');
		setSelectData();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
    });

};