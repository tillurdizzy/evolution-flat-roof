'use strict';
angular.module('app', ['ngMaterial', 'ui.router'])


.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "views/home/home.html"
    })

    .state('layers', {
        url: "/layers",
        templateUrl: "views/input/layers/layers.html"
    })

    .state('field', {
        url: "/field",
        templateUrl: "views/input/field/field.html"
    })

    .state('vents', {
        url: "/vents",
        templateUrl: "views/input/vents/vents.html"
    })

    .state('perimiter', {
        url: "/perimiter",
        templateUrl: "views/input/perimiter/perimiter.html"
    })

    .state('hvac', {
        url: "/hvac",
        templateUrl: "views/input/hvac/hvac.html"
    })

    .state('membrane', {
        url: "/membrane",
        templateUrl: "views/design/membrane/membrane.html"
    })

    .state('iso', {
        url: "/iso",
        templateUrl: "views/design/iso/iso.html"
    })

})

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('red');
});
