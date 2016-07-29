angular.module('app').component('rpanel', {
    bindings: {
        height: '=',
        width:'=',
        winged:'=',
        insulation:'='
    },
    controller: function() {
        this.ribHeight_dp = ['1.25','1.50','2.00'];
        this.ribWidth_dp = [7,8,9,10,11,12,13,14,15,16];
        this.insulation_dp = [1,2,3,4];
        this.wingedFill_dp = ['No','Yes'];
    },
    templateUrl: 'views/input/layers/rpanel.tpl.html'
});
