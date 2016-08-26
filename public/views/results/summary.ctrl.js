angular.module('app').controller('SummaryCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc','ResultsSrvc'];

function myFunction($scope,SharedSrvc,ResultsSrvc) { 
	var vm = this;
	var S = SharedSrvc;
	var R = ResultsSrvc;
	vm.JobID = "";
	var summary = {tearOff:0,field:0,terms:0,pens:0,hvac:0};

	

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