angular.module('app').component('wallTerm', {
    bindings: {
        type: '=',
        length:'=',
        cover:'=',
        stretchout:'='
    },
    controller: function() {
        this.type_dp = [
	        {label:'PVC Facia Bar 1.75"',id:3000},
	        {label:'PVC Facia Bar 4"',id:3001},
	        {label:'Aluminum T-Bar',id:2001},
	        {label:'PVC T-Bar',id:2002}];

	    this.coverA_dp = [
	        {label:'Plastic',id:3002},
	        {label:'Metal',id:3003}];

	    this.coverB_dp = [
	        {label:'Plastic',id:3004},
	        {label:'Metal',id:3005}];

        this.twoThruFortyEight = ["2","4","6","8","10","12","14","16","18","20","22","24","26","28","30","32","34","36","38","40","42","44","46","48"];
    },
    templateUrl: 'views/design/terminations/wall-term.tpl.html'
});
