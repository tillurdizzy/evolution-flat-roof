angular.module('app').component('supportTimber', {
    bindings: {
        qty: '=',
        width:'='
    },
    controller: function() {
        this.width_dp = ['4','6','8','10','12','14'];
    },
    templateUrl: 'views/design/hvac/support-timber.tpl.html'
});
