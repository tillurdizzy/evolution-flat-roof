angular.module('app').controller('LibCtrl', myFunction);

myFunction.$inject = ['$scope', '$state', 'DB','$location'];

function myFunction($scope, $state, DB,$location) {
    var me = this;

    me.introductionTxt = "";
    me.materialsTxt = "";
    me.deckTxt = "";
    me.exclusionsTxt = "";
    me.warrantyTxt = "";
    me.insulationTxt = "";
    me.membraneTxt = "";
    me.postinstallTxt = "";

    me.categorySelected = 'introduction';

    var DBQuery = "";
    var paramObj = {};
    var getQuery = '';

    me.goNav = function(st) {
        me.categorySelected = st;
        $state.transitionTo(st);
    };

    me.isCurrentPath = function(path) {
        var x = $location.path();
        return $location.path() == path;
    };

    function initCtrl() {
        getLibrary();
    };

    me.submitEdit = function(cat) {
        paramObj = {};
        paramObj.strTxt = '';
        DBQuery = "updateLib_" + cat;
        switch (cat) {
            case 'introduction':
                paramObj.strTxt = me.introductionTxt;
                break;
            case 'materials':
                paramObj.strTxt = me.materialsTxt;
                break;
            case 'deck':
                paramObj.strTxt = me.deckTxt;
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
        me.materialsTxt = resultObj.materials;
        me.insulationTxt = resultObj.insulation;
        me.membraneTxt = resultObj.membrane;
        me.postinstallTxt = resultObj.postinstall;
        me.deckTxt = resultObj.deck;
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
};
