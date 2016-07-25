'use strict';
angular.module('app').controller('MeasureCtrl', myFunction);

myFunction.$inject = ['ListSrvc','SharedSrvc'];

function myFunction(ListSrvc,SharedSrvc) { 
	var vm = this;
	vm.L = ListSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};

	vm.selectMembrane=function(){
		vm.PARAMS.layerOne = vm.SELECT.membrane.id;
	};

	vm.selectThickness=function(){
		vm.PARAMS.layerTwo = vm.SELECT.thickness.id;
	};

	var resetMe = function(){
		vm.SELECT = {
			membrane:null,
			thickness:null
		};

		vm.PARAMS.membrane = "";
		vm.PARAMS.thickness = "";
	}

	resetMe();
}