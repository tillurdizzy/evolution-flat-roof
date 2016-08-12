angular.module('app').component('baseLayer', {
    bindings: {
        material: '=',
        thickness:'=',
        size:'='
    },
    controller: function() {
    	this.materials_dp = ['ISO','Plywood','Densdeck'];
    	this.isoSize = ['4x4','4x8'];
    	this.iso_dp = ["0.50","0.75","1.00","1.25","1.50","2.00","2.50","3.00","3.10","3.25","3.50","4.00","4.50"];
		this.plywood_dp = ['.50','.75','.625'];
		this.densdeck_dp = ['.25','.50'];
    },
    templateUrl: 'views/design/iso/base-layer.tpl.html'
});
