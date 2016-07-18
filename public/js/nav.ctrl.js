'use strict';

app.controller('NavCtrl',['$state',function ($state) {
	
	var Me = this;
	
	Me.goNav = function(st){
		$state.transitionTo(st);
	};


 }]);