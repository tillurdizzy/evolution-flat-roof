'use strict';
angular.module('app').factory('ResultsSrvc', ResultsSrvc);

ResultsSrvc.$inject = ['SharedSrvc','DB'];

function ResultsSrvc(SharedSrvc,DB) {
    var S = SharedSrvc;

    var service = {
        initSrvc:initSrvc
    };

    return service;

    var myID = "ResultsSrvc: ";
    var FIELD = [];
    var MEM = [];
    var BASE = [];
    var PEN = [];
    var TERM = [];
    var HVAC = [];
    var RPAN = [];
    var INVENTORY = [];
    
    var WALKWAYS = [];
    var invtCategories = ["Adhesives","Edging","Fasteners","Flashing","Insulation","Membranes","Walkways"];

    // Step 1: Collect data to determine materials needed
    function initSrvc(){
        FIELD = S.returnData('FIELD');
        MEM = S.returnData('MEMBRANE');
        BASE = S.returnData('ROOFBASE');
        PEN = S.returnData('PENETRATIONS');
        TERM = S.returnData('TERMINATIONS');
        HVAC = S.returnData('HVAC');
        //RPAN = S.returnData('HVAC');
        processMembrane();
    }

    function processMembrane(){
        var SQUARES = returnNumber(FIELD.SQUARES,"num");
        var CRNRIN = returnNumber(FIELD.CRNRIN,'int');
        var CRNROUT = returnNumber(FIELD.CRNROUT,'int');
        var sqFt = 0;// Membrane needed for walls
        for(var i = 0; i < FIELD.WALLS.length; i++){
            var l = returnNumber(FIELD.WALLS[i].length,'num');
            var h = returnNumber(FIELD.WALLS[i].height,'num')/12;
            sqFt+=(h*l);
        }
        SQUARES+=(sqFt/10);
    }

    function decimalPrecisionTwo(data) {
        var num = returnNumber(data,'num');
        var result = Math.round(num * 100) / 100
        return result;
    }

    function convertToBoolean(input) {
        var boolOut = false;
        if (input === "1" || input === "true" || input === "True" || input === "TRUE" || input === 1 || input === true) {
            boolOut = true;
        }
        var num = Number(input);
        var isNum = isNaN(num);
        if (!isNum) {
            if (num > 0) {
                boolOut = true;
            }
        }
        return boolOut;
    };

    function convertDateToString(m) {
        var dateStr = ""
        var d = new Date(m);
        return dateStr;
    };


    function returnNumber(input,type){
        var badInput = 0;
        var rtn = 0;
        if(type=="int"){
            rtn = parseInt(input);
            if(isNaN(rtn)){
                return badInput;
            }
        }else if(type=="num"){
            rtn = Number(input);
            if(isNaN(rtn)){
                return badInput;
            }
        }
        return rtn;
    };

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

};
