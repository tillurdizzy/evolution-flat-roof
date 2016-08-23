'use strict';
angular.module('app').service('ListSrvc', [function sharedLists() {
    var self = this;


    self.membraneTypes = ["TPO - D4434","PVC - D4434","E/PVC - D4434","E/PVC - 6722"];

    self.membraneThickness = ["45 mil","50 mil","60 mil","80 mil"];

    self.ISO = ["0.50","0.75","1.00","1.25","1.50","2.00","2.50","3.00","3.10","3.25","3.50","4.00","4.50"];

    self.adhereMethod = ["Screws","Foam A+B"];
    self.attachMethod = ["Fully Adhered","Mechanically Attached"];
    self.membraneType = ["Standard","Fleece Back"];
    self.baseLayerMaterials = ['Plywood',"ISO","Densdeck"];

    self.roofLayersA = [
        { label: "TPO / PVC", id: "PCV" },
        { label: "Tar & Gravel", id: "TRGRVL" },
        { label: "Modified Bitumen", id: "MODBTMN" },
        { label: "R-Panel", id: "RPANEL" },
        { label: "None", id: "" }
    ];

    self.roofLayersB = [
        { label: "TPO / PVC", id: "PCV" },
        { label: "Tar & Gravel", id: "TRGRVL" },
        { label: "Modified Bitumen", id: "MODBTMN" },
        { label: "Insulation", id: "INSLTN" },
        { label: "None", id: "" }
    ];

    self.ventShapes = ["NA","Round", "Square"];

    self.coverType = ['NA',"Plastic", "Metal"];

    self.edgeTermination = ["NA","T-Bar","Clad Metal"];

    self.wallTermination = ["NA","T-Bar","Unknown"];

    self.drainSizes = ["1.5","2","3","4","6","8"];

    self.sixteenThruForty = ["16","18","20","22","24","26","28","30","32","34","36","38","40"];

    self.twoThruFortyEight = ["2","4","6","8","10","12","14","16","18","20","22","24","26","28","30","32","34","36","38","40","42","44","46","48"];

    self.termBarSize = [".75","1.75","4"];

    self.ventSizes = ['4','6','8'];

    self.oneThruEight = ['1','2','3','4','5','6','7','8'];
    self.NineThruSixteen = ['9','10','11','12','13','14','15','16'];


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


    self.trueFalse = ["False","True"];

    self.yesNo = ["No","Yes"];


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
