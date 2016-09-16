angular.module('app').component('supportFoam', {
    bindings: {
        qty: '=',
        width:'='
    },
    controller: function() {
        this.foam_support_dp = [
        	{label:'4',id:4020},
        	{label:'6',id:4021},
        	{label:'8',id:4022},
        	{label:'10',id:4023},
        	{label:'12',id:4024},
        	{label:'14',id:40025}];
    },
    templateUrl: 'views/design/hvac/support-foam.tpl.html'
});
