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
		vm.parapetWallCount = getWallCount();
	};

	function getWallCount(){
		var objLength = Object.keys(vm.PARAMS).length;
		var count = 0;
		if(objLength != 0){
			if(vm.PARAMS.WALLS != undefined){
				count = vm.PARAMS.WALLS.length;
			}
		}
		return count;
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
    	vm.JobID = S.returnSelectedJobID();
		vm.JOB = S.returnSelectedJob();
 		pullFromShared();
    });

    $scope.$watch('Ctrl.parapetWallCount', function() {
        var currentCount = getWallCount();
        if (vm.parapetWallCount > currentCount) {
            vm.PARAMS.WALLS.push({ height: '', length: ''});
        } else if (vm.parapetWallCount < currentCount) {
            vm.PARAMS.WALLS.pop();
        }
    });

};