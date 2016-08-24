'use strict';
angular.module('app').factory('SharedSrvc', SharedSrvc);

SharedSrvc.$inject = ['$rootScope', 'DB'];

function SharedSrvc($rootScope, DB) {
    var traceMe = true;
    var myID = "SharedSrvc: ";

    var service = {
        pushData: pushData,
        returnData: returnData,
        getActiveJobs: getActiveJobs,
        createNewJob: createNewJob,
        clone: clone,
        returnSelectedJobID: returnSelectedJobID,
        returnSelectedJob: returnSelectedJob,
        setSelectedJobID: setSelectedJobID,
        setSelectedJob: setSelectedJob,
        setField: setField,
        setHVAC: setHVAC,
        setLayers: setLayers,
        setMembrane: setMembrane,
        setPenetrations: setPenetrations,
        setTerminations: setTerminations,
        setBase: setBase
    };

    return service;

    /////////////////////////////////////

    var LAYERS = {};
    var FIELD = {};
    var TERMINATIONS = {};
    var PENETRATIONS = {};
    var HVAC = {};
    var MEMBRANE = {};
    var ROOFBASE = {};
    var ACTIVE = []; // Active jobs

    var selectedJobID = '';
    var selectedJob = {};

    function trace(msg) {
        if (traceMe == true) {
            console.log(msg);
        }
    };

    function returnSelectedJobID() {
        return selectedJobID;
    };

    function returnSelectedJob() {
        return selectedJob;
    };

    function setSelectedJobID(str) {
        selectedJobID = str;
        if (parseInt(str) > 0) {
            $rootScope.$broadcast('jobSelectEvent', true);
            getJob(selectedJobID);
        } else {
            $rootScope.$broadcast('jobSelectEvent', false);
            selectedJob = {};
        }
    };

    function setSelectedJob(obj) {
        selectedJob = obj;
    };

    function getJob(strID) {
        var dataObj = { jobID: strID };

        DB.query('getDataField', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Get Job Error at getDataField");
            } else {
                if (resultObj.data[0].data == "") {
                    setField();
                } else {
                    FIELD = JSON.parse(resultObj.data[0].data);
                };
            };
        });

        DB.query('getDataHvac', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Get Job Error at getDataHvac");
            } else {
                if (resultObj.data[0].data == "") {
                    setHVAC();
                } else {
                    HVAC = JSON.parse(resultObj.data[0].data);
                };
            };
        });
        DB.query('getDataLayers', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getDataLayers"); } else {
                if (resultObj.data[0].data == "") {
                    setLayers();
                } else { LAYERS = JSON.parse(resultObj.data[0].data); };
            };
        });

        DB.query('getDataMembrane', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getDataMembrane"); } else {
                if (resultObj.data[0].data == "") {
                    setMembrane();
                } else { MEMBRANE = JSON.parse(resultObj.data[0].data); };
            };
        });
        DB.query('getDataPenetrations', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getDataPenetrations"); } else {
                if (resultObj.data[0].data == "") {
                    setPenetrations();
                } else { PENETRATIONS = JSON.parse(resultObj.data[0].data); };
            };
        });
        DB.query('getDataTerminations', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getDataTerminations"); } else {
                if (resultObj.data[0].data == "") {
                    setTerminations();
                } else { TERMINATIONS = JSON.parse(resultObj.data[0].data); };
            };
        });
        DB.query('getDataBase', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getDataBase"); } else {
                if (resultObj.data[0].data == "") {
                    setBase();
                } else { ROOFBASE = JSON.parse(resultObj.data[0].data); };
            };
        });
    };

    function getActiveJobs() {
        trace(myID + 'getActiveJobs');
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

    function parseJobs(arr) {
        trace(myID + 'parseJobs');
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

    function createNewJob(obj) {
        var jsonStr = JSON.stringify(obj);
        var DBQuery = "insertJob";
        var dataObj = {};
        dataObj.client = obj.client;
        dataObj.data = jsonStr;
        DB.query(DBQuery, dataObj).then(function(resultObj) {
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

    function newJobChain(id) {
        var dataObj = {};
        dataObj.jobID = id;
        dataObj.data = "";
        DB.query('insertBase', dataObj).then(function(resultObj) {
            DB.query('insertField', dataObj).then(function(resultObj) {
                DB.query('insertHvac', dataObj).then(function(resultObj) {
                    DB.query('insertLayers', dataObj).then(function(resultObj) {
                        DB.query('insertMembrane', dataObj).then(function(resultObj) {
                            DB.query('insertPenetrations', dataObj).then(function(resultObj) {
                                DB.query('insertTerminations', dataObj).then(function(resultObj) {
                                    trace('newJobChain Complete');
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
        trace(myID + "pushData : " + jsonStr);
        var DBQuery = "update" + set;
        var dataObj = {};
        dataObj.jobID = selectedJobID;
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

    function setField() {
        FIELD = { SQUARES: '0', CRNROUT: '0', CRNRIN: '0', WALLS: [] };
        return FIELD;
    };

    function setLayers() {
        LAYERS = {
            layerOne: { layer: '', thickness: '' },
            layerTwo: { layer: '', thickness: '' },
            layerThree: { layer: '', thickness: '' },
            layerFour: { layer: '', thickness: '' },
            layerFive: { layer: '', thickness: '' },
            layerSix: { layer: '', thickness: '' },
            RPANEL: { height: '', width: '', winged: '', insulation: '' }
        };
        return LAYERS;
    };

    function setPenetrations() {
        PENETRATIONS = {
            STARCAPS: [],
            VENTS: { SMALL: [] },
            PIPES: { small: '', medium: '', large: '' },
            DRAINS: { INTERNAL: [], SCUPPER: [] },
            GUTTERS: {
                EAVESTROUGH: { length: "", size: "" },
                DOWNSPOUTS: { length: "", qty: "" },
                CORNERS: { inside: "", outside: "" },
                ELBOWS: { front: "", side: "" },
                HARDWARE: { hangers: "", downspouts: "", endcaps: "" }
            }
        };
        return PENETRATIONS;
    };

    function setTerminations() {
        TERMINATIONS = {
            PERIMETER: '0',
            WALL: '0',
            PARAPET: [],
            OTHER: { length:'0',description: '', cost: '0' },
            WALLTERM: []
        };
        return TERMINATIONS;
    };

    function setHVAC() {
        HVAC = {
            UNITS: [],
            SUPPORT: {
                WOOD: [],
                FOAM: [],
                CONES: []
            }
        };
        return HVAC;
    };

    function setMembrane() {
        MEMBRANE = {
            GRIDPOS: 'A1',
            MEMBRANE: '',
            THICKNESS: '',
            ATTACH: '',
            TYPE: ''
        };
        return MEMBRANE;
    };

    function setBase() {
        ROOFBASE = {
            LAYERS: [],
            ATTACHMENT: '',
            SPECIAL: {}
        }
        return ROOFBASE;
    };



    function setTempData() {


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
