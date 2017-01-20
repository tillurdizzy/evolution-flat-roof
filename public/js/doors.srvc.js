'use strict';
angular.module('app').factory('DoorsSrvc', DoorsSrvc);

DoorsSrvc.$inject = ['DB','underscore'];

function DoorsSrvc(DB,underscore) {
   
    var self = this;

    var myID = "DoorsSrvc: ";
    var traceMe = true;
    var UnitDoors = [];
    self.doorObj = {property:"",unit:"",height:"",width:"",hinges:"",pull:""};

    self.initSrvc = function(){
       
    };

    self.putDoorForUnit = function(){
         DB.query('putDoorForUnit',doorObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("DoorsSrvc >> putDoorForUnit ---- " + resultObj.data);
            } else {
                
            }
        }, function(error) {
            alert("Query Error - DoorsSrvc >> putDoorForUnit");
        });
    }


   
    self.returnMembrane = function(obj){
        var rtnObj = {price:0,num:0};
        for (var i = 0; i < Membranes.length; i++) {
           if(Membranes[i].class == obj.class && Membranes[i].mil == obj.mil && Membranes[i].fleece == obj.fleece){
                rtnObj = Membranes[i];
                return rtnObj;
           }
        }
        return rtnObj;
    };

  
    function getDoorsForUnit() {
        var dataObj = {};
        dataObj.property = "";
        dataObj.unit = "";
        DB.query('getDoorsForUnit',dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getEdging ---- " + resultObj.data);
            } else {
                UnitDoors = resultObj.data;
            }
        }, function(error) {
            alert("Query Error - InventorySrvc >> getEdging");
        });
    };

  
    function trace(msg) {
        if (traceMe == true) {
            console.log(msg);
        }
    };

    function returnNumber(input,type){
        if(type == undefined){
            type = "num";
        }
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

    return self;

};
