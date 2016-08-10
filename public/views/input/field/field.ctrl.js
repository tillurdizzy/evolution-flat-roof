'use strict';
angular.module('app').controller('FieldCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc'];

function myFunction($scope,SharedSrvc) { 
	var vm =this;
	var S = SharedSrvc;

	vm.PARAMS = {};
	vm.parapetWallCount = 0;

	// Extract the string to be saved from the selected item in dataProvider
	function getSelectData(){
		
	};

	
	function initView(){
		vm.parapetWallCount = vm.PARAMS.PARAPET.length;
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

    $scope.$watch('Ctrl.parapetWallCount', function() {
        var currentCount = vm.PARAMS.PARAPET.length;
        if (vm.parapetWallCount > currentCount) {
            vm.PARAMS.PARAPET.push({ height: '', length: '', width: ''});
        } else if (vm.parapetWallCount < currentCount) {
            vm.PARAMS.PARAPET.pop();
        }
    });

};