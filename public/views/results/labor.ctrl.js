angular.module('app').controller('LaborCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc','ResultsSrvc'];

function myFunction($scope,SharedSrvc,ResultsSrvc) { 
	var vm = this;
	var S = SharedSrvc;
	var R = ResultsSrvc;
	vm.JobID = "";
	

	function initView() {
        
    };

 	function pushToShared() {
        S.pushData(vm.PARAMS, 'XXX');
    };

    function pullFromShared() {
        vm.PARAMS = S.returnData('XXX');
        initView();
    };

    $scope.$on("$destroy", function() {
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
        pullFromShared();
    });



};