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

    .state('materials', {
        url: "/materials",
        templateUrl: "views/results/materials.html"
    })

    .state('cost', {
        url: "/cost",
        templateUrl: "views/results/cost.html"
    })

    .state('layers', {
        url: "/layers",
        templateUrl: "views/input/layers/layers.html"
    })

    .state('field', {
        url: "/field",
        templateUrl: "views/input/field/field.html"
    })

    .state('penetrationsA', {
        url: "/penetrations-input",
        templateUrl: "views/input/penetrations/penetrations.html"
    })

    .state('penetrationsA.pipes', {
        url: "/pipes",
        templateUrl: "views/input/penetrations/pipes.html"
    })

    .state('penetrationsA.vents', {
        url: "/vents",
        templateUrl: "views/input/penetrations/vents.html"
    })

    .state('penetrationsA.drains', {
            url: "/drains",
            templateUrl: "views/input/penetrations/drains.html"
        })
        .state('penetrationsA.scuppers', {
            url: "/scuppers",
            templateUrl: "views/input/penetrations/scuppers.html"
        })

    .state('penetrationsA.gutters', {
        url: "/gutters",
        templateUrl: "views/input/penetrations/gutters.html"
    })

    .state('penetrationsB', {
        url: "/penetrations-design",
        templateUrl: "views/design/penetrations/penetrations.html"
    })

    .state('penetrationsB.pipes', {
        url: "/pipes",
        templateUrl: "views/design/penetrations/pipes.html"
    })

    .state('penetrationsB.vents', {
        url: "/vents",
        templateUrl: "views/design/penetrations/vents.html"
    })

    .state('penetrationsB.drains', {
            url: "/drains",
            templateUrl: "views/design/penetrations/drains.html"
        })
        .state('penetrationsB.scuppers', {
            url: "/scuppers",
            templateUrl: "views/design/penetrations/scuppers.html"
        })
        .state('penetrationsB.star', {
            url: "/star-caps",
            templateUrl: "views/design/penetrations/star-caps.html"
        })
        .state('penetrationsB.gutters', {
            url: "/gutters",
            templateUrl: "views/design/penetrations/gutters.html"
        })


    .state('terminationsA', {
            url: "/terminations-input",
            templateUrl: "views/input/terminations/terminations.html"
        })
        .state('terminationsA.edge', {
            url: "/edge",
            templateUrl: "views/input/terminations/edge.html"
        })
        .state('terminationsA.wall', {
            url: "/wall",
            templateUrl: "views/input/terminations/wall.html"
        })
        .state('terminationsA.parapet', {
            url: "/parapet",
            templateUrl: "views/input/terminations/parapet.html"
        })
        .state('terminationsA.cap', {
            url: "/cap",
            templateUrl: "views/input/terminations/cap.html"
        })
        .state('terminationsA.other', {
            url: "/other",
            templateUrl: "views/input/terminations/other.html"
        })

    .state('terminationsB', {
            url: "/terminations-design",
            templateUrl: "views/design/terminations/terminations.html"
        })
        .state('terminationsB.edge', {
            url: "/edge",
            templateUrl: "views/design/terminations/edge.html"
        })
        .state('terminationsB.wall', {
            url: "/wall",
            templateUrl: "views/design/terminations/wall.html"
        })
        .state('terminationsB.parapet', {
            url: "/parapet",
            templateUrl: "views/design/terminations/parapet.html"
        })
        .state('terminationsB.cap', {
            url: "/cap",
            templateUrl: "views/design/terminations/cap.html"
        })
        .state('terminationsB.other', {
            url: "/other",
            templateUrl: "views/design/terminations/other.html"
        })
        .state('terminationsB.examples', {
            url: "/examples",
            templateUrl: "views/design/terminations/examples.html"
        })

    .state('hvacA', {
        url: "/hvac-input",
        templateUrl: "views/input/hvac/hvac.html"
    })

    .state('hvacB', {
        url: "/hvac-design",
        templateUrl: "views/design/hvac/hvac.html"
    })

    .state('membrane', {
        url: "/membrane",
        templateUrl: "views/design/membrane/membrane.html"
    })

    .state('iso', {
        url: "/iso",
        templateUrl: "views/design/iso/iso.html"
    })

    .state('rpanel', {
        url: "/rpanel",
        templateUrl: "views/design/rpanel/rpanel.html"
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
