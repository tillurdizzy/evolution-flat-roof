'use strict';
angular.module('app').controller('PenetrationsCtrl', myCtrlFunction);

myCtrlFunction.$inject = ['$scope','$state','ListSrvc','SharedSrvc'];

function myCtrlFunction($scope,$state,ListSrvc,SharedSrvc) { 
	var vm = this;
	vm.L = ListSrvc;
	vm.S = SharedSrvc;
	vm.SELECT = {};
	vm.PARAMS = {};
	vm.currentNavItem = "pipes";


	vm.goNav = function(st){
		$state.transitionTo(st);
	};


	vm.smallVentChange = function(){
		var ar = vm.PARAMS.VENTS_SM_DETAILS.length;
		var num = vm.PARAMS.VENTS_SM;
		if(ar < num){
			for (var i = ar; i < num; i++) {
				var addObj = vm.S.clone(ventDetailObj);
				addObj.id = i;
				vm.PARAMS.VENTS_SM_DETAILS.push(addObj);
			}
		}else if(ar.length > num){
			// remove the last item
			vm.PARAMS.VENTS_SM_DETAILS.splice(ar-1,1);
		}

	};


	var reset = function(){
		vm.PARAMS.BOOTS_SM = '0';
		vm.PARAMS.BOOTS_LG = '0';
		vm.PARAMS.VENTS_SM = '0';
		vm.PARAMS.VENTS_LG = '0';
		vm.PARAMS.VENTS_SM_DETAILS = [];
		vm.PARAMS.VENTS_LG_DETAILS = [];

		vm.PARAMS.STARCAPS ="0";
		vm.PARAMS.STAR1_QTY ="0";
		vm.PARAMS.STAR2_QTY ="0";
		vm.PARAMS.STAR3_QTY ="0";
		vm.PARAMS.STAR4_QTY ="0";
		vm.PARAMS.STAR5_QTY ="0";
	}

	reset();

	// Extract the string to be saved from the selected item in dataProvider
	function getSelectData(){
		vm.PARAMS.EDGETERM = vm.SELECT.edgeTermination.id;
		vm.PARAMS.CAPMETAL = vm.SELECT.capMetal.id;
		
	};

	
	function initView(){
		// Parse the saved data to set the view elements

		// Set selected dataObj for Select input components
		vm.SELECT.edgeTermination = vm.L.returnObjById(vm.L.edgeTermination,vm.PARAMS.EDGETERM);
		vm.SELECT.capMetal = vm.L.returnObjById(vm.L.twoThruFortyEight,vm.PARAMS.CAPMTL);
	

	};

	function pushToShared(){
		getSelectData();
		vm.S.pushData(vm.PARAMS,'PERIMITER');
	};

	function pullFromShared(){
		vm.PARAMS = vm.S.returnData('PERIMITER');
		initView();
	};

	$scope.$on("$destroy", function(){
        pushToShared();
    });

    $scope.$watch('$viewContentLoaded', function() {
 		pullFromShared();
    });

}