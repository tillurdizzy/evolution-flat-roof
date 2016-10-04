angular.module('app').controller('LibCtrl', myFunction);

myFunction.$inject = ['$scope', '$state', 'DB'];

function myFunction($scope, $state, DB) {
    var me = this;

    me.introductionTxt = "";
    me.overviewTxt = "";
    me.scopeTxt = "";
    me.optionsTxt = "";
    me.exclusionsTxt = "";
    me.warrantyTxt = "";
    me.preinstallTxt = "";
    me.insulationTxt = "";
    me.membraneTxt = "";
    me.postinstallTxt = "";

    var catSelected = '';

    var DBQuery = "";
    var paramObj = {};
    var getQuery = '';

    var INTRODUCTION = {};
    var OVERVIEW = {};
    var PRE = {};
    var INSULATION = {};
    var MEMBRANE = {};
    var POST = {};

    me.goNav = function(st) {
        me.categorySelected = st;
        $state.transitionTo(st);
    };

    function initCtrl() {
        getLibrary();
    };

    me.submitEdit = function(cat) {
        catSelected = cat;
        paramObj = {};
        paramObj.strTxt = '';
        DBQuery = "updateLib_" + cat;
        switch (cat) {
            case 'introduction':
                paramObj.strTxt = me.introductionTxt;
                break;
            case 'preinstall':
                paramObj.strTxt = me.preinstallTxt;
                break;
            case 'insulation':
                paramObj.strTxt = me.insulationTxt;
                break;
            case 'membrane':
                paramObj.strTxt = me.membraneTxt;
                break;
            case 'postinstall':
                paramObj.strTxt = me.postinstallTxt;
                break;
            case 'overview':
                paramObj.strTxt = me.overviewTxt;
                break;
            case 'scope':
                paramObj.strTxt = me.scopeTxt;
                break;
            case 'options':
                paramObj.strTxt = me.optionsTxt;
                break;
            case 'exclusions':
                paramObj.strTxt = me.exclusionsTxt;
                break;
            case 'warranty':
                paramObj.strTxt = me.warrantyTxt;
                break;
        }
        updateQuery();
    };

    function setCategoryText(resultObj) {
        me.introductionTxt = resultObj.introduction;
        me.preinstallTxt = resultObj.preinstall;
        me.insulationTxt = resultObj.insulation;
        me.membraneTxt = resultObj.membrane;
        me.postinstallTxt = resultObj.postinstall;
        me.overviewTxt = resultObj.overview;
        me.scopeTxt = resultObj.scope;
        me.optionsTxt = resultObj.options;
        me.exclusionsTxt = resultObj.exclusions;
        me.warrantyTxt = resultObj.warranty;
    };

    function updateQuery() {
        DB.query(DBQuery, paramObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("doQuery ---- " + resultObj.data);
            } else {

            }
        }, function(error) {
            alert("Query Error - LibCtrl >> doQuery");
        });
    };

    function getLibrary() {
        var getQuery = "getLibrary";
        DB.query(getQuery).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("LibCtrl >> getLibraryCategory ---- " + resultObj.data);
            } else {
                setCategoryText(resultObj.data[0]);
            }
        }, function(error) {
            alert("Query Error - LibCtrl >> getLibraryCategory");
        });
    };

    $scope.$watch('$viewContentLoaded', function() {
        initCtrl();
    });


    $scope.$on("$destroy", function() {
        me.selectedCategoryList = null;
    });

};
