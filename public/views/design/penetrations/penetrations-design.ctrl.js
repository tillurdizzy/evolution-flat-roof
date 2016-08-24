'use strict';
angular.module('app').controller('PenetrationsDesignCtrl', myCtrlFunction);

myCtrlFunction.$inject = ['$scope', '$state', 'SharedSrvc'];

function myCtrlFunction($scope, $state, SharedSrvc) {
    var vm = this;
    vm.S = SharedSrvc;
    vm.SELECT = {};
    vm.PARAMS = {};
    vm.currentNavItem = "pipes";
    
    vm.goNav = function(st) {
        $state.transitionTo(st);
    };


   
    vm.clearInput = function(){
        
    };


    function initView() {
        
    };

    function pushToShared() {
        vm.S.pushData(vm.PARAMS, 'PENETRATIONS');
    };

    function pullFromShared() {
        vm.JobID = vm.S.returnSelectedJobID();
        vm.JOB = vm.S.returnSelectedJob();
        vm.PARAMS = vm.S.returnData('PENETRATIONS');
        initView();
    };

    $scope.$on("$destroy", function() {
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
        pullFromShared();
    });

   

}
