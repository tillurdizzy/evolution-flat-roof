'use strict';
angular.module('app').controller('VentsCtrl', myCtrlFunction);

myCtrlFunction.$inject = ['ListSrvc','SharedSrvc'];

function myCtrlFunction(ListSrvc,SharedSrvc) { 
	var vm = this;
	vm.L = ListSrvc;
	vm.S = SharedSrvc;
	vm.PARAMS = {};
	var ventDetailObj = {id:0,size:0,shape:"round"};

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

}