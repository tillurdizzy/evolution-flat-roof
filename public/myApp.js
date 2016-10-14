'use strict';
angular.module('app', ['ngMaterial', 'ui.router','ngUnderscore'])
    .config(initRouter)
    .config(mdTheme)
    .run(runBlock);

initRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function initRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home/active-jobs");

    $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "views/home/home.html"
    })

    .state('home.selected', {
        url: "/selected-job",
        templateUrl: "views/home/jobs-selected.html"
    })

    .state('home.active', {
        url: "/active-jobs",
        templateUrl: "views/home/jobs-active.html"
    })

    .state('home.new', {
        url: "/new-job",
        templateUrl: "views/home/jobs-new.html"
    })

    .state('illustrations', {
        url: "/illustrations",
        templateUrl: "views/home/illustrations.html"
    })

    .state('inventory', {
        url: "/inventory",
        templateUrl: "views/home/inventory.html"
    })

    .state('library', {
        url: "/library",
        templateUrl: "views/home/library.html"
    })

    .state('library.introduction', {
        url: "/introduction",
        templateUrl: "views/home/library/introduction.html"
    })
    .state('library.materials', {
        url: "/materials",
        templateUrl: "views/home/library/materials.html"
    })
    .state('library.deck', {
        url: "/deck",
        templateUrl: "views/home/library/deck.html"
    })
    .state('library.insulation', {
        url: "/insulation",
        templateUrl: "views/home/library/insulation.html"
    })
    .state('library.membrane', {
        url: "/membrane",
        templateUrl: "views/home/library/membrane.html"
    })
    .state('library.postinstall', {
        url: "/postinstall",
        templateUrl: "views/home/library/postinstall.html"
    })
    .state('library.exclusions', {
        url: "/exclusions",
        templateUrl: "views/home/library/exclusions.html"
    })
    .state('library.warranty', {
        url: "/warranty",
        templateUrl: "views/home/library/warranty.html"
    })

    .state('materials', {
        url: "/materials",
        templateUrl: "views/results/materials.html"
    })

    .state('labor', {
        url: "/labor",
        templateUrl: "views/results/labor.html"
    })

    .state('invoice', {
        url: "/invoice",
        templateUrl: "views/results/invoice.html"
    })

    .state('proposal', {
        url: "/proposal",
        templateUrl: "views/results/proposal.html"
    })

    .state('proposal.introduction', {
        url: "/introduction",
        templateUrl: "views/results/proposal/introduction.html"
    })

    .state('proposal.deck', {
        url: "/deck",
        templateUrl: "views/results/proposal/deck.html"
    })

    .state('proposal.materials', {
        url: "/materials",
        templateUrl: "views/results/proposal/materials.html"
    })

    .state('proposal.membrane', {
        url: "/membrane",
        templateUrl: "views/results/proposal/membrane.html"
    })

    .state('proposal.insulation', {
        url: "/insulation",
        templateUrl: "views/results/proposal/insulation.html"
    })

    .state('proposal.postinstall', {
        url: "/postinstall",
        templateUrl: "views/results/proposal/postinstall.html"
    })

    .state('proposal.exclusions', {
        url: "/exclusions",
        templateUrl: "views/results/proposal/exclusions.html"
    })

    .state('proposal.warranty', {
        url: "/warranty",
        templateUrl: "views/results/proposal/warranty.html"
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
            templateUrl: "views/design/terminations/edges.html"
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

    .state('base', {
        url: "/base",
        templateUrl: "views/design/base/base.html"
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

runBlock.$inject = ['SharedSrvc','InventorySrvc'];

function runBlock(SharedSrvc,InventorySrvc) {
    InventorySrvc.initSrvc();
};
