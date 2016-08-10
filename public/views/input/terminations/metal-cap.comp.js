angular.module('app').component('metalCap', {
    bindings: {
        length: '=',
        stretchout:'=',
        cleated:'='
    },
    controller: function() {
        this.width_dp = ["2","4","6","8","10","12","14","16","18","20","22","24","26","28","30","32","34","36","38","40","42","44","46","48"];
        this.cleated_dp = ["Yes","No"];
    },
    templateUrl: 'views/input/terminations/metal-cap.tpl.html'
});
