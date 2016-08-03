'use strict';
angular.module('app').factory('SharedSrvc', SharedSrvc);

SharedSrvc.$inject = ['$rootScope'];

function SharedSrvc($rootScope) {
    
    var myID = "SharedSrvc: ";

    var LAYERS = {};
    var FIELD = {};
    var EDGES = {};
    var PENETRATIONS = {};
    var HVAC = {};
    var MEMBRANE = {};
    var ISO = {};
    var TERMINATIONS = {};

    var service = {
        pushData:pushData,
        returnData:returnData,
        setTempData:setTempData,
        clone:clone
    };

    return service;

    function pushData(obj,set){
        switch(set){
            case "ISO":ISO = obj;break;
            case "MEMBRANE":MEMBRANE = obj;break;
            case "HVAC":HVAC = obj;break;
            case "PENETRATIONS":PENETRATIONS = obj;break;
            case "EDGES":EDGES = obj;break;
            case "FIELD":FIELD = obj;break;
            case "LAYERS":LAYERS = obj;break;
            case "TERMINATIONS":TERMINATIONS = obj;break;
        }
    };

    function returnData(set){
        var rtnObj = {};
        switch(set){
            case "ISO":rtnObj=ISO;break;
            case "MEMBRANE":rtnObj=MEMBRANE;break;
            case "HVAC":rtnObj=HVAC;break;
            case "PENETRATIONS":rtnObj=PENETRATIONS;break;
            case "EDGES":rtnObj=EDGES;break;
            case "FIELD":rtnObj=FIELD;break;
            case "LAYERS":rtnObj=LAYERS;break;
            case "TERMINATIONS":rtnObj=TERMINATIONS;break;
        };
        return rtnObj;
    };

    function setTempData(){
        LAYERS = {layerOne:'',layerTwo:'',layerThree:'',layerFour:'',layerFive:'',layerSix:'',
        rPanel_height:'',rPanel_width:'',rPanel_winged:'',rPanel_insulation:''};

        FIELD = {SQUARES:'',CRNROUT:'',CRNRIN:''};

        EDGES = {
            PERIMITER:'0',
            WALL:'0',
            PARAPET:{QTY:'0',STRETCHOUT:'0'},
            CAPMETAL:{QTY:'0',STRETCHOUT:'0'}
        };

        PENETRATIONS = {
            STARCAPS:[{qty:'2',size:'5',finish:"Painted"},{qty:'3',size:'4',finish:"Galvanized"},{qty:'1',size:'8',finish:"Painted"}],
            SMVENTS:[],
            LRGVENTS:[],
            SMPIPES:[],
            LRGPIPES:[]
        }

        TERMINATIONS = {
            EDGETERM:'TBAR',
            TBAR:{STRETCHOUT:'3.5'},
            CLADMETAL:{STRETCHOUT:'',STRIPIN:'2'},
            CAPMETAL:{X:'No',STRETCHOUT:'0',CLEATED:'No'},
            SPECIAL:{X:'No',DESCRIPTION:'',COST:''},
            WALLTERM:{TBAR:{X:'',COUNTERFLASHING:'NA',REGLET:'',STRETCHOUT:'0'}}
        };

        MEMBRANE = {
            MEMBRANE:'',
            THICKNESS:''
        }
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
