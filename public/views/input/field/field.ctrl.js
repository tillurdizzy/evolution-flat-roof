'use strict';
angular.module('app').controller('FieldCtrl', myFunction);

myFunction.$inject = ['ListSrvc','SharedSrvc'];

function myFunction(ListSrvc,SharedSrvc) { 
	var vm =this;
	vm.L = ListSrvc;



}