angular.module('app').component('starCap', {
    bindings: {
        qty: '=',
        size:'=',
        finish:'='
    },
    controller: function() {
        this.size_dp = ['4','5','6','7','8','9'];
        this.finish_dp = ["Painted","Galvanized"];
    },
    templateUrl: 'views/input/penetrations/star.tpl.html'
});
