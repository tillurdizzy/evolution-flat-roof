'use strict';
angular.module('app').controller('ISO_Ctrl', myFunction);

myFunction.$inject = ['$scope','ListSrvc','SharedSrvc'];

function myFunction($scope,ListSrvc,SharedSrvc) { 
	var vm =this;
	vm.L = ListSrvc;
	var S = SharedSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};

	// Extract id from user Selected Object
	function getSelectData(){
		vm.PARAMS.iso = vm.SELECT.iso.id;
		vm.PARAMS.adhere = vm.SELECT.adhere.id;
	};

	// Set Selected Object from saved data
	function setSelectData(){
		vm.SELECT.iso = vm.L.returnObjById(vm.L.ISO,vm.PARAMS.iso);
		vm.SELECT.adhere = vm.L.returnObjById(vm.L.adhereMethod,vm.PARAMS.adhere);
	};

	function pushToShared(){
		getSelectData();
		S.pushData(vm.PARAMS,'ISO');
	};

	function pullFromShared(){
		vm.PARAMS = S.returnData('ISO');
		setSelectData();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
    });

};