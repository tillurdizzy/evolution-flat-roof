angular.module('app').component('capReview', {
    bindings: {
        length: '=',
        stretchout:'=',
        cleated:'=',
        material:'='
    },
    controller: function() {
        this.material_dp = [{label:'Galvanized',id:5001},{label:'Copper',id:5002}];
        this.option_dp = ['Yes','No'];
    },
    templateUrl: 'views/design/terminations/cap-review.tpl.html'
});
