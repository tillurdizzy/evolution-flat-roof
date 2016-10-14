'use strict';
angular.module('app').controller('BaseCtrl', myFunction);

myFunction.$inject = ['$scope', 'ListSrvc', 'SharedSrvc'];

function myFunction($scope, ListSrvc, SharedSrvc) {
    var vm = this;
    vm.L = ListSrvc;
    var S = SharedSrvc;
    var traceMe = true;

    vm.layerCount = 0;

    vm.SELECT = {};
    vm.PARAMS = {};
    vm.FIELD = {};
    vm.LAYERS = {}; // Input layers - already existing
    vm.existingLayers = [];
    var initialRuns = { corners: false, perimeter: false, field: false }

    vm.clearInput = function() {
        vm.PARAMS = S.setBase();
        initView();
    };

    vm.replaceEntireDeckToggle = function() {
        var r = vm.PARAMS.REPLACE;
        trace(r);
        if (r == true) {
            if (vm.layerCount == 0) {
                // Add a layer of plywood with qty set at entire field
                var sheetCount = materialNeededBySq(vm.FIELD.SQUARES,'4x8');
                vm.layerCount = 1;
                vm.PARAMS.LAYERS.push({ material: 'Plywood', thickness: '.75', size: '4x8', qty: sheetCount });
            }else{
                //
            }
        }else{

        }

    };

    function materialNeededBySq(totalSqs, sheetSize) {
        var total = 0;
        var singleSheetInSqs = 0;
        switch (sheetSize) {
            case "4x8":
                singleSheetInSqs = .32;
                break;
            case "4x4":
                singleSheetInSqs = .16;
                break;
        }
        if (totalSqs > 0 && singleSheetInSqs > 0) {
            total = totalSqs / singleSheetInSqs;
        }
        return total;
    };

    function initView() {
        vm.layerCount = vm.PARAMS.LAYERS.length;
        vm.existingLayers = [];
        if (vm.LAYERS.layerOne.layer != "") {
            vm.existingLayers.push({ layerNum: "1", material: vm.LAYERS.layerOne });
        };

        if (vm.LAYERS.layerTwo.layer != "") {
            vm.existingLayers.push({ layerNum: "2", material: vm.LAYERS.layerTwo });
        };

        if (vm.LAYERS.layerThree.layer != "") {
            vm.existingLayers.push({ layerNum: "3", material: vm.LAYERS.layerThree });
        };

        if (vm.LAYERS.layerFour.layer != "") {
            vm.existingLayers.push({ layerNum: "4", material: vm.LAYERS.layerFour });
        };

        if (vm.LAYERS.layerFive.layer != "") {
            vm.existingLayers.push({ layerNum: "5", material: vm.LAYERS.layerFive });
        };

        if (vm.LAYERS.layerSix.layer != "") {
            vm.existingLayers.push({ layerNum: "6", material: vm.LAYERS.layerSix });
        };

        vm.PARAMS.RATIO.corners = parseInt(vm.PARAMS.RATIO.corners);
        vm.PARAMS.RATIO.perimeter = parseInt(vm.PARAMS.RATIO.perimeter);
        vm.PARAMS.RATIO.field = parseInt(vm.PARAMS.RATIO.field);
        vm.PARAMS.RATIO.total = parseInt(vm.PARAMS.RATIO.total);

    };

    function pushToShared() {
        S.pushData(vm.PARAMS, 'ROOFBASE');
    };

    function pullFromShared() {
        vm.PARAMS = S.returnData('ROOFBASE');
        vm.LAYERS = S.returnData('LAYERS');
        vm.FIELD = S.returnData('FIELD');
        initView();
    };

    function trace(msg) {
        if (traceMe == true) {
            console.log(msg);
        }
    };

    $scope.$on("$destroy", function() {
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
        vm.JobID = S.returnSelectedJobID();
        vm.JOB = S.returnSelectedJob();
        pullFromShared();
    });

    $scope.$watch('Ctrl.layerCount', function() {
        var currentCount = vm.PARAMS.LAYERS.length;
        if (vm.layerCount > currentCount) {
            vm.PARAMS.LAYERS.push({ material: '', thickness: '', size: '4x8', qty: '' });
        } else if (vm.layerCount < currentCount) {
            vm.PARAMS.LAYERS.pop();
        }
    });

    $scope.$watch('Ctrl.PARAMS.RATIO.corners', function() {
        if (initialRuns.corners) {
            vm.PARAMS.RATIO.total = parseInt(vm.PARAMS.RATIO.perimeter) + parseInt(vm.PARAMS.RATIO.corners) + parseInt(vm.PARAMS.RATIO.field);
        } else {
            initialRuns.corners = true;
        }

        if (vm.PARAMS.RATIO.total == 100) {

        } else {

        }
    });

    $scope.$watch('Ctrl.PARAMS.RATIO.perimeter', function() {
        if (initialRuns.perimeter) {
            vm.PARAMS.RATIO.total = parseInt(vm.PARAMS.RATIO.perimeter) + parseInt(vm.PARAMS.RATIO.corners) + parseInt(vm.PARAMS.RATIO.field);
        } else {
            initialRuns.perimeter = true;
        }
        if (vm.PARAMS.RATIO.total == 100) {

        } else {

        }
    });

    $scope.$watch('Ctrl.PARAMS.RATIO.field', function() {
        if (initialRuns.field) {
            vm.PARAMS.RATIO.total = parseInt(vm.PARAMS.RATIO.perimeter) + parseInt(vm.PARAMS.RATIO.corners) + parseInt(vm.PARAMS.RATIO.field);
        } else {
            initialRuns.field = true;
        }

        if (vm.PARAMS.RATIO.total == 100) {

        } else {

        }
    });

};
