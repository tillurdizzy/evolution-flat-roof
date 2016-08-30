angular.module('app').controller('MaterialsCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc','ResultsSrvc'];

function myFunction($scope,SharedSrvc,ResultsSrvc) { 
	var vm = this;
	var S = SharedSrvc;
	vm.R = ResultsSrvc;
	
	
	function initView() {
        
    };

 	function pushToShared() {
        //S.pushData(vm.PARAMS, 'xxx');
    };

    function initSrvc() {
        vm.R.initSrvc();
    };

    $scope.$on("$destroy", function() {
        //pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
        initSrvc();
    });
};