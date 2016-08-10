angular.module('app').component('scupperDrain', {
    bindings: {
        qty: '=',
        width:'=',
        downspout:'='
    },
    controller: function() {
        this.width_dp = ['4','6','8','10','12','14'];
    },
    templateUrl: 'views/input/penetrations/scupper-drain.tpl.html'
});
