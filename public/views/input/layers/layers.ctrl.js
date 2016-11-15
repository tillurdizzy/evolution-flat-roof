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
		clearLayers(vm.SELECT.layerOne.id,1);
		if(vm.PARAMS.layerOne.layer!='' && vm.PARAMS.layerOne.layer!='RPANEL'){
			vm.DOM.layerTwo = true;
		}
	};

	vm.selectLayerTwo=function(){
		vm.PARAMS.layerTwo.layer = vm.SELECT.layerTwo.id;
		clearLayers(vm.SELECT.layerTwo.id,2);
		vm.DOM.layerThree = vm.PARAMS.layerTwo.layer==""?false:true;
	};

	vm.selectLayerThree=function(){
		vm.PARAMS.layerThree.layer = vm.SELECT.layerThree.id;
		clearLayers(vm.SELECT.layerThree.id,3);
		vm.DOM.layerFour = vm.PARAMS.layerThree.layer==""?false:true;
	};

	vm.selectLayerFour=function(){
		vm.PARAMS.layerFour.layer = vm.SELECT.layerFour.id;
		clearLayers(vm.SELECT.layerFour.id,4);
		vm.DOM.layerFive =  vm.PARAMS.layerFour.layer==""?false:true;
	};

	vm.selectLayerFive=function(){
		vm.PARAMS.layerFive.layer = vm.SELECT.layerFive.id;
		clearLayers(vm.SELECT.layerFive.id,5);
		vm.DOM.layerSix = vm.PARAMS.layerFive.layer==""?false:true;
	};

	vm.selectLayerSix=function(){
		vm.PARAMS.layerSix.layer = vm.SELECT.layerSix.id;

	};

	vm.clearInput = function(){
		vm.PARAMS = vm.S.setLayers();
		initView();
	};

	function clearLayers(id,layer){
		if(id == ""){
			if(layer == 1){
				vm.DOM.layerTwo = false;
				vm.DOM.layerThree = false;
				vm.DOM.layerFour = false;
				vm.DOM.layerFive = false;
				vm.DOM.layerSix = false;
				vm.PARAMS.layerTwo.thickness = "";
				vm.PARAMS.layerThree.thickness = "";
				vm.PARAMS.layerFour.thickness = "";
				vm.PARAMS.layerFive.thickness = "";
				vm.PARAMS.layerSix.thickness = "";
				vm.PARAMS.layerTwo.layer = "";
				vm.PARAMS.layerThree.layer = "";
				vm.PARAMS.layerFour.layer = "";
				vm.PARAMS.layerFive.layer = "";
				vm.PARAMS.layerSix.layer = "";
			}else if (layer == 2){
				vm.DOM.layerThree = false;
				vm.DOM.layerFour = false;
				vm.DOM.layerFive = false;
				vm.DOM.layerSix = false;
				vm.PARAMS.layerTwo.thickness = "";
				vm.PARAMS.layerThree.thickness = "";
				vm.PARAMS.layerFour.thickness = "";
				vm.PARAMS.layerFive.thickness = "";
				vm.PARAMS.layerSix.thickness = "";
				vm.PARAMS.layerThree.layer = "";
				vm.PARAMS.layerFour.layer = "";
				vm.PARAMS.layerFive.layer = "";
				vm.PARAMS.layerSix.layer = "";
			}else if (layer == 3){
				vm.DOM.layerFour = false;
				vm.DOM.layerFive = false;
				vm.DOM.layerSix = false;
				vm.PARAMS.layerThree.thickness = "";
				vm.PARAMS.layerFour.thickness = "";
				vm.PARAMS.layerFive.thickness = "";
				vm.PARAMS.layerSix.thickness = "";
				vm.PARAMS.layerFour.layer = "";
				vm.PARAMS.layerFive.layer = "";
				vm.PARAMS.layerSix.layer = "";
			}else if (layer == 4){
				vm.DOM.layerFive = false;
				vm.DOM.layerSix = false;
				vm.PARAMS.layerFour.thickness = "";
				vm.PARAMS.layerFive.thickness = "";
				vm.PARAMS.layerSix.thickness = "";
				vm.PARAMS.layerFive.layer = "";
				vm.PARAMS.layerSix.layer = "";
			}else if (layer == 5){
				vm.DOM.layerSix = false;
				vm.PARAMS.layerSix.thickness = "";
			}
		}
	};
	
	
	function initView(){
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