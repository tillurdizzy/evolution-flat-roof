angular.module('app').controller('MaterialsCtrl', myFunction);

myFunction.$inject = ['$scope','ResultsSrvc'];

function myFunction($scope,ResultsSrvc) { 
	var vm = this;
	vm.R = ResultsSrvc;
	
    function initSrvc() {
        vm.R.initSrvc();
    };

    $scope.$watch('$viewContentLoaded', function() {
        initSrvc();
    });
};