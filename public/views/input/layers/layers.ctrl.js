'use strict';
angular.module('app').controller('LayersCtrl', myFunction);

myFunction.$inject = ['$scope','ListSrvc','SharedSrvc'];

function myFunction($scope,ListSrvc,SharedSrvc) { 
	var vm = this;
	vm.L = ListSrvc;
	vm.S = SharedSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};

	vm.DOM = {};

	vm.rPanel = {};
	
	vm.selectLayerOne=function(){
		vm.PARAMS.layerOne.layer = vm.SELECT.layerOne.id;
		if(vm.PARAMS.layerOne.layer!='' && vm.PARAMS.layerOne.layer!='RPANEL'){
			vm.DOM.layerTwo = true;
		}else{
			vm.DOM.layerTwo = false;
			vm.DOM.layerThree = false;
			vm.DOM.layerFour = false;
			vm.DOM.layerFive = false;
			vm.DOM.layerSix = false;
		}
	};

	vm.selectLayerTwo=function(){
		vm.PARAMS.layerTwo.layer = vm.SELECT.layerTwo.id;
		vm.DOM.layerThree = vm.PARAMS.layerTwo.layer==""?false:true;
	};

	vm.selectLayerThree=function(){
		vm.PARAMS.layerThree.layer = vm.SELECT.layerThree.id;
		vm.DOM.layerFour = vm.PARAMS.layerThree.layer==""?false:true;
	};

	vm.selectLayerFour=function(){
		vm.PARAMS.layerFour.layer = vm.SELECT.layerFour.id;
		vm.DOM.layerFive =  vm.PARAMS.layerFour.layer==""?false:true;
	};

	vm.selectLayerFive=function(){
		vm.PARAMS.layerFive.layer = vm.SELECT.layerFive.id;
		vm.DOM.layerSix = vm.PARAMS.layerFive.layer==""?false:true;
	};

	vm.selectLayerSix=function(){
		vm.PARAMS.layerSix.layer = vm.SELECT.layerSix.id;
	};
	
	
	function initView(){
		// Parse the saved data to set the view elements

		// Set selected dataObj for Select input components
		vm.SELECT.layerOne = vm.L.returnObjById(vm.L.roofLayersA,vm.PARAMS.layerOne.layer);
		vm.SELECT.layerTwo = vm.L.returnObjById(vm.L.roofLayersB,vm.PARAMS.layerTwo.layer);
		vm.SELECT.layerThree = vm.L.returnObjById(vm.L.roofLayersB,vm.PARAMS.layerThree.layer);
		vm.SELECT.layerFour = vm.L.returnObjById(vm.L.roofLayersB,vm.PARAMS.layerFour.layer);
		vm.SELECT.layerFive = vm.L.returnObjById(vm.L.roofLayersB,vm.PARAMS.layerFive.layer);
		vm.SELECT.layerSix = vm.L.returnObjById(vm.L.roofLayersB,vm.PARAMS.layerSix.layer);

		

		// Set ng-view booleans
		vm.DOM.layerTwo = true;
		vm.DOM.layerThree = true;
		vm.DOM.layerFour = true;
		vm.DOM.layerFive = true;
		vm.DOM.layerSix = true;

		if(vm.PARAMS.layerOne.layer == '' || vm.PARAMS.layerOne=='RPANEL'){
			vm.DOM.layerTwo = false;
		}
		if(vm.PARAMS.layerTwo.layer == ''){
			vm.DOM.layerThree = false;
		}
		if(vm.PARAMS.layerThree.layer == ''){
			vm.DOM.layerFour = false;
		}
		if(vm.PARAMS.layerFour.layer == ''){
			vm.DOM.layerFive = false;
		}
		if(vm.PARAMS.layerFive.layer == ''){
			vm.DOM.layerSix = false;
		}

	};

	function pushToShared(){
		vm.S.pushData(vm.PARAMS,'LAYERS');
	};

	function pullFromShared(){
		vm.PARAMS = vm.S.returnData('LAYERS');
		initView();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
    	vm.JobID = vm.S.returnSelectedJobID();
		vm.JOB = vm.S.returnSelectedJob();
 		pullFromShared();
    });

};