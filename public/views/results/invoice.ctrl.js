angular.module('app').controller('InvoiceCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc','ResultsSrvc','LaborSrvc','$rootScope'];

function myFunction($scope,SharedSrvc,ResultsSrvc,LaborSrvc,$rootScope) { 
	var vm = this;
	var S = SharedSrvc;
	var R = ResultsSrvc;
    var L = LaborSrvc;
	vm.JobID = "";
	vm.markup = 30;
	vm.INVOICE = {materials:0,labor:0,subtotal:0,markup:0,total:0};
	
	vm.update = function(){
		initView();
	};

	function initView() {
        vm.INVOICE.materials = R.totalMaterials;
        vm.INVOICE.labor = L.laborTotal;
        vm.INVOICE.subtotal = L.laborTotal + R.totalMaterials;
        var percent = vm.markup * .01;
        vm.INVOICE.markup = vm.INVOICE.subtotal * percent;
        vm.invoiceTotal = vm.INVOICE.subtotal + vm.INVOICE.markup;
        $rootScope.$broadcast('invoiceComplete', true);
    };

 	function pushToShared() {
        //S.pushData(vm.PARAMS, 'XXX');
    };

    
    $scope.$watch('$viewContentLoaded', function() {
        initView();
    });

    $scope.$watch('Ctrl.markup', function() {
        initView();
    });


};