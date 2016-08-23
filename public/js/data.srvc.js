'use strict';
angular.module('app').service('DB', eventQueries);

eventQueries.$inject = ['$http', '$q'];

function eventQueries($http, $q) {
    var self = this;
    var ME = "DB: ";
    var doTrace = true;
    var httpPathPrefix = "http/";

    var queryPaths = {
        Adhesives: httpPathPrefix + "getAdhesives.php",
        Edging: httpPathPrefix + "getEdging.php",
        Fasteners: httpPathPrefix + "getFasteners.php",
        Flashing: httpPathPrefix + "getFlashing.php",
        Insulation: httpPathPrefix + "getInsulation.php",
        Membranes: httpPathPrefix + "getMembranes.php",
        Walkway: httpPathPrefix + "getWalkway.php",
        getActiveJobs: httpPathPrefix + "getActiveJobs.php",
        updateAdhesives: httpPathPrefix + "updateAdhesives.php",
        updateEdging: httpPathPrefix + "updateEdging.php",
        updateFasteners: httpPathPrefix + "updateFasteners.php",
        updateFlashing: httpPathPrefix + "updateFlashing.php",
        updateInsulation: httpPathPrefix + "updateInsulation.php",
        updateMembranes: httpPathPrefix + "updateMembranes.php",
        updateWalkways: httpPathPrefix + "updateWalkways.php",
        updateFIELD: httpPathPrefix + "updateField.php",
        updateLAYERS: httpPathPrefix + "updateLayers.php",
        updatePENETRATIONS: httpPathPrefix + "updatePenetrations.php",
        updateTERMINATIONS: httpPathPrefix + "updateTerminations.php",
        updateHVAC: httpPathPrefix + "updateHvac.php",
        updateMEMBRANE: httpPathPrefix + "updateMembrane.php",
        updateROOFBASE: httpPathPrefix + "updateBase.php",
        insertJob: httpPathPrefix + "insertJob.php",
        insertBase: httpPathPrefix + "insertBase.php",
        insertField: httpPathPrefix + "insertField.php",
        insertLayers: httpPathPrefix + "insertLayers.php",
        insertMembrane: httpPathPrefix + "insertMembrane.php",
        insertPenetrations: httpPathPrefix + "insertPenetrations.php",
        insertTerminations: httpPathPrefix + "insertTerminations.php",
        insertHvac: httpPathPrefix + "insertHvac.php",
        getDataJob: httpPathPrefix + "getDataJob.php",
        getDataBase: httpPathPrefix + "getDataBase.php",
        getDataField: httpPathPrefix + "getDataField.php",
        getDataLayers: httpPathPrefix + "getDataLayers.php",
        getDataMembrane: httpPathPrefix + "getDataMembrane.php",
        getDataPenetrations: httpPathPrefix + "getDataPenetrations.php",
        getDataTerminations: httpPathPrefix + "getDataTerminations.php",
        getDataHvac: httpPathPrefix + "getDataHvac.php"
    };

    var trace = function(obj) {
        if (doTrace) {
            console.log(ME + obj.result);
        }
    };

    self.query = function(query, dataObj) {
        var rtnObj = {};
        var phpPath = queryPaths[query];
        var deferred = $q.defer();
        $http({ method: 'POST', url: phpPath, data: dataObj })
            .success(function(data, status) {
                rtnObj.result = "Success";
                rtnObj.data = data;
                trace(rtnObj);
                deferred.resolve(rtnObj);
            })
            .error(function(data, status, headers, config) {
                rtnObj.result = "Error";
                rtnObj.data = data;
                trace(rtnObj);
                deferred.reject(rtnObj);
            });
        return deferred.promise;
    };

};
