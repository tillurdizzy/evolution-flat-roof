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
		vm.parapetWallCount = vm.PARAMS.WALLS.length;
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
        var currentCount = vm.PARAMS.WALLS.length;
        if (vm.parapetWallCount > currentCount) {
            vm.PARAMS.WALLS.push({ height: '', length: '', width: ''});
        } else if (vm.parapetWallCount < currentCount) {
            vm.PARAMS.WALLS.pop();
        }
    });

};