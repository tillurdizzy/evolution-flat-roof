'use strict';
angular.module('app').controller('PenetrationsCtrl', myCtrlFunction);

myCtrlFunction.$inject = ['$scope', '$state', 'SharedSrvc'];

function myCtrlFunction($scope, $state, SharedSrvc) {
    var vm = this;
    vm.S = SharedSrvc;
    vm.SELECT = {};
    vm.PARAMS = {};
    vm.currentNavItem = "pipes";
    vm.StarCount = 1;
    vm.smallVentCount = 0;
    vm.largeVentCount = 0;
    vm.internalDrainCount = 0;
    vm.scupperDrainCount = 0;
   
    vm.goNav = function(st) {
        $state.transitionTo(st);
    };


    vm.smallVentChange = function() {
        var ar = vm.PARAMS.VENTS_SM_DETAILS.length;
        var num = vm.PARAMS.VENTS_SM;
        if (ar < num) {
            for (var i = ar; i < num; i++) {
                var addObj = vm.S.clone(ventDetailObj);
                addObj.id = i;
                vm.PARAMS.VENTS_SM_DETAILS.push(addObj);
            }
        } else if (ar.length > num) {
            // remove the last item
            vm.PARAMS.VENTS_SM_DETAILS.splice(ar - 1, 1);
        }
    };

    vm.clearInput = function(){
        switch(vm.currentNavItem){
            case 'pipes':resetPipes();break;
            case 'vents':resetVents();break;
            case 'drains':resetDrains();break;
            case 'gutters':resetGutters();break;
        }
    };

    function resetPipes(){
        vm.PARAMS.PIPES = { small: '0', medium: '0', large: '0' };
    };

    function resetVents(){
        vm.PARAMS.VENTS = { SMALL: [] , LARGE:[] };
        vm.smallVentCount = getSmallVentCount();
        vm.largeVentCount = getLargeVentCount();
    };

    function resetDrains(){
        vm.PARAMS.DRAINS = { INTERNAL: [], SCUPPER: [] };
        vm.internalDrainCount = getInternalDrainCount();
        vm.scupperDrainCount = getScupperDrainCount();
    };

    function resetGutters(){
        vm.PARAMS.GUTTERS = {
                EAVESTROUGH: { length: "", size: "" },
                DOWNSPOUTS: { length: "", qty: "" },
                CORNERS: { inside: "", outside: "" },
                ELBOWS: { front: "", side: "" },
                HARDWARE: { hangers: "", downspouts: "", endcaps: "" }};
    };

    function initView() {
        vm.StarCount = getStarCount();
        vm.smallVentCount = getSmallVentCount();
        vm.largeVentCount = getLargeVentCount();
        vm.internalDrainCount = getInternalDrainCount();
    	vm.scupperDrainCount = getScupperDrainCount();
    };

    function getStarCount(){
        var objLength = Object.keys(vm.PARAMS).length;
        var count = 0;
        if(objLength != 0){
            if(vm.PARAMS.STARCAPS != undefined){
                count = vm.PARAMS.STARCAPS.length;
            }
        }
        return count;
    };

    function getSmallVentCount(){
        var objLength = Object.keys(vm.PARAMS).length;
        var count = 0;
        if(objLength != 0){
            if(vm.PARAMS.VENTS.SMALL != undefined){
                count = vm.PARAMS.VENTS.SMALL.length;
            }
        }
        return count;
    };

    function getLargeVentCount(){
        var objLength = Object.keys(vm.PARAMS).length;
        var count = 0;
        if(objLength != 0){
            if(vm.PARAMS.VENTS.LARGE != undefined){
                count = vm.PARAMS.VENTS.LARGE.length;
            }
        }
        return count;
    };

    function getInternalDrainCount(){
        var objLength = Object.keys(vm.PARAMS).length;
        var count = 0;
        if(objLength != 0){
            if(vm.PARAMS.DRAINS.INTERNAL != undefined){
                count = vm.PARAMS.DRAINS.INTERNAL.length;
            }
        }
        return count;
    };

     function getScupperDrainCount(){
        var objLength = Object.keys(vm.PARAMS).length;
        var count = 0;
        if(objLength != 0){
            if(vm.PARAMS.DRAINS.SCUPPER != undefined){
                count = vm.PARAMS.DRAINS.SCUPPER.length;
            }
        }
        return count;
    };


    function pushToShared() {
        vm.S.pushData(vm.PARAMS, 'PENETRATIONS');
    };

    function pullFromShared() {
        vm.PARAMS = vm.S.returnData('PENETRATIONS');
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

   
    $scope.$watch('Ctrl.smallVentCount', function() {
        var currentCount = getSmallVentCount();
        if (vm.smallVentCount > currentCount) {
            vm.PARAMS.VENTS.SMALL.push({ qty: '', size: '', shape: '',replace:''});
        } else if (vm.smallVentCount < currentCount) {
            vm.PARAMS.VENTS.SMALL.pop();
        }
    });

    $scope.$watch('Ctrl.largeVentCount', function() {
        var currentCount = getLargeVentCount();
        if (vm.largeVentCount > currentCount) {
            vm.PARAMS.VENTS.LARGE.push({ qty: '', size: '', shape: '',replace:''});
        } else if (vm.largeVentCount < currentCount) {
            vm.PARAMS.VENTS.LARGE.pop();
        }
    });

    $scope.$watch('Ctrl.internalDrainCount', function() {
        var currentCount = getInternalDrainCount();
        if (vm.internalDrainCount > currentCount) {
            vm.PARAMS.DRAINS.INTERNAL.push({ qty: '', size: ''});
        } else if (vm.internalDrainCount < currentCount) {
            vm.PARAMS.DRAINS.INTERNAL.pop();
        }
    });

    $scope.$watch('Ctrl.scupperDrainCount', function() {
        var currentCount = getScupperDrainCount();
        if (vm.scupperDrainCount > currentCount) {
            vm.PARAMS.DRAINS.SCUPPER.push({ qty: '', width: '',downspout:false});
        } else if (vm.scupperDrainCount < currentCount) {
            vm.PARAMS.DRAINS.SCUPPER.pop();
        }
    });

}
