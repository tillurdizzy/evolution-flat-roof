'use strict';
angular.module('app').factory('SharedSrvc', SharedSrvc);

SharedSrvc.$inject = ['$rootScope', 'DB'];

function SharedSrvc($rootScope, DB) {
    var self = this;
    var traceMe = true;
    var myID = "SharedSrvc: ";

    var LAYERS = {};
    var FIELD = {};
    var TERMINATIONS = {};
    var PENETRATIONS = {};
    var HVAC = {};
    var MEMBRANE = {};
    var ROOFBASE = {};
    var ADMIN = {};
    var ACTIVE = []; // Active jobs
    var CONTRACT = {};

    self.selectedJobID = '';
    self.selectedJob = {};


    function trace(msg) {
        if (traceMe == true) {
            console.log(msg);
        }
    };

    self.returnSelectedJobID = function() {
        return self.selectedJobID;
    };

    self.returnSelectedJob = function() {
        return self.selectedJob.data;
    };

    self.returnJobStatus = function() {
        return self.selectedJob.status;
    };

    self.returnContract = function() {
        return CONTRACT;
    };

    self.returnLastSubmitted = function(){
        var rtn = 0;
        var d =  self.selectedJob.submitted;
        if(d == "" || d == 0 || d == undefined){
            return 0;
        }else{
            return parseInt(d);
        }
    }

    self.setSelectedJobID = function(str) {
        self.selectedJobID = str;
        if (parseInt(str) > 0) {
            $rootScope.$broadcast('jobSelectEvent', true);
            getJob(self.selectedJobID);
        } else {
            $rootScope.$broadcast('jobSelectEvent', false);
            self.selectedJob = {};
        }
    };

    self.setSelectedJob = function(obj) {
        self.selectedJob = obj;
    };

    function getJob(strID) {
        var dataObj = { jobID: strID };

        DB.query('getJob', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("GetJob Error at getJob");
            } else {
                if (resultObj.data[0].contract == "") {
                    CONTRACT = {};
                } else {
                    self.selectedJob = resultObj.data[0];
                    self.selectedJob.data = JSON.parse(resultObj.data[0].data);
                    self.selectedJob.contract = JSON.parse(resultObj.data[0].contract);
                    CONTRACT = self.clone(self.selectedJob.contract);
                };
            };
        });

        DB.query('getDataField', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("GetJob Error at getDataField");
            } else {
                if (resultObj.data[0].data == "") {
                    self.setField();
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
                    self.setHVAC();
                } else {
                    HVAC = JSON.parse(resultObj.data[0].data);
                };
            };
        });
        DB.query('getDataLayers', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getDataLayers"); } else {
                if (resultObj.data[0].data == "") {
                    self.setLayers();
                } else { LAYERS = JSON.parse(resultObj.data[0].data); };
            };
        });

        DB.query('getDataMembrane', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getDataMembrane"); } else {
                if (resultObj.data[0].data == "") {
                    self.setMembrane();
                } else { MEMBRANE = JSON.parse(resultObj.data[0].data); };
            };
        });
        DB.query('getDataPenetrations', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getDataPenetrations"); } else {
                if (resultObj.data[0].data == "") {
                    self.setPenetrations();
                } else { PENETRATIONS = JSON.parse(resultObj.data[0].data); };
            };
        });
        DB.query('getDataTerminations', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getDataTerminations"); } else {
                if (resultObj.data[0].data == "") {
                    self.setTerminations();
                } else { TERMINATIONS = JSON.parse(resultObj.data[0].data); };
            };
        });
        DB.query('getDataBase', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getDataBase"); } else {
                if (resultObj.data[0].data == "") {
                    self.setBase();
                } else { ROOFBASE = JSON.parse(resultObj.data[0].data); };
            };
        });
        DB.query('getAdmin', dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") { alert("Get Job Error at getAdmin"); } else {
                ADMIN = resultObj.data[0];
            };
        });
    };

    self.getActiveJobs = function() {
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
            obj.status = arr[i].status;
            ACTIVE.push(obj);
        }
        $rootScope.$broadcast('onRefreshActiveJobs');
    };

    self.createNewJob = function(obj) {
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
                self.selectedJobID = resultObj.data.id;
                self.getActiveJobs();
                newJobChain();
            }
        }, function(error) {
            alert("Query Error - SharedCtrl >> createNewJob");
        });
    };

    function newJobChain() {
        var dataObj = {};
        dataObj.jobID = self.selectedJobID;
        dataObj.data = "";
        DB.query('insertBase', dataObj).then(function(resultObj) {
            DB.query('insertField', dataObj).then(function(resultObj) {
                DB.query('insertHvac', dataObj).then(function(resultObj) {
                    DB.query('insertLayers', dataObj).then(function(resultObj) {
                        DB.query('insertMembrane', dataObj).then(function(resultObj) {
                            DB.query('insertPenetrations', dataObj).then(function(resultObj) {
                                DB.query('insertTerminations', dataObj).then(function(resultObj) {
                                    trace('newJobChain Complete');
                                    getLibrary();
                                });
                            });
                        });
                    });
                });
            });
        });
    };

    function getLibrary(){
        var getQuery = "getLibrary";
        DB.query(getQuery).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("LibCtrl >> getLibraryCategory ---- " + resultObj.data);
            } else {
                insertProposal(resultObj.data[0]);
            }
        }, function(error) {
            alert("Query Error - LibCtrl >> getLibraryCategory");
        });
    }

    function insertProposal(resultObj) {
        var dataObj = {};
        dataObj.jobID = self.selectedJobID;
        dataObj.introduction = resultObj.introduction;
        dataObj.materials = resultObj.materials;
        dataObj.deck = resultObj.deck;
        dataObj.insulation = resultObj.insulation;
        dataObj.membrane = resultObj.membrane;
        dataObj.postinstall = resultObj.postinstall;
        dataObj.exclusions = resultObj.exclusions;
        dataObj.warranty = resultObj.warranty;

        DB.query('insertProposal',dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("LibCtrl >> insertProposal ---- " + resultObj.data);
            } else {
                
            }
        }, function(error) {
            alert("Query Error - LibCtrl >> insertProposal");
        });

    };


    self.pushData = function(obj, set) {
        var jsonStr = JSON.stringify(obj);
        trace(myID + "pushData : " + jsonStr);
        var DBQuery = "update" + set;
        var dataObj = {};
        dataObj.jobID = self.selectedJobID;
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

    self.returnData = function(set) {
        var rtnObj = {};
        switch (set) {
            case "ADMIN":
                rtnObj = ADMIN;
                break;
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

    self.setField = function() {
        FIELD = { SQUARES: '0', CRNROUT: '0', CRNRIN: '0', WALLS: [] };
        return FIELD;
    };

    self.setLayers = function() {
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

    self.setPenetrations = function() {
        PENETRATIONS = {
            STARCAPS: [],
            VENTS: { SMALL: [] ,LARGE:[]},
            PIPES: { small: '0', medium: '0', large: '0' },
            DRAINS: { INTERNAL: [], SCUPPER: [] },
            GUTTERS: {
                EAVESTROUGH: { length: "", size: "" },
                DOWNSPOUTS: { length: "", qty: "" },
                CORNERS: { inside: "", outside: "" },
                ELBOWS: { front: "", side: "" },
                HARDWARE: { hangers: "", downspouts: "", endcaps: "" }
            }
        };
        //vents = { qty: '', size: '', shape: '',replace:''}
        // drains = { qty: '', size: ''}
        return PENETRATIONS;
    };

    self.setTerminations = function() {
        TERMINATIONS = {
            PERIMETER: '0',
            WALL: '0',
            PARAPET: [],
            OTHER: { length:'0',description: '', cost: '0' },
            DESIGN: {WALLS:[],EDGES:[]}
        };
        return TERMINATIONS;
        // walls = {type:'',length:'0',stretchout:'',cover:''}
        // Edges = {type:'',length:'0',stretchout:'',stripin:''}
        // parapet {length: '0', stretchout: '0',cleated:'No',material:''}
    };

    self.setHVAC = function() {
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

    self.setMembrane = function() {
        MEMBRANE = {
            GRIDPOS: 'A1',
            CLASS: '',
            MIL: '',
            ATTACH: 'Screw',
            SCREWS:{EDGE:{size:'',rate:''},FIELD:{size:'',rate:''}},
            TYPE: 'Standard'
        };
        return MEMBRANE;
    };


    // ISO = { material: '', thickness: '', size: '4x8', qty:''}
    self.setBase = function() {
        ROOFBASE = {
            DECK:{replace:'None',partial:'5',material: 'Plywood', thickness: '.75', size: '4x8', qty:''},
            ISO: [],
            ATTACHMENT:{class:'',item:'',rate:''},
            RATIO:{corners:'20',perimeter:'40',field:'40',total:'100'},
            SPECIAL: {}
        }
        return ROOFBASE;
    };

    self.setPanel = function() {
       // RPANEL is saved in Layers!!
    };



    function setTempData() {


    };

    self.clone = function(obj) {
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

    return self;

};