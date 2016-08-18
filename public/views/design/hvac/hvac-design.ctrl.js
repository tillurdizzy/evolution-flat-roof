'use strict';
angular.module('app').controller('hvacDesignCtrl', myFunction);

myFunction.$inject = ['$scope', 'SharedSrvc'];

function myFunction($scope, SharedSrvc) {
    var vm = this;
    vm.S = SharedSrvc;

    vm.SELECT = {};
    vm.PARAMS = {};

    vm.DOM = {};

    // Counters
    vm.pipeSupportWood = 0;
    vm.pipeSupportCones = 0;

    function initView() {
        vm.pipeSupportWood = vm.PARAMS.SUPPORT.WOOD.length;
        vm.pipeSupportFoam = vm.PARAMS.SUPPORT.FOAM.length;
        vm.pipeSupportCones = vm.PARAMS.SUPPORT.CONES.length;
    };

    function pushToShared() {
        vm.S.pushData(vm.PARAMS, 'HVAC');
    };

    function pullFromShared() {
        vm.PARAMS = vm.S.returnData('HVAC');
        initView();
    };

    $scope.$on("$destroy", function() {
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
        vm.JobID = vm.S.selectedJobID;
        vm.JOB = vm.S.selectedJob;
        pullFromShared();
    });

    $scope.$watch('Ctrl.pipeSupportWood', function() {
        var currentCount = vm.PARAMS.SUPPORT.TIMBER.length;
        if (vm.pipeSupportWood > currentCount) {
            vm.PARAMS.SUPPORT.TIMBER.push({ qty: '', width: '' });
        } else if (vm.pipeSupportWood < currentCount) {
            vm.PARAMS.SUPPORT.TIMBER.pop();
        }
    });

    $scope.$watch('Ctrl.pipeSupportFoam', function() {
        var currentCount = vm.PARAMS.SUPPORT.FOAM.length;
        if (vm.pipeSupportFoam > currentCount) {
            vm.PARAMS.SUPPORT.FOAM.push({ qty: '', width: '' });
        } else if (vm.pipeSupportFoam < currentCount) {
            vm.PARAMS.SUPPORT.FOAM.pop();
        }
    });

    $scope.$watch('Ctrl.pipeSupportCones', function() {
        var currentCount = vm.PARAMS.SUPPORT.CONES.length;
        if (vm.pipeSupportCones > currentCount) {
            vm.PARAMS.SUPPORT.CONES.push({ qty: '', ring: false, attched: false });
        } else if (vm.pipeSupportCones < currentCount) {
            vm.PARAMS.SUPPORT.CONES.pop();
        }
    });

};
