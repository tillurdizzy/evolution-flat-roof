angular.module('app').component('capReview', {
    bindings: {
        length: '=',
        stretchout:'=',
        cleated:'=',
        material:'='
    },
    controller: function() {
        this.material_dp = ['Galvanized','Copper'];
        this.option_dp = ['Yes','No'];
    },
    templateUrl: 'views/design/terminations/cap-review.tpl.html'
});
