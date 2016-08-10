angular.module('app').component('hvacFootprints', {
    bindings: {
        qty: '=',
        footprintX:'=',
        footprintY:'='
    },
    controller: function() {
       this.footage_dp = ['3','3.5','4','4.5','5','5.5','6'];
    },
    templateUrl: 'views/input/hvac/hvac-footprint.tpl.html'
});
