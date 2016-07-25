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
		
	}

	resetMe();

};