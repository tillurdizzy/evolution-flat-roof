'use strict';
angular.module('app').controller('RpanelCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc'];

function myFunction($scope,SharedSrvc) { 
	var vm =this;
	
	var S = SharedSrvc;
	vm.PARAMS = {};

	
	// Set Selected Object from saved data
	function initView(){
		
	};

	function pushToShared(){
		
		//S.pushData(vm.PARAMS,'RPANEL');
	};

	function pullFromShared(){
		vm.JobID = S.returnSelectedJobID();
		vm.JOB = S.returnSelectedJob();
		vm.PARAMS = S.returnData('RPANEL');
		vm.LAYERS = S.returnData('LAYERS');
		initView();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
    });

};