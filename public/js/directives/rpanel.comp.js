angular.module('app').component('rpanel', {
    bindings: {
        rheight: '=',
        rwidth:'=',
        winged:'=',
        toplayer:'='
    },
    controller: function() {
        this.ribHeight_dp = ['1.25','1.50','2.00'];
        this.ribWidth_dp = [7,8,9,10,11,12,13,14,15,16];
        this.topLayer_dp = [1,2,3,4];
    },
    templateUrl: 'js/directives/rpanel.tpl.html'
});
