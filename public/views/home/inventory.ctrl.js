angular.module('app').controller('InvtCtrl', myFunction);

myFunction.$inject = ['$scope','DB','underscore'];

function myFunction($scope,DB,underscore) { 
	var vm = this;

	vm.invtCategories = ["Base","Edging","Fasteners","Flashing","Membranes","Walkway"];
	vm.pkgList = ["Each","Roll","Bdl","Box","Pail","Case","4x8","4x4"];
	vm.unitList = ["Ft.","Sq","In.","Each","LF","Sq.Ft."];
	vm.compList = ["FIELD","PERIMETER","WALL","4X4","4X8","CORNERS.inside"];
	vm.categorySelected = '';
    vm.DOM = {thickness:false};
	vm.selectedCategoryList = [];
	vm.itemSelected = {qty:"0",pkg:"X",item:"X",price:"0",num:"0",unit:"X",component:"X"};
    vm.actionMode = 'update';
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

    function toggleMode(){
        if(vm.actionMode == 'update'){
            vm.actionMode = 'create';
        }else{
            vm.actionMode = 'update';
        }
    };

    function submitEdit(){
        if(vm.actionMode == 'update'){
            DBQuery = "update" + vm.categorySelected;
        }else if(vm.actionMode == 'create'){
            DBQuery = "insertInvt" + vm.categorySelected; 
        }
        doQuery();
    };

   
    function doQuery(){
        DB.query(DBQuery, vm.itemSelected).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("doQuery ---- " + resultObj.data);
            } else {
               vm.itemSelected = {};
               getInventory();
            }
        }, function(error) {
            alert("Query Error - InvtCtrl >> doQuery");
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
                }else{
                    for (var i = 0; i < vm.selectedCategoryList.length; i++) {
                        vm.selectedCategoryList[i].PRIMARY_ID = parseInt(vm.selectedCategoryList[i].PRIMARY_ID);
                    }
                    vm.selectedCategoryList = underscore.sortBy(vm.selectedCategoryList, 'PRIMARY_ID');
                }
            }
        }, function(error) {
            alert("Query Error - InvtCtrl >> getInventory");
        });
    };

	vm.getInventory = getInventory;
	vm.editRowItem = editRowItem;
	vm.submitEdit = submitEdit;
    vm.toggleMode = toggleMode;


    $scope.$on("$destroy", function(){
        vm.selectedCategoryList = null;
    });

};