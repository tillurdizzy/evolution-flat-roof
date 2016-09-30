'use strict';
angular.module('app').factory('InventorySrvc', InventorySrvc);

InventorySrvc.$inject = ['SharedSrvc','DB','underscore'];

function InventorySrvc(SharedSrvc,DB,underscore) {
   
    var self = this;

    var myID = "InventorySrvc: ";
    var traceMe = true;

    var jobStatus = 0;
   
    var Edging = [];
    var Fasteners = [];
    var Flashing = [];
    var Base = [];
    var Membranes = [];
    var Walkway = [];

    var INV = {};
    var promiseCount = 0;

    self.initSrvc = function(){
        promiseCount = 0;
        INV = {Edging:'',Fasteners:'',Flashing:'',Base:'',Membranes:'',Walkway:''};
        Edging = getEdging();
        Fasteners = getFasteners();
        Flashing = getFlashing();
        Base = getBase();
        Membranes = getMembranes();
        Walkway = getWalkway();
    };


    self.returnFlashing = function(ID){
        var rtnObj = {item:'',pkg:'',price:0,num:0};
        for (var i = 0; i < Flashing.length; i++) {
           if(Flashing[i].PRIMARY_ID == ID){
                rtnObj = Flashing[i];
                return rtnObj;
           }
        }
        return rtnObj;
    };

    self.returnBase = function(c,p,t){
       var rtnObj = {class:c,pkg:p,thickness:t,price:0,num:0};
        for (var i = 0; i < Base.length; i++) {
           if(Base[i].class == c && Base[i].pkg == p && Base[i].thickness == t){
                rtnObj = Base[i];
                return rtnObj;
           }
        }
        return rtnObj;
    };

    self.returnFastener = function(id){
        var rtnObj = {qty:0,price:0};
        for (var i = 0; i < Fasteners.length; i++) {
           if(Fasteners[i].PRIMARY_ID == id){
                rtnObj = Fasteners[i];
                return rtnObj;
           }
        }
        return rtnObj;
    };

   

    self.returnEdge = function(id){
        var rtnObj = {qty:0,price:0};
        for (var i = 0; i < Edging.length; i++) {
           if(Edging[i].PRIMARY_ID == id){
                rtnObj = Edging[i];
                return rtnObj;
           }
        }
        return rtnObj;
    };


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

    self.returnWalkway = function(p){

    };

    function promiseKept(){
        promiseCount += 1;
        if(promiseCount === 6){
            //trace(JSON.stringify(INV));
        }
    }

   
    function getEdging() {
        DB.query('Edging').then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getEdging ---- " + resultObj.data);
            } else {
                Edging = resultObj.data;
                for (var i = 0; i < Edging.length; i++) {
                    Edging[i].PRIMARY_ID = parseInt(Edging[i].PRIMARY_ID);
                    Edging[i].price = returnNumber(Edging[i].price,'num');
                    Edging[i].num = returnNumber(Edging[i].num,'num');
                }
                Edging = underscore.sortBy(Edging, 'PRIMARY_ID');
                INV.Edging = JSON.stringify(Edging);
                promiseKept();
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
                for (var i = 0; i < Fasteners.length; i++) {
                    Fasteners[i].PRIMARY_ID = parseInt(Fasteners[i].PRIMARY_ID);
                    Fasteners[i].price = returnNumber(Fasteners[i].price,'num');
                    Fasteners[i].num = returnNumber(Fasteners[i].num,'num');
                }
                Fasteners = underscore.sortBy(Fasteners, 'PRIMARY_ID');
                INV.Fasteners = JSON.stringify(Fasteners);
                promiseKept();
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
                for (var i = 0; i < Flashing.length; i++) {
                    Flashing[i].PRIMARY_ID = parseInt(Flashing[i].PRIMARY_ID);
                    Flashing[i].price = returnNumber(Flashing[i].price,'num');
                    Flashing[i].num = returnNumber(Flashing[i].num,'num');
                }
                Flashing = underscore.sortBy(Flashing, 'PRIMARY_ID');
                INV.Flashing = JSON.stringify(Flashing);
                promiseKept();
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
                INV.Base = JSON.stringify(Base);
                promiseKept();
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
                 for (var i = 0; i < Membranes.length; i++) {
                    Membranes[i].PRIMARY_ID = parseInt(Membranes[i].PRIMARY_ID);
                    Membranes[i].fleece = returnNumber(Membranes[i].fleece,'int');
                    Membranes[i].mil = returnNumber(Membranes[i].mil,'int');
                    Membranes[i].sort = returnNumber(Membranes[i].sort,'int');
                    Membranes[i].sqft = returnNumber(Membranes[i].sqft,'int');
                    Membranes[i].price = returnNumber(Membranes[i].price,'num');
                    Membranes[i].num = returnNumber(Membranes[i].num,'num');
                }
                Membranes = underscore.sortBy(Membranes, 'sort');
                INV.Membranes = JSON.stringify(Membranes);
                promiseKept();
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
                INV.Walkway = JSON.stringify(Walkway);
                promiseKept();
            }
        }, function(error) {
            alert("Query Error - InventorySrvc >> getWalkway");
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
