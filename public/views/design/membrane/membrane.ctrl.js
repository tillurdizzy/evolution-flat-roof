'use strict';
angular.module('app').controller('MeasureCtrl', myFunction);

myFunction.$inject = ['ListSrvc','SharedSrvc'];

function myFunction(ListSrvc,SharedSrvc) { 
	var vm =this;
	vm.L = ListSrvc;



}