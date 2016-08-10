angular.module('app').component('interiorDrain', {
    bindings: {
        qty: '=',
        size:'=',
        method:'='
    },
    controller: function() {
        this.size_dp = ['2','3','4','5','6'];
        this.method_dp = ['Boot','Retrofit','Cast'];
    },
    templateUrl: 'views/input/penetrations/interior-drain.tpl.html'
});
