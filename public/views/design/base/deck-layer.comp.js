angular.module('app').component('deckLayer', {
    bindings: {
        material: '=',
        thickness:'=',
        size:'=',
        qty:'='
    },
    controller: function() {
    	this.materials_dp = ['Plywood','Densdeck'];
    	this.isoSize = ['4x4','4x8'];
		this.plywood_dp = ['.50','.75','.625'];
		this.densdeck_dp = ['.25','.50'];

        function selectMaterial(){
            if(this.material == "Plywood" || this.material == "Densdeck"){
                this.size = "4x8";
                this.thickness = ".50";
            };
        }
        this.selectMaterial = selectMaterial;
    },
    templateUrl: 'views/design/base/deck-layer.tpl.html'
});
