angular.module('app').component('supportTimber', {
    bindings: {
        qty: '=',
        width:'='
    },
    controller: function() {
        this.wood_support_dp = [
        	{label:'4',id:4001},
        	{label:'6',id:4002},
        	{label:'8',id:4003},
        	{label:'10',id:4004},
        	{label:'12',id:4005},
        	{label:'14',id:4006}];
    },
    templateUrl: 'views/design/hvac/support-timber.tpl.html'
});
