'use strict';
angular.module('app').controller('LayersCtrl', myFunction);

myFunction.$inject = ['ListSrvc','SharedSrvc'];

function myFunction(ListSrvc,SharedSrvc) { 
	var vm = this;
	vm.L = ListSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};

	vm.DOM = {};
	
	
	vm.selectLayerOne=function(){
		vm.PARAMS.layerOne = vm.SELECT.layerOne.id;
	};

	vm.selectLayerTwo=function(){
		vm.PARAMS.layerTwo = vm.SELECT.layerTwo.id;
		vm.DOM.layerThree = vm.PARAMS.layerTwo=="None"?false:true;
	};

	vm.selectLayerThree=function(){
		vm.PARAMS.layerThree = vm.SELECT.layerThree.id;
		vm.DOM.layerFour =  vm.PARAMS.layerThree=="None"?false:true;
	};

	vm.selectLayerFour=function(){
		vm.PARAMS.layerFour = vm.SELECT.layerFour.id;
		vm.DOM.layerFive =  vm.PARAMS.layerFour=="None"?false:true;
	};

	vm.selectLayerFive=function(){
		vm.PARAMS.layerFive = vm.SELECT.layerFive.id;
		vm.DOM.layerSix =  vm.PARAMS.layerFive=="None"?false:true;
	};

	vm.selectLayerSix=function(){
		vm.PARAMS.layerSix = vm.SELECT.layerSix.id;
	};

	

	var resetMe = function(){
		vm.SELECT = {
			layerOne:vm.L.roofLayers[0],
			layerTwo:vm.L.roofLayers[0],
			layerThree:vm.L.roofLayers[0],
			layerFour:vm.L.roofLayers[0],
			layerFive:vm.L.roofLayers[0],
			layerSix:vm.L.roofLayers[0]
		};

		vm.DOM = {
			layerThree:false,
			layerFour:false,
			layerFive:false,
			layerSix:false
		};

		vm.PARAMS.layerOne = vm.SELECT.layerOne.id;
		vm.PARAMS.layerTwo = vm.SELECT.layerTwo.id;
		vm.PARAMS.layerThree = vm.SELECT.layerThree.id;
		vm.PARAMS.layerFour = vm.SELECT.layerFour.id;
		vm.PARAMS.layerFour = vm.SELECT.layerFour.id;
		vm.PARAMS.layerSix = vm.SELECT.layerSix.id;

		

	}

	resetMe();

};