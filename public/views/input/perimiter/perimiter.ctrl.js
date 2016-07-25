'use strict';
angular.module('app').controller('PrimiterCtrl', myFunction);

myFunction.$inject = ['ListSrvc','SharedSrvc'];

function myFunction(ListSrvc,SharedSrvc) { 
	var vm = this;
	vm.L = ListSrvc;

	vm.SELECT = {};
	vm.PARAMS = {};
	vm.DOM = {};
	
	var resetMe = function(){
		vm.PARAMS.SPECIALTYPE = "0";
		vm.PARAMS.TERMBAR = "0";
		vm.PARAMS.CLADMETAL = "0";
		vm.PARAMS.SPECTYPE_FT = "0";
		vm.PARAMS.SPECTYPE_DES = "";
		vm.PARAMS.SPECTYPE_COST = "0";
		vm.PARAMS.TERMINATION = "0";
		vm.PARAMS.CAPMETAL = "0";
		vm.PARAMS.xxx = "0";
		
	}

	resetMe();

};