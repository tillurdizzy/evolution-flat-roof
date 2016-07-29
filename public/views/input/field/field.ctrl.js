'use strict';
angular.module('app').controller('FieldCtrl', myFunction);

myFunction.$inject = ['$scope','ListSrvc','SharedSrvc'];

function myFunction($scope,ListSrvc,SharedSrvc) { 
	var vm =this;
	vm.L = ListSrvc;
	var S = SharedSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};

	// Extract the string to be saved from the selected item in dataProvider
	function getSelectData(){
		
	};

	
	function initView(){
		
	};

	function pushToShared(){
		getSelectData();
		S.pushData(vm.PARAMS,'FIELD');
	};

	function pullFromShared(){
		vm.PARAMS = S.returnData('FIELD');
		initView();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
    });

};