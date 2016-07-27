'use strict';
angular.module('app').service('ListSrvc', [function sharedLists() {
    var self = this;

    self.template = [
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" },
        { item: "XXX", data: "XXX", color: "normal" }
    ];

    self.membraneTypes=[
    	{ label: "TPO - D4434", id: "TPO" }, 
    	{ label: "PVC - D4434", id: "PVC" }, 
    	{ label: "E/PVC - D4434", id: "EPVC1" }, 
    	{ label: "E/PVC - 6722", id: "EPVC2" }
    ];

    self.membraneThickness=[
    	{ label: "45 mil", id: "45M" }, 
    	{ label: "50 mil", id: "50M" }, 
    	{ label: "60 mil", id: "60M" }, 
    	{ label: "80 mil", id: "80M" }
    ];

    self.ISO=[
    	{ label: "0.50 in.", id: ".5" },
        { label: "0.75 in.", id: ".75" },
    	{ label: "1.00 in.", id: "1" }, 
        { label: "1.25 in.", id: "1.25" },
        { label: "1.50 in.", id: "1.5" },
        { label: "2.00 in.", id: "2" },
        { label: "2.50 in.", id: "2.5" },
       
        { label: "3.00 in.", id: "3" },
        { label: "3.10 in.", id: "3.1" },
       
        { label: "3.25 in.", id: "3.25" },
       
        { label: "3.50 in.", id: "3.5" },
        
        { label: "4.00 in.", id: "4" },
       
        { label: "4.50 in.", id: "4.5" }
    ];

    self.adhereMethod=[
        { label: "Screws", id: "screw" }, 
        { label: "Foam A & B", id: "foam" }
    ];

    self.roofLayers = [
        { label: "None", id: "NONE" },
        { label: "Tar & Gravel", id: "TRGRVL" },
        { label: "Modified Bitumen", id: "MODBTMN" },
        { label: "TPO / PVC", id: "PCV" },
        { label: "R-Panel", id: "RPANEL" },
        { label: "Insulation", id: "INSLTN" }
    ];

    self.ventShapes = [
        { label: "Round", id: "RD" },
        { label: "Square", id: "SQ" },
    ];

    self.drainSizes = [
        { label: "1.5 in.", id: "1.5" },
        { label: "2 in.", id: "2" },
        { label: "3 in.", id: "3" },
        { label: "4 in.", id: "4" },
        { label: "6 in.", id: "6" },
        { label: "8 in.", id: "8" }
    ];

    self.stretchOut = [
        { label: "16 in.", id: "16" },
        { label: "18 in.", id: "18" },
        { label: "20 in.", id: "20" },
        { label: "22 in.", id: "22" },
        { label: "24 in.", id: "24" },
        { label: "26 in.", id: "26" },
        { label: "28 in.", id: "28" },
        { label: "30 in.", id: "30" },
        { label: "32 in.", id: "32" },
        { label: "34 in.", id: "34" },
        { label: "36 in.", id: "36" },
        { label: "38 in.", id: "38" },
        { label: "40 in.", id: "40" }
    ];

    self.termBarSize = [
    { label: ".75 in.", id: ".75" },
        { label: "1.75 in.", id: "1.75" },
        { label: "4 in.", id: "4" }
    ];

    self.ventSizes = [
        { label: "4 in.", id: "4" },
        { label: "6 in.", id: "6" },
        { label: "8 in.", id: "8" }
    ];

    self.sizeInches = [
        { label: "1 in.", id: "1" },
        { label: "2 in.", id: "2" },
        { label: "3 in.", id: "3" },
        { label: "4 in.", id: "4" },
        { label: "5 in.", id: "5" },
        { label: "6 in.", id: "6" },
        { label: "7 in.", id: "7" },
        { label: "8 in.", id: "8" }
    ];


    self.numbersToTwelve = [
        { label: "One", id: 1 }, { label: "Two", id: 2 }, { label: "Three", id: 3 }, { label: "Four", id: 4 }, { label: "Five", id: 5 },
        { label: "Six", id: 6 }, { label: "Seven", id: 7 }, { label: "Eight", id: 8 }, { label: "Nine", id: 9 }, { label: "Ten", id: 10 },
        { label: "Eleven", id: 11 }, { label: "Twelve+", id: 12 }
    ];

    self.numbersToFive = [
        { label: "One", id: 1 }, { label: "Two", id: 2 }, { label: "Three", id: 3 }, { label: "Four", id: 4 }, { label: "Five", id: 5 }
    ];

    self.numbersToTen = [
        { label: "Zero", id: 0 }, { label: "One", id: 1 }, { label: "Two", id: 2 }, { label: "Three", id: 3 }, { label: "Four", id: 4 }, { label: "Five", id: 5 },
        { label: "Six", id: 6 }, { label: "Seven", id: 7 }, { label: "Eight", id: 8 }, { label: "Nine", id: 9 }, { label: "Ten", id: 10 }
    ];


    self.trueFalse = [
        { label: "False", id: 0 },
        { label: "True", id: 1 }
    ];

    self.yesNo = [
        { label: "No", id: 0 },
        { label: "Yes", id: 1 }
    ];


    self.returnIdValue = function(set, id) {
        var rtnObj = {};
        for (var i = 0; i < set.length; i++) {
            if (set[i].id == id) {
                rtnObj = set[i];
            }
        }
        return rtnObj;
    };

    self.returnObjById = function(set, id) {
        var rtnObj = {};
        for (var i = 0; i < set.length; i++) {
            if (set[i].id == id) {
                rtnObj = set[i];
            }
        }
        return rtnObj;
    };

    self.returnObjByLabel = function(set, lbl) {
        var rtnObj = {};
        for (var i = 0; i < set.length; i++) {
            if (set[i].label == lbl) {
                rtnObj = set[i];
                break;
            }
        }
        return rtnObj;
    };

}]);
