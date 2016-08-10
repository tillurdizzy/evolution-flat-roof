angular.module('app').component('wallTerm', {
    bindings: {
        type: '=',
        length:'='
    },
    controller: function() {
        this.type_dp = ['T-Bar','T-Bar with Reglet','Facia Bar','Facia Bar with Cover'];
    },
    templateUrl: 'views/design/terminations/wall-term.tpl.html'
});
