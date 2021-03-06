angular.module('app').component('baseLayer', {
    bindings: {
        material: '=',
        thickness:'=',
        size:'=',
        qty:'='
    },
    controller: function() {
    	this.materials_dp = ['ISO','Fanfold'];
    	this.isoSize = ['4x4','4x8'];
    	this.iso_dp = ["0.50","0.75","1.00","1.25","1.50","2.00","2.50","3.00","3.10","3.25","3.50","4.00","4.50"];
		this.fanfold_dp = ['.50'];

        function selectMaterial(){
            if(this.material == "Plywood" || this.material == "Densdeck"){
                this.size = "4x8";
                this.thickness = ".50";
            };
        }
        this.selectMaterial = selectMaterial;
    },
    templateUrl: 'views/design/base/base-layer.tpl.html'
});
