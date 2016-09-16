angular.module('app').controller('LaborCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc','LaborSrvc'];

function myFunction($scope,SharedSrvc,LaborSrvc) { 
	var vm = this;
	var S = SharedSrvc;
	vm.L = LaborSrvc;
	vm.JobID = "";
	
	function initView() {
       vm.L.initSrvc();
    };

 
    $scope.$watch('$viewContentLoaded', function() {
        initView();
    });

};