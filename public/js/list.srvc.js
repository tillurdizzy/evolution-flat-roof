'use strict';
angular.module('app').service('ListSrvc',[function sharedLists(){
	var self = this;

	self.template = [
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"}
	];

  self.roofLayers = [
    {label:"None",id:"NONE"},
    {label:"Tar & Gravel",id:"TRGRVL"},
    {label:"Modified Bitumen",id:"MODBTMN"},
    {label:"TPO / PVC",id:"PCV"},
    {label:"Insulation",id:"INSLTN"}
  ];

  self.ventShapes = [
    {label:"Round",id:"RD"},
    {label:"Square",id:"SQ"},
  ];

  self.drainSizes = [
    {label:"1.5 in.",id:"1.5"},
    {label:"2 in.",id:"2"},
    {label:"3 in.",id:"3"},
    {label:"4 in.",id:"4"},
    {label:"6 in.",id:"6"},
    {label:"8 in.",id:"8"}
  ];

  self.termBarSize = [
    {label:"1.5 in.",id:"1.5"},
    {label:"4 in.",id:"4"}
  ];

  self.sizeInches = [
    {label:"1 in.",id:"1"},
    {label:"2 in.",id:"2"},
    {label:"3 in.",id:"3"},
    {label:"4 in.",id:"4"},
    {label:"5 in.",id:"5"},
    {label:"6 in.",id:"6"},
    {label:"7 in.",id:"7"},
    {label:"8 in.",id:"8"}
  ];

	
	self.numbersToTwelve = [
		{label:"One",id:1},{label:"Two",id:2},{label:"Three",id:3},{label:"Four",id:4},{label:"Five",id:5},
		{label:"Six",id:6},{label:"Seven",id:7},{label:"Eight",id:8},{label:"Nine",id:9},{label:"Ten",id:10},
		{label:"Eleven",id:11},{label:"Twelve+",id:12}];

	self.numbersToFive = [
		{label:"One",id:1},{label:"Two",id:2},{label:"Three",id:3},{label:"Four",id:4},{label:"Five",id:5}];

	self.numbersToTen = [
		{label:"Zero",id:0},{label:"One",id:1},{label:"Two",id:2},{label:"Three",id:3},{label:"Four",id:4},{label:"Five",id:5},
		{label:"Six",id:6},{label:"Seven",id:7},{label:"Eight",id:8},{label:"Nine",id:9},{label:"Ten",id:10}];
	
	
	self.trueFalse = [
		{label:"False",id:0},
		{label:"True",id:1}];

	self.yesNo = [
		{label:"No",id:0},
		{label:"Yes",id:1}];

	
	self.returnIdValue = function(set,id){
		var rtnObj = {};
		for (var i = 0; i < set.length; i++) {
			if (set[i].id == id) {
				rtnObj = set[i];
			}
		}
		return rtnObj;
	};

	self.returnObjById = function(set,id){
		var rtnObj = {};
		for (var i = 0; i < set.length; i++) {
			if (set[i].id == id) {
				rtnObj = set[i];
			}
		}
		return rtnObj;
	};

	self.returnObjByLabel = function(set,lbl){
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