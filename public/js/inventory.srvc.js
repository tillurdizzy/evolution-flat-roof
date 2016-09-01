'use strict';
angular.module('app').factory('InventorySrvc', InventorySrvc);

InventorySrvc.$inject = ['DB','underscore'];

function InventorySrvc(DB,underscore) {
   

    var service = {
        initSrvc:initSrvc,
        returnEdging:returnEdging,
        returnFasteners:returnFasteners,
        returnFlashing:returnFlashing,
        returnBase:returnBase,
        returnMembranes:returnMembranes,
        returnWalkway:returnWalkway
    };

    return service;
    //////////////////////////////////////////////

    var myID = "InventorySrvc: ";

   
    var Edging = [];
    var Fasteners = [];
    var Flashing = [];
    var Base = [];
    var Membranes = [];
    var Walkway = [];

    function initSrvc(){
       
        Edging = getEdging();
        Fasteners = getFasteners();
        Flashing = getFlashing();
        Base = getBase();
        Membranes = getMembranes();
        Walkway = getWalkway();
    };


    
    function returnEdging(p){

    };
    function returnFasteners(p){

    };
    function returnFlashing(p){

    };

    function returnBase(c,p,t){
       var rtnObj = {class:c,pkg:p,thickness:t,price:0,num:0};
        for (var i = 0; i < Base.length; i++) {
           if(Base[i].class == c && Base[i].pkg == p && Base[i].thickness == t){
                rtnObj = Base[i];
                break;
           }
        }
        return rtnObj;
    };

    function returnMembranes(p){

    };
    function returnWalkway(p){

    };

   

    function getEdging() {
        DB.query('Edging').then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getEdging ---- " + resultObj.data);
            } else {
                Edging = resultObj.data;
            }
        }, function(error) {
            alert("Query Error - InventorySrvc >> getEdging");
        });
    };

    function getFasteners() {
        DB.query('Fasteners').then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getFasteners ---- " + resultObj.data);
            } else {
                Fasteners = resultObj.data;
            }
        }, function(error) {
            alert("Query Error - InventorySrvc >> getFasteners");
        });
    };

    function getFlashing() {
        DB.query('Flashing').then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getFlashing ---- " + resultObj.data);
            } else {
                Flashing = resultObj.data;
            }
        }, function(error) {
            alert("Query Error - InventorySrvc >> getFlashing");
        });
    };

    function getBase() {
        DB.query('Base').then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getInsulation ---- " + resultObj.data);
            } else {
                Base = resultObj.data;
                for (var i = 0; i < Base.length; i++) {
                        Base[i].PRIMARY_ID = parseInt(Base[i].PRIMARY_ID);
                        Base[i].thickness = returnNumber(Base[i].thickness,'num');
                        Base[i].price = returnNumber(Base[i].price,'num');
                        Base[i].num = returnNumber(Base[i].num,'num');
                    }
                    Base = underscore.sortBy(Base, 'PRIMARY_ID');
            }
        }, function(error) {
            alert("Query Error - InventorySrvc >> getInsulation");
        });
    };

    function getMembranes() {
        DB.query('Membranes').then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getMembranes ---- " + resultObj.data);
            } else {
                Membranes = resultObj.data;
            }
        }, function(error) {
            alert("Query Error - InventorySrvc >> getMembranes");
        });
    };

    function getWalkway() {
        DB.query('Walkway').then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getWalkway ---- " + resultObj.data);
            } else {
                Walkway = resultObj.data;
            }
        }, function(error) {
            alert("Query Error - InventorySrvc >> getWalkway");
        });
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

};
