angular.module('app').controller('ProposalCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc','ResultsSrvc','$location','DB'];

function myFunction($scope,SharedSrvc,ResultsSrvc,$location,DB) { 
	var me = this;
    var traceMe = true;
	me.S = SharedSrvc;
	me.R = ResultsSrvc;
    me.contractTotals = {};

    me.introductionTxt = "";
    me.deckTxt = "";
    me.materialsTxt = "";
    me.insulationTxt = "";
    me.membraneTxt = "";
    me.postinstallTxt = "";
    me.exclusionsTxt = "";
    me.warrantyTxt = "";
   
    me.cbChange = function(item){
        trace(item);
        switch(item){

        }
    };

    me.isCurrentPath = function(path) {
        var x = $location.path();
        return $location.path() == path;
    };

    function trace(msg){
        if(traceMe == true){
            console.log(msg);
        }
    };

    me.submitEdit = function(cat) {
        catSelected = cat;
        paramObj = {};
        paramObj.jobID = me.S.returnSelectedJobID();
        paramObj.data = '';
        DBQuery = "updateProposal_" + cat;
        switch (cat) {
            case 'introduction':
                paramObj.data = me.introductionTxt;
                break;
            case 'materials':
                paramObj.data = me.materialsTxt;
                break;
             case 'deck':
                paramObj.data = me.deckTxt;
                break;
            case 'insulation':
                paramObj.data = me.insulationTxt;
                break;
            case 'membrane':
                paramObj.data = me.membraneTxt;
                break;
            case 'postinstall':
                paramObj.data = me.postinstallTxt;
                break;
            case 'exclusions':
                paramObj.data = me.exclusionsTxt;
                break;
            case 'warranty':
                paramObj.data = me.warrantyTxt;
                break;
        }

        DB.query(DBQuery,paramObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("ProposalCtrl >> submitEdit ---- " + resultObj.data);
            } else {
                
            }
        }, function(error) {
            alert("Query Error - ProposalCtrl >> submitEdit");
        });
    };

    function setCategoryText(resultObj) {
        me.introductionTxt = resultObj.introduction;
        me.materialsTxt = resultObj.materials;
        me.deckTxt = resultObj.deck;
        me.insulationTxt = resultObj.insulation;
        me.membraneTxt = resultObj.membrane;
        me.postinstallTxt = resultObj.postinstall;
        me.exclusionsTxt = resultObj.exclusions;
        me.warrantyTxt = resultObj.warranty;
    };

    function getProposal() {
        var getQuery = "getProposal";
        var dataObj = {};
        dataObj.jobID = me.S.returnSelectedJobID();
        DB.query(getQuery,dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("ProposalCtrl >> getProposal ---- " + resultObj.data);
            } else {
                setCategoryText(resultObj.data[0]);
            }
        }, function(error) {
            alert("Query Error - ProposalCtrl >> getProposal");
        });
    };
	
	function initView() {
        me.contractTotals = me.R.returnTotals();
        me.lastUpdated = me.S.returnLastSubmitted();
        getProposal();
    };

    me.submitContract = function(){
        me.R.submitContract();
    };


    $scope.$watch('$viewContentLoaded', function() {
        initView();
    });

};