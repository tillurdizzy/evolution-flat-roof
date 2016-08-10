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
		vm.PARAMS.layerOne = vm.SELECT.layerOne.id;
		if(vm.PARAMS.layerOne!='NONE' && vm.PARAMS.layerOne!='RPANEL'){
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
		vm.PARAMS.layerTwo = vm.SELECT.layerTwo.id;
		vm.DOM.layerThree = vm.PARAMS.layerTwo=="NONE"?false:true;
	};

	vm.selectLayerThree=function(){
		vm.PARAMS.layerThree = vm.SELECT.layerThree.id;
		vm.DOM.layerFour =  vm.PARAMS.layerThree=="NONE"?false:true;
	};

	vm.selectLayerFour=function(){
		vm.PARAMS.layerFour = vm.SELECT.layerFour.id;
		vm.DOM.layerFive =  vm.PARAMS.layerFour=="NONE"?false:true;
	};

	vm.selectLayerFive=function(){
		vm.PARAMS.layerFive = vm.SELECT.layerFive.id;
		vm.DOM.layerSix =  vm.PARAMS.layerFive=="NONE"?false:true;
	};

	vm.selectLayerSix=function(){
		vm.PARAMS.layerSix = vm.SELECT.layerSix.id;
	};
	

	// Extract the string to be saved from the selected item in dataProvider
	function getSelectData(){
		//  PARAMS are updated real-time for this view
		
	};

	
	function initView(){
		// Parse the saved data to set the view elements

		// Set selected dataObj for Select input components
		vm.SELECT.layerOne = vm.L.returnObjById(vm.L.roofLayersA,vm.PARAMS.layerOne);
		vm.SELECT.layerTwo = vm.L.returnObjById(vm.L.roofLayersB,vm.PARAMS.layerTwo);
		vm.SELECT.layerThree = vm.L.returnObjById(vm.L.roofLayersB,vm.PARAMS.layerThree);
		vm.SELECT.layerFour = vm.L.returnObjById(vm.L.roofLayersB,vm.PARAMS.layerFour);
		vm.SELECT.layerFive = vm.L.returnObjById(vm.L.roofLayersB,vm.PARAMS.layerFive);
		vm.SELECT.layerSix = vm.L.returnObjById(vm.L.roofLayersB,vm.PARAMS.layerSix);

		// Set ng-view booleans
		vm.DOM.layerTwo = true;
		vm.DOM.layerThree = true;
		vm.DOM.layerFour = true;
		vm.DOM.layerFive = true;
		vm.DOM.layerSix = true;

		if(vm.PARAMS.layerOne == '' || vm.PARAMS.layerOne=='NONE' || vm.PARAMS.layerOne=='RPANEL'){
			vm.DOM.layerTwo = false;
		}

		if(vm.PARAMS.layerTwo == '' || vm.PARAMS.layerTwo=='NONE'){
			vm.DOM.layerThree = false;
		}
		if(vm.PARAMS.layerThree == '' || vm.PARAMS.layerThree=='NONE'){
			vm.DOM.layerFour = false;
		}
		if(vm.PARAMS.layerFour == '' || vm.PARAMS.layerFour=='NONE'){
			vm.DOM.layerFive = false;
		}
		if(vm.PARAMS.layerFive == '' || vm.PARAMS.layerFive=='NONE'){
			vm.DOM.layerSix = false;
		}

	};

	function pushToShared(){
		getSelectData();
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
 		pullFromShared();
    });

};