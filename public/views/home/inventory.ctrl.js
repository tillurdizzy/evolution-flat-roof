angular.module('app').controller('InvtCtrl', myFunction);

myFunction.$inject = ['$scope','DB','underscore'];

function myFunction($scope,DB,underscore) { 
	var vm = this;

	vm.invtCategories = ["Adhesives","Base","Edging","Fasteners","Flashing","Membranes","Walkways"];
	vm.pkgList = ["Each","Roll","Bdl","Box","Pail","Case","4x8 Sheet","4x4 Sheet"];
	vm.unitList = ["Ft.","Sq","In.","Each","LF","Sq.Ft."];
	vm.compList = ["FIELD","PERIMETER","WALL","4X4","4X8","CORNERS.inside"];
	vm.categorySelected = '';
    vm.DOM = {thickness:false};
	vm.selectedCategoryList = [];
	vm.itemSelected = {};
	var DBQuery = "";

	function editRowItem(editItem) {
        vm.itemSelected = editItem;
    };

    function configDom(){
        vm.DOM.thickness = false;
        vm.DOM.membrane = false;
        if(vm.categorySelected == 'Base'){
            vm.DOM.thickness = true;
        }
        if(vm.categorySelected == 'Membranes'){
            vm.DOM.membrane = true;
        }
    };

    function submitEdit(){
    	DBQuery = "update" + vm.categorySelected;
    	updateItem();
    };

    function updateItem(){
        DB.query(DBQuery, vm.itemSelected).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("updateItem ---- " + resultObj.data);
            } else {
               vm.itemSelected = {};
            }
        }, function(error) {
            alert("Query Error - InvtCtrl >> updateItem");
        });
    };
	
	function getInventory() {
        configDom();
        DB.query(vm.categorySelected).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("InvtCtrl >> getInventory ---- " + resultObj.data);
            } else {
                vm.selectedCategoryList = resultObj.data;
                if(vm.categorySelected == 'Membranes'){
                    for (var i = 0; i < vm.selectedCategoryList.length; i++) {
                        vm.selectedCategoryList[i].sort = parseInt(vm.selectedCategoryList[i].sort);
                    }
                    vm.selectedCategoryList = underscore.sortBy(vm.selectedCategoryList, 'sort');
                }
            }
        }, function(error) {
            alert("Query Error - InvtCtrl >> getInventory");
        });
    };

	vm.getInventory = getInventory;
	vm.editRowItem = editRowItem;
	vm.submitEdit = submitEdit;

};