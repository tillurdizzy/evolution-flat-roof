'use strict';
angular.module('app').controller('hvacDesignCtrl', myFunction);

myFunction.$inject = ['$scope', 'SharedSrvc'];

function myFunction($scope, SharedSrvc) {
    var vm = this;
    vm.S = SharedSrvc;
    vm.PARAMS = {};

    // Counters
    vm.pipeSupportWood = 0;
    vm.pipeSupportFoam = 0;
    vm.pipeSupportCones = 0;

    function initView() {
        vm.pipeSupportWood = getWoodCount();
        vm.pipeSupportFoam = getFoamCount();
        vm.pipeSupportCones = getConesCount();
    };

    function getWoodCount(){
        var objLength = Object.keys(vm.PARAMS).length;
        var count = 0;
        if(objLength != 0){
            if(vm.PARAMS.SUPPORT.WOOD != undefined){
                count = vm.PARAMS.SUPPORT.WOOD.length;
            }
        }
        return count;
    };

    function getFoamCount(){
        var objLength = Object.keys(vm.PARAMS).length;
        var count = 0;
        if(objLength != 0){
            if(vm.PARAMS.SUPPORT.FOAM != undefined){
                count = vm.PARAMS.SUPPORT.FOAM.length;
            }
        }
        return count;
    };

    function getConesCount(){
        var objLength = Object.keys(vm.PARAMS).length;
        var count = 0;
        if(objLength != 0){
            if(vm.PARAMS.SUPPORT.CONES != undefined){
                count = vm.PARAMS.SUPPORT.CONES.length;
            }
        }
        return count;
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
        vm.JobID = vm.S.returnSelectedJobID();
        vm.JOB = vm.S.returnSelectedJob();
        pullFromShared();
    });

    $scope.$watch('Ctrl.pipeSupportWood', function() {
        var currentCount = getWoodCount();
        if (vm.pipeSupportWood > currentCount) {
            vm.PARAMS.SUPPORT.WOOD.push({ qty: '', width: '' });
        } else if (vm.pipeSupportWood < currentCount) {
            vm.PARAMS.SUPPORT.WOOD.pop();
        }
    });

    $scope.$watch('Ctrl.pipeSupportFoam', function() {
        var currentCount = getFoamCount();
        if (vm.pipeSupportFoam > currentCount) {
            vm.PARAMS.SUPPORT.FOAM.push({ qty: '', width: '' });
        } else if (vm.pipeSupportFoam < currentCount) {
            vm.PARAMS.SUPPORT.FOAM.pop();
        }
    });

    $scope.$watch('Ctrl.pipeSupportCones', function() {
        var currentCount = getConesCount();
        if (vm.pipeSupportCones > currentCount) {
            vm.PARAMS.SUPPORT.CONES.push({ qty: '', ring: false, attached: false });
        } else if (vm.pipeSupportCones < currentCount) {
            vm.PARAMS.SUPPORT.CONES.pop();
        }
    });

};
