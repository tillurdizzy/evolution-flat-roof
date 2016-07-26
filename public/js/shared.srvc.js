'use strict';
angular.module('app').factory('SharedSrvc', SharedSrvc);

SharedSrvc.$inject = ['$rootScope'];

function SharedSrvc($rootScope) {
    var self = this;

    self.myID = "SharedSrvc: ";

    var LAYERS = {};
    var FIELD = {};
    var PRMITR = {};
    var VENTS = {};
    var HVAC = {};
    var MEMBRN = {};
    var ISO = {};

    self.pushData = function(obj,set){
        switch(set){
            case "ISO":ISO = obj;break;
            case "MEMBRN":MEMBRN = obj;break;
            case "HVAC":HVAC = obj;break;
            case "VENTS":VENTS = obj;break;
            case "PRMITR":PRMITR = obj;break;
            case "FIELD":FIELD = obj;break;
            case "LAYERS":LAYERS = obj;break;
        }
    };

    self.returnData = function(set){
        var rtnObj = {};
        switch(set){
            case "ISO":rtnObj=ISO;break;
            case "MEMBRN":rtnObj=MEMBRN;break;
            case "HVAC":rtnObj=HVAC;break;
            case "VENTS":rtnObj=VENTS;break;
            case "PRMITR":rtnObj=PRMITR;break;
            case "FIELD":rtnObj=FIELD;break;
            case "LAYERS":rtnObj=LAYERS;break;
        };
        return rtnObj;
    };

    

    self.clone = function(obj) {
        var copy;

        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = self.clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = self.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    };

    return this;
};
