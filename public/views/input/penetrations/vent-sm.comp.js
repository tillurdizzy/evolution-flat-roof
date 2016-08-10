angular.module('app').component('ventSmall', {
    bindings: {
        qty: '=',
        size:'=',
        shape:'=',
        replace:'='
    },
    controller: function() {
        this.size_dp = ['2','3','4','5','6','7','8'];
        this.shape_dp = ['Round','Square'];
    },
    templateUrl: 'views/input/penetrations/vent-small.tpl.html'
});
