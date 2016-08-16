'use strict';
angular.module('app').service('DB', eventQueries);

eventQueries.$inject = ['$http', '$q'];

function eventQueries($http, $q) {
    var self = this;
    self.name = "DB: ";

    var httpPathPrefix = "http/";

    var queryPaths = {
        Adhesives: httpPathPrefix + "getAdhesives.php",
        Edging: httpPathPrefix + "getEdging.php",
        Fasteners: httpPathPrefix + "getFasteners.php",
        Flashing: httpPathPrefix + "getFlashing.php",
        Insulation: httpPathPrefix + "getInsulation.php",
        Membranes: httpPathPrefix + "getMembranes.php",
        Walkway: httpPathPrefix + "getWalkway.php",
        updateAdhesives: httpPathPrefix + "updateAdhesives.php",
        updateEdging: httpPathPrefix + "updateEdging.php",
        updateFasteners: httpPathPrefix + "updateFasteners.php",
        updateFlashing: httpPathPrefix + "updateFlashing.php",
        updateInsulation: httpPathPrefix + "updateInsulation.php",
        updateMembranes: httpPathPrefix + "updateMembranes.php",
        updateWalkways: httpPathPrefix + "updateWalkways.php"
    };

    self.query = function(query, dataObj) {
        var rtnObj = {};
        var phpPath = queryPaths[query];
        var deferred = $q.defer();
        $http({ method: 'POST', url: phpPath, data: dataObj })
            .success(function(data, status) {
                rtnObj.result = "Success";
                rtnObj.data = data;
                deferred.resolve(rtnObj);
            })
            .error(function(data, status, headers, config) {
                rtnObj.result = "Error";
                rtnObj.data = data;
                deferred.reject(rtnObj);
            });
        return deferred.promise;
    };

};
