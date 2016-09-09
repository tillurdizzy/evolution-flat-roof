angular.module('app').component('edgeTerm', {
    bindings: {
        type: '=',
        length:'=',
        stretchout:'=',
        stripin:'='
    },
    controller: function() {
        this.type_dp = [
        	{label:'Clad Metal - PVC',id:1001},
        	{label:'Clad Metal - PVC Elvaloy',id:1002},
        	{label:'Clad Metal - TPO',id:1003},
        	{label:'Aluminum T-Bar',id:2001},
        	{label:'PVC T-Bar',id:2002}];

        this.twoThruFortyEight = ["2","4","6","8","10","12","14","16","18","20","22","24","26","28","30","32","34","36","38","40","42","44","46","48"];
    },
    templateUrl: 'views/design/terminations/edge-term.tpl.html'
});
