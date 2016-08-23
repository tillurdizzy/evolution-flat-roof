angular.module('app').component('ventLarge', {
    bindings: {
        qty: '=',
        size:'=',
        shape:'=',
        replace:'='
    },
    controller: function() {
        this.size_dp = ['9','10','11','12','13','14','15','16'];
        this.shape_dp = ['Round','Square'];
    },
    templateUrl: 'views/input/penetrations/vent-small.tpl.html'
});
