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



    // Extract the string to be saved from the selected item in dataProvider
    function getSelectData() {
        
    };


    function initView() {
        vm.StarCount = vm.PARAMS.STARCAPS.length;
        vm.smallVentCount = vm.PARAMS.VENTS.SMALL.length;
        vm.largeVentCount = vm.PARAMS.VENTS.LARGE.length;
        vm.internalDrainCount = vm.PARAMS.DRAINS.INTERNAL.length;
    	vm.scupperDrainCount = vm.PARAMS.DRAINS.SCUPPER.length;
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

   
    $scope.$watch('Ctrl.smallVentCount', function() {
        var currentCount = vm.PARAMS.VENTS.SMALL.length;
        if (vm.smallVentCount > currentCount) {
            vm.PARAMS.VENTS.SMALL.push({ qty: '', size: '', shape: '',replace:''});
        } else if (vm.smallVentCount < currentCount) {
            vm.PARAMS.VENTS.SMALL.pop();
        }
    });

    $scope.$watch('Ctrl.largeVentCount', function() {
        var currentCount = vm.PARAMS.VENTS.LARGE.length;
        if (vm.largeVentCount > currentCount) {
            vm.PARAMS.VENTS.LARGE.push({ qty: '', size: '', shape: '',replace:''});
        } else if (vm.largeVentCount < currentCount) {
            vm.PARAMS.VENTS.LARGE.pop();
        }
    });

    $scope.$watch('Ctrl.internalDrainCount', function() {
        var currentCount = vm.PARAMS.DRAINS.INTERNAL.length;
        if (vm.internalDrainCount > currentCount) {
            vm.PARAMS.DRAINS.INTERNAL.push({ qty: '', size: ''});
        } else if (vm.internalDrainCount < currentCount) {
            vm.PARAMS.DRAINS.INTERNAL.pop();
        }
    });

    $scope.$watch('Ctrl.scupperDrainCount', function() {
        var currentCount = vm.PARAMS.DRAINS.SCUPPER.length;
        if (vm.scupperDrainCount > currentCount) {
            vm.PARAMS.DRAINS.SCUPPER.push({ qty: '', width: '',downspout:false});
        } else if (vm.scupperDrainCount < currentCount) {
            vm.PARAMS.DRAINS.SCUPPER.pop();
        }
    });

}
