angular.module('app').component('isoLayer', {
    bindings: {
        thickness:'=',
        size:'=',
        qty:'='
    },
    controller: function() {
    	
    	this.isoSize = ['4x4','4x8'];
    	this.iso_dp = ["0.50","0.75","1.00","1.25","1.50","2.00","2.50","3.00","3.10","3.25","3.50","4.00","4.50"];
		
    },
    templateUrl: 'views/design/base/iso-layer.tpl.html'
});
