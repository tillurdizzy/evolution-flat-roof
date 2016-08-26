angular.module('app').controller('MaterialsCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc','ResultsSrvc'];

function myFunction($scope,SharedSrvc,ResultsSrvc) { 
	var vm = this;
	var S = SharedSrvc;
	vm.R = ResultsSrvc;
	
	vm.MATERIALS = {
        membrane:'',plasticSheet:'',seamPlates:'',cornerIn:'',cornerOut:'',
        iso:'',screws:'',foam:'',insulPlate:'',
        termBar:'',termBarReglet:'',faciaBar:'',faciaBarCover:'',
        cladMetal:'',capMetal:'',
        smallBoots:'',largeBoots:''

    };

        

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