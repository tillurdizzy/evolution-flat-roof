'use strict';
angular.module('app').factory('LaborSrvc', LaborSrvc);

LaborSrvc.$inject = ['SharedSrvc', 'ResultsSrvc', '$rootScope'];

function LaborSrvc(SharedSrvc, ResultsSrvc, $rootScope) {

    var self = this;
    var S = SharedSrvc;
    var myID = "LaborSrvc: ";

    var FIELD = [];
    var MEM = [];
    var BASE = [];
    var PEN = [];
    var TERM = [];
    var HVAC = [];
    var RPAN = [];
    var ADMIN = [];

    self.LABOR = [];
    self.laborTotal = 0;
    self.footnotes = {};

    self.initSrvc = function() {
        self.totals = { tearout: 0, membrane: 0, terminations: 0, penetrations: 0, elecSupport: 0, rpanel: 0 };
        self.laborTotal = 0;
        self.footnotes = {};
        FIELD = S.returnData('FIELD');
        BASE = S.returnData('ROOFBASE');
        MEM = S.returnData('MEMBRANE');
        PEN = S.returnData('PENETRATIONS');
        TERM = S.returnData('TERMINATIONS');
        HVAC = S.returnData('HVAC');
        RPAN = S.returnData('LAYERS');
        ADMIN = S.returnData('ADMIN');

        processLabor();
    };

    function processLabor() {
        self.LABOR = [];

        var laborPerSquare = returnNumber(ADMIN.laborPerSquare);
        var jobSqs = returnNumber(FIELD.SQUARES);
        var membraneLabor = decimalPrecisionTwo(laborPerSquare * jobSqs);
        self.totals.membrane = membraneLabor;

        var laborTearOff = 0;
        var tearOffSqs = 0;
        var deckReplace = BASE.DECK.replace;
        if (deckReplace == "None") {

        } else {
            if (deckReplace == "All") {
                tearOffSqs = jobSqs;
            } else if (deckReplace == "Partial") {
                var replacePartial = returnNumber(BASE.DECK.partial);
                tearOffSqs = 
            }
        }

        var tearOffPercent =

            self.laborTotal += membraneLabor;
        self.LABOR.push({ item: "Membrane (per square)", qty: jobSqs, price: laborPerSquare, total: membraneLabor });

        laborComplete();
    };

    function laborComplete() {
        ResultsSrvc.setLaborTotal(self.laborTotal);
        $rootScope.$broadcast('laborComplete', true);
    };

    function decimalPrecisionTwo(data) {
        var num = returnNumber(data, 'num');
        var result = Math.round(num * 100) / 100;
        return result;
    };

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


    function returnNumber(input, type) {
        if (type == undefined) {
            type = "num";
        }
        var badInput = 0;
        var rtn = 0;
        if (type == "int") {
            rtn = parseInt(input);
            if (isNaN(rtn)) {
                return badInput;
            }
        } else if (type == "num") {
            rtn = Number(input);
            if (isNaN(rtn)) {
                return badInput;
            }
        }
        return rtn;
    };

    return self;

};
