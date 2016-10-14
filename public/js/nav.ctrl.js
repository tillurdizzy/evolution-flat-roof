'use strict';
angular.module('app').controller('NavCtrl',myFunction);

myFunction.$inject = ['$scope','$state','$location','SharedSrvc'];

function myFunction($scope,$state,$location,SharedSrvc) { 
	
	var Me = this;
	var S = SharedSrvc;
    var resultPaths = ['materials','labor','invoice','proposal.introduction'];

	Me.jobSelected = false;
	Me.inputOpen = false;
	Me.designOpen = false;
	Me.resultOpen = false;

    Me.materialsComplete = false;
    Me.laborComplete = false;
    Me.invoiceComplete = false;

	Me.goNav = function(st){
        var flag = true;
        for (var i = 0; i < resultPaths.length; i++) {
            if(st == resultPaths[i]){
                flag = false;
                break;
            }
        }
        if(flag == true){
            Me.materialsComplete = false;
            Me.laborComplete = false;
            Me.invoiceComplete = false;
        }

		$state.transitionTo(st);
	};

	Me.isCurrentPath = function (path) {
        var x = $location.path();
        var xSplit = x.split('/')
        var y = xSplit[1];
        return y == path;
    };

    Me.toggleInput = function(){
    	Me.inputOpen = !Me.inputOpen;
    };

     Me.toggleDesign = function(){
    	Me.designOpen = !Me.designOpen;
    };

     Me.toggleResult = function(){
    	Me.resultOpen = !Me.resultOpen;
    };


    $scope.$on("jobSelectEvent", function(event,bol) {
        Me.jobSelected = bol;
    });

    $scope.$on("materialsComplete", function(event,bol) {
        Me.materialsComplete = true;
    });

    $scope.$on("laborComplete", function(event,bol) {
        Me.laborComplete = true;
    });

    $scope.$on("invoiceComplete", function(event,bol) {
        Me.invoiceComplete = true;
    });


 };