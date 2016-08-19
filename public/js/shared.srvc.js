'use strict';
angular.module('app').factory('SharedSrvc', SharedSrvc);

SharedSrvc.$inject = ['$rootScope', 'DB'];

function SharedSrvc($rootScope, DB) {
    // public
    var selectedJobID = '';
    var selectedJob = {};
    
    var service = {
        pushData: pushData,
        returnData: returnData,
        getActiveJobs: getActiveJobs,
        createNewJob: createNewJob,
        setTempData: setTempData,
        clone: clone,
        selectedJobID:selectedJobID,
        selectedJob:selectedJob
    };

    return service;

    var traceMe = true;
    //private
    var myID = "SharedSrvc: ";
    var LAYERS = {};
    var FIELD = {};
    var TERMINATIONS = {};
    var PENETRATIONS = {};
    var HVAC = {};
    var MEMBRANE = {};
    var ROOFBASE = {};
    var ACTIVE = [];// Active jobs

    function trace(msg){
        if(traceMe == true){
            console.log(msg);
        }
    };

    function getJob(strID) {
        var dataObj = {ID:strID};
        DB.query('getJob',dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getJob ---- " + resultObj.data);
            } else {
                selectedJob = resultObj.data;
            }
        }, function(error) {
            alert("Query Error - SharedCtrl >> getJob");
        });
    };

    function getActiveJobs() {
        trace('getActiveJobs');
        DB.query('getActiveJobs').then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getActiveJobs ---- " + resultObj.data);
            } else {
                parseJobs(resultObj.data); 
            }
        }, function(error) {
            alert("Query Error - SharedCtrl >> getActiveJobs");
        });
    };

    function parseJobs(arr){
        trace('parseJobs');
        ACTIVE = [];
        for (var i = 0; i < arr.length; i++) {
            var json = arr[i].data;
            var obj = JSON.parse(json);
            obj.id = arr[i].PRIMARY_ID;
            obj.active = arr[i].active;
            ACTIVE.push(obj);
        }
        $rootScope.$broadcast('onRefreshActiveJobs');
    };

    function createNewJob(obj){
        var jsonStr = JSON.stringify(obj);
        var DBQuery = "insertJob";
        var dataObj = {};
        dataObj.client = obj.client;
        dataObj.data = jsonStr;
        DB.query(DBQuery,dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("createNewJob ---- " + resultObj.data);
            } else {
                var id = resultObj.data.id;
                getActiveJobs();
                newJobChain(id);
            }
        }, function(error) {
            alert("Query Error - SharedCtrl >> createNewJob");
        });
    };

    function newJobChain(id){
        var dataObj = {};
        dataObj.jobID = id;
        dataObj.data = "";
        DB.query('insertBase',dataObj).then(function(resultObj) {
            DB.query('insertField',dataObj).then(function(resultObj) {
                DB.query('insertHvac',dataObj).then(function(resultObj) {
                    DB.query('insertLayers',dataObj).then(function(resultObj) {
                        DB.query('insertMembrane',dataObj).then(function(resultObj) {
                            DB.query('insertPenetrations',dataObj).then(function(resultObj) {
                                DB.query('insertTerminations',dataObj).then(function(resultObj) {
                                    console.log('newJobChain Complete');
                                });
                            });
                        });
                    });
                });
            });
        });
    };

    function pushData(obj, set) {
        var jsonStr = JSON.stringify(obj);
        var DBQuery = "update" + set;
        var dataObj = {};
        dataObj.jobID = this.selectedJobID;
        dataObj.data = jsonStr;
        DB.query(DBQuery, dataObj);
        switch (set) {
            case "LAYERS":
                LAYERS = obj;
                break;
            case "FIELD":
                FIELD = obj;
                break;
            case "TERMINATIONS":
                TERMINATIONS = obj;
                break;
            case "PENETRATIONS":
                PENETRATIONS = obj;
                break;
            case "HVAC":
                HVAC = obj;
                break;
            case "ROOFBASE":
                ROOFBASE = obj;
                break;
            case "MEMBRANE":
                MEMBRANE = obj;
                break;
        }
    };

    function returnData(set) {
        var rtnObj = {};
        switch (set) {
            case "LAYERS":
                rtnObj = LAYERS;
                break;
            case "FIELD":
                rtnObj = FIELD;
                break;
            case "TERMINATIONS":
                rtnObj = TERMINATIONS;
                break;
            case "PENETRATIONS":
                rtnObj = PENETRATIONS;
                break;
            case "HVAC":
                rtnObj = HVAC;
                break;
            case "ROOFBASE":
                rtnObj = ROOFBASE;
                break;
            case "MEMBRANE":
                rtnObj = MEMBRANE;
                break;
            case "ACTIVE_JOBS":
                rtnObj = ACTIVE;
                break;
        };
        return rtnObj;
    };

    

    function setTempData() {
        // INPUT
        LAYERS = {
            layerOne: '',
            layerTwo: '',
            layerThree: '',
            layerFour: '',
            layerFive: '',
            layerSix: '',
            RPANEL: { height: '', width: '', winged: '', insulation: '' }
        };

        FIELD = {
            SQUARES: '0',
            CRNROUT: '0',
            CRNRIN: '0',
            WALLS: []
        };

        PENETRATIONS = {
            STARCAPS: [{ qty: '2', size: '5', finish: "Painted" }, { qty: '3', size: '4', finish: "Galvanized" }, { qty: '1', size: '8', finish: "Painted" }],
            VENTS: { SMALL: [{ qty: '2', size: '5', shape: "Square", replace: true }], LARGE: [{ qty: '2', size: '12', shape: "Round", replace: false }] },
            PIPES: { small: '2', medium: '3', large: '1' },
            DRAINS: { INTERNAL: [{ qty: '2', size: '4', method: "Boot" }], SCUPPER: [{ qty: '2', width: '4', downspout: true, length: '14' }] },
            GUTTERS: {
                EAVESTROUGH: { length: "", size: "" },
                DOWNSPOUTS: { length: "", qty: "" },
                CORNERS: { inside: "", outside: "" },
                ELBOWS: { front: "", side: "" },
                HARDWARE: { hangers: "", downspouts: "", endcaps: "" }
            }
        };

        TERMINATIONS = {
            PERIMETER: '0',
            WALL: '0',
            PARAPET: [{ length: '12', stretchout: '24', cleated: 'No', material: '' }],
            SPECIAL: { X: 'No', DESCRIPTION: '', COST: '' },
            WALLTERM: [{ type: 'T-Bar', length: '35' }]
        };

        HVAC = {
            UNITS: [{ qty: "3", footprintX: "4", footprintY: "3.5" }],
            SUPPORT: {
                WOOD: [{ qty: "35", width: "" }],
                FOAM: [{ qty: "35", width: "" }],
                CONES: [{ qty: "", ring: false, attached: false }]
            }
        };

        MEMBRANE = {
            GRIDPOS: 'A1',
            MEMBRANE: '',
            THICKNESS: '',
            ATTACH: '',
            TYPE: ''
        };

        ROOFBASE = {
            LAYERS: [],
            ATTACHMENT: '',
            SPECIAL: {}
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
