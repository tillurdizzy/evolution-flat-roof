'use strict';
angular.module('app', ['ngMaterial', 'ui.router'])
    .config(initRouter)
    .config(mdTheme)
    .run(runBlock);

initRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function initRouter($stateProvider, $urlRouterProvider) {

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

    .state('penetrations', {
        url: "/penetrations",
        templateUrl: "views/input/penetrations/penetrations.html"
    })

    .state('penetrations.pipes', {
        url: "/pipes",
        templateUrl: "views/input/penetrations/pipes.html"
    })

    .state('penetrations.vents', {
        url: "/vents",
        templateUrl: "views/input/penetrations/vents.html"
    })

    .state('penetrations.drains', {
        url: "/drains",
        templateUrl: "views/input/penetrations/drains.html"
    })
    .state('penetrations.scuppers', {
        url: "/scuppers",
        templateUrl: "views/input/penetrations/scuppers.html"
    })
    .state('penetrations.star', {
        url: "/star",
        templateUrl: "views/input/penetrations/star.html"
    })
    .state('penetrations.other', {
        url: "/other",
        templateUrl: "views/input/penetrations/other.html"
    })



    .state('edges', {
        url: "/edges",
        templateUrl: "views/input/edges/edges.html"
    })
    
    .state('terminations', {
        url: "/terminations",
        templateUrl: "views/design/terminations/terminations.html"
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

};


mdTheme.$inject = ['$mdThemingProvider'];

function mdTheme($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('red');
};

runBlock.$inject = ['SharedSrvc'];

function runBlock(SharedSrvc) {
    SharedSrvc.setTempData();
};
