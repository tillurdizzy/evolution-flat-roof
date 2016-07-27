angular.module('app').component('counter', {
    bindings: {
        count: '=',
        max:'=',
        min:'='
    },
    controller: function() {
        function increment() {
        	var countPlus = this.count + 1;
        	if(countPlus <= this.max){
        		this.count++;
        	} 
        };

        function decrement() {
        	var countMinus = this.count - 1;
            if(countMinus >= this.min){
        		this.count--;
        	} 
        }
        this.increment = increment;
        this.decrement = decrement;
    },
    template: [
        '<div class="counter-component">',
        '<input type="tel" ng-model="$ctrl.count">',
        '<button type="button" ng-click="$ctrl.decrement();">-</button>',
        '<button type="button" ng-click="$ctrl.increment();">+</button>',
        '</div>'
    ].join('')
});
