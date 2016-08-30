'use strict';
angular.module('app').controller('BaseCtrl', myFunction);

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
	vm.existingLayers = [];
	
	vm.clearInput = function(){
        vm.PARAMS = S.setBase();
        initView();
    };
	
	function initView(){
		vm.layerCount = vm.PARAMS.LAYERS.length;
		vm.existingLayers = [];
		if(vm.LAYERS.layerOne.layer != ""){
			vm.existingLayers.push({layerNum:"1",material:vm.LAYERS.layerOne});
		};

		if(vm.LAYERS.layerTwo.layer != ""){
			vm.existingLayers.push({layerNum:"2",material:vm.LAYERS.layerTwo});
		};

		if(vm.LAYERS.layerThree.layer != ""){
			vm.existingLayers.push({layerNum:"3",material:vm.LAYERS.layerThree});
		};

		if(vm.LAYERS.layerFour.layer != ""){
			vm.existingLayers.push({layerNum:"4",material:vm.LAYERS.layerFour});
		};

		if(vm.LAYERS.layerFive.layer != ""){
			vm.existingLayers.push({layerNum:"5",material:vm.LAYERS.layerFive});
		};

		if(vm.LAYERS.layerSix.layer != ""){
			vm.existingLayers.push({layerNum:"6",material:vm.LAYERS.layerSix});
		};

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
    	vm.JobID = S.returnSelectedJobID();
		vm.JOB = S.returnSelectedJob();
 		pullFromShared();
    });

     $scope.$watch('Ctrl.layerCount', function() {
        var currentCount = vm.PARAMS.LAYERS.length;
        if (vm.layerCount > currentCount) {
            vm.PARAMS.LAYERS.push({ material: '', thickness: '', size: '4x8'});
        } else if (vm.layerCount < currentCount) {
            vm.PARAMS.LAYERS.pop();
        }
    });

};