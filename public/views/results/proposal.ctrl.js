angular.module('app').controller('ProposalCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc','ResultsSrvc','$location'];

function myFunction($scope,SharedSrvc,ResultsSrvc,$location) { 
	var vm = this;
    var traceMe = true;
	vm.S = SharedSrvc;
	vm.R = ResultsSrvc;
    vm.contractTotals = {};

    

    

    vm.cbChange = function(item){
        trace(item);
        switch(item){

        }
    };

   
    vm.isCurrentPath = function(path) {
        var x = $location.path();
        return $location.path() == path;
    };

    function trace(msg){
        if(traceMe == true){
            console.log(msg);
        }
    };
	
	function initView() {
        vm.contractTotals = vm.R.returnTotals();
        vm.lastUpdated = vm.S.returnLastSubmitted();
    };

    vm.submitContract = function(){
        vm.R.submitContract();
    };


    $scope.$watch('$viewContentLoaded', function() {
        initView();
    });

};