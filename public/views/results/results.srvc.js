'use strict';
angular.module('app').factory('ResultsSrvc', ResultsSrvc);

ResultsSrvc.$inject = [];

function ResultsSrvc() {
    
    var myID = "ResultsSrvc: ";

    var LAYERS = {};
    var FIELD = {};
    var TERMINATIONS = {};
    var PENETRATIONS = {};
    var HVAC = {};
    var MEMBRANE = {};
    var ISO = {};
    

    var service = {
        pushData:pushData,
        returnData:returnData,
        setTempData:setTempData,
    };

    return service;

    function pushData(obj){
       
    };

    function returnData(set){
        
        return rtnObj;
    };

   
    function clone(obj) {
        var copy;
        if (null == obj || "object" != typeof obj) return obj;
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = self.clone(obj[i]);
            }
            return copy;
        }
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = self.clone(obj[attr]);
            }
            return copy;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    };

};
