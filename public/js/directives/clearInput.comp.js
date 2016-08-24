angular.module('app').component('clearInput', {
    bindings: {
        callback: '&',
        title:'@'
    },
    controller: function() {

    },
    templateUrl: 'js/directives/clear-input.tpl.html'
});
