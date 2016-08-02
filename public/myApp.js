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

    .state('illustrations', {
            url: "/illustrations",
            templateUrl: "views/home/illustrations.html"
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
        url: "/star-caps",
        templateUrl: "views/input/penetrations/star-caps.html"
    })
    .state('penetrations.other', {
        url: "/other",
        templateUrl: "views/input/penetrations/other.html"
    })


    .state('terms', {
        url: "/terms",
        templateUrl: "views/input/terms/terms.html"
    })
    .state('terms.edge', {
        url: "/edge",
        templateUrl: "views/input/terms/edge.html"
    })
    .state('terms.wall', {
        url: "/wall",
        templateUrl: "views/input/terms/wall.html"
    })
    .state('terms.parapet', {
        url: "/parapet",
        templateUrl: "views/input/terms/parapet.html"
    })
    .state('terms.cap', {
        url: "/cap",
        templateUrl: "views/input/terms/cap.html"
    })
    .state('terms.other', {
        url: "/other",
        templateUrl: "views/input/terms/other.html"
    })
    
    .state('terminations', {
        url: "/terminations",
        templateUrl: "views/design/terminations/terminations.html"
    })
    .state('terminations.edge', {
        url: "/edge",
        templateUrl: "views/design/terminations/edge.html"
    })
    .state('terminations.wall', {
        url: "/wall",
        templateUrl: "views/design/terminations/wall.html"
    })
    .state('terminations.parapet', {
        url: "/parapet",
        templateUrl: "views/design/terminations/parapet.html"
    })
    .state('terminations.cap', {
        url: "/cap",
        templateUrl: "views/design/terminations/cap.html"
    })
    .state('terminations.other', {
        url: "/other",
        templateUrl: "views/design/terminations/other.html"
    })
    .state('terminations.examples', {
        url: "/examples",
        templateUrl: "views/design/terminations/examples.html"
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
