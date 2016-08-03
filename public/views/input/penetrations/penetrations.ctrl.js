'use strict';
angular.module('app').controller('PenetrationsCtrl', myCtrlFunction);

myCtrlFunction.$inject = ['$scope', '$state', 'ListSrvc', 'SharedSrvc'];

function myCtrlFunction($scope, $state, ListSrvc, SharedSrvc) {
    var vm = this;
    vm.L = ListSrvc;
    vm.S = SharedSrvc;
    vm.SELECT = {};
    vm.PARAMS = {};
    vm.currentNavItem = "pipes";
    vm.StarCount = 1;
    vm.smallPipes = 0;
    vm.largePipes = 0;
    vm.smallVents = 0;
    vm.largeVents = 0;


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



    // Extract the string to be saved from the selected item in dataProvider
    function getSelectData() {
        vm.PARAMS.EDGETERM = vm.SELECT.edgeTermination.id;
        vm.PARAMS.CAPMETAL = vm.SELECT.capMetal.id;
    };


    function initView() {
        vm.StarCount = vm.PARAMS.STARCAPS.length;
        vm.smallPipes = vm.PARAMS.SMPIPES.length;
        vm.largePipes = vm.PARAMS.LRGPIPES.length;
        vm.smallVents = vm.PARAMS.SMVENTS.length;
        vm.largeVents = vm.PARAMS.LRGVENTS.length;
        // Parse the saved data to set the view elements

        // Set selected dataObj for Select input components
        vm.SELECT.edgeTermination = vm.L.returnObjById(vm.L.edgeTermination, vm.PARAMS.EDGETERM);
        vm.SELECT.capMetal = vm.L.returnObjById(vm.L.twoThruFortyEight, vm.PARAMS.CAPMTL);

    };

    function pushToShared() {
        getSelectData();
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
        pullFromShared();
    });

    $scope.$watch('Ctrl.StarCount', function() {
        var currentCount = vm.PARAMS.STARCAPS.length;
        if (vm.StarCount > currentCount) {
            vm.PARAMS.STARCAPS.push({ qty: '', size: '', finish: "" });
        } else if (vm.StarCount < currentCount) {
            vm.PARAMS.STARCAPS.pop();
        }
    });

}
