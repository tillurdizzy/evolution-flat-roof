'use strict';
angular.module('app').controller('ISO_Ctrl', myFunction);

myFunction.$inject = ['$scope','ListSrvc','SharedSrvc'];

function myFunction($scope,ListSrvc,SharedSrvc) { 
	var vm =this;
	vm.L = ListSrvc;
	var S = SharedSrvc;

	vm.layerCount = 0;

	vm.SELECT = {};
	vm.PARAMS = {};
	vm.FIELD = {};
	vm.LAYERS = {};

	
	
	function initView(){
		vm.layerCount = vm.PARAMS.LAYERS.length;
	};

	function pushToShared(){
		S.pushData(vm.PARAMS,'ROOFBASE');
	};

	function pullFromShared(){
		vm.PARAMS = S.returnData('ROOFBASE');
		vm.LAYERS = S.returnData('LAYERS');
		vm.FIELD = S.returnData('FIELD');
		initView();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
    });

     $scope.$watch('Ctrl.layerCount', function() {
        var currentCount = vm.PARAMS.LAYERS.length;
        if (vm.layerCount > currentCount) {
            vm.PARAMS.LAYERS.push({ material: '', thickness: '', size: ''});
        } else if (vm.layerCount < currentCount) {
            vm.PARAMS.LAYERS.pop();
        }
    });

};