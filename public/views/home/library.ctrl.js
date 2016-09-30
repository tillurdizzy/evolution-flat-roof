angular.module('app').controller('LibCtrl', myFunction);

myFunction.$inject = ['$scope','DB'];

function myFunction($scope,DB) { 
	var me = this;

	me.libCategories = ["Introduction","Overview","PreInstall","Insulation","Membrane","PostInstall"];

    me.overviewSub = [];
    me.preSub = [];
    me.insulationSub = [];
    me.membraneSub = [];
    me.postSub = [];
	
	me.categorySelected = '';
    
	me.selectedCategoryList = [];
    me.queryParamater = {};
	
    me.actionMode = 'update';
	var DBQuery = "";

    var INTRODUCTION = {};
    var OVERVIEW = {};
    var PRE = {};
    var INSULATION = {};
    var MEMBRANE = {};
    var POST = {};

	
    function toggleMode(){
        if(me.actionMode == 'update'){
            me.actionMode = 'create';
        }else{
            me.actionMode = 'update';
        }
    };

    me.submitEdit = function(){
        if(me.actionMode == 'update'){
            DBQuery = "updateLib" + me.categorySelected;
        }else if(me.actionMode == 'create'){
            DBQuery = "insertLib" + me.categorySelected; 
        }
        doQuery();
    };

   
    function doQuery(){
        DB.query(DBQuery, me.queryParamater).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("doQuery ---- " + resultObj.data);
            } else {
               me.queryParamater = {};
               getLibraryCategory();
            }
        }, function(error) {
            alert("Query Error - LibCtrl >> doQuery");
        });
    };
	
	me.getLibraryCategory = function() {
        DB.query(me.categorySelected).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("LibCtrl >> getInventory ---- " + resultObj.data);
            } else {
                me.selectedCategoryList = resultObj.data;
                
            }
        }, function(error) {
            alert("Query Error - LibCtrl >> getLibraryCategory");
        });
    };

	
    $scope.$on("$destroy", function(){
        me.selectedCategoryList = null;
    });

};