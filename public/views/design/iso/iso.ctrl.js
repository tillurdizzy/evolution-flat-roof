'use strict';
angular.module('app').controller('ISO_Ctrl', myFunction);

myFunction.$inject = ['ListSrvc','SharedSrvc'];

function myFunction(ListSrvc,SharedSrvc) { 
	var vm =this;
	vm.L = ListSrvc;



}