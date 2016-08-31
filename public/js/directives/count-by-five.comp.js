angular.module('app').component('counterFive', {
    bindings: {
        count: '=',
        max:'=',
        min:'='
    },
    controller: function() {
        function increment() {
        	var countPlus = this.count + 5;
        	if(countPlus <= this.max){
        		this.count = countPlus;
        	} 
        };

        function decrement() {
        	var countMinus = this.count - 5;
            if(countMinus >= this.min){
        		this.count = countMinus;
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
