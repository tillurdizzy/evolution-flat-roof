angular.module('app').controller('InvtCtrl', myFunction);

myFunction.$inject = ['$scope','DB'];

function myFunction($scope,DB) { 
	var vm = this;

	vm.invtCategories = ["Adhesives","Edging","Fasteners","Flashing","Insulation","Membranes","Walkways"];
	vm.pkgList = ["Each","Roll","Bdl","Box","Pail","Case","Sheet"];
	vm.unitList = ["Ft.","Sq","In.","LF","Sq.Ft."];
	vm.compList = ["FIELD","PERIMETER","WALL","4X4","4X8"];
	vm.categorySelected = '';
	vm.selectedCategoryList = [];
	vm.itemSelected = {};
	var DBQuery = "";

	function editRowItem(editItem) {
        vm.itemSelected = editItem;
    };

    function submitEdit(){
    	DBQuery = "update" + vm.categorySelected;
    	updateItem();
    };

    function updateItem(){
        DB.query(DBQuery, dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("updateItem ---- " + resultObj.data);
            } else {
                self.tabsSubmitted.margin = true;
                $rootScope.$broadcast('onSaveMarginConfig');
            }
        }, function(error) {
            alert("Query Error - InvtCtrl >> updateItem");
        });
    }
	

	function getInventory() {
        DB.query(vm.categorySelected).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getProposalsByJob ---- " + resultObj.data);
            } else {
                vm.selectedCategoryList = resultObj.data;
            }
        }, function(error) {
            alert("Query Error - InvtCtrl >> getInventory");
        });
    };




	vm.getInventory = getInventory;
	vm.editRowItem = editRowItem;
	vm.submitEdit = submitEdit;




};