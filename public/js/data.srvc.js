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
        Base: httpPathPrefix + "getBaseInventory.php",
        Membranes: httpPathPrefix + "getMembraneInventory.php",
        Walkway: httpPathPrefix + "getWalkway.php",
        getActiveJobs: httpPathPrefix + "getActiveJobs.php",
        updateJob: httpPathPrefix + "updateJob.php",
        updateContract: httpPathPrefix + "updateContract.php",
        updateAdhesives: httpPathPrefix + "updateAdhesives.php",
        updateEdging: httpPathPrefix + "updateEdging.php",
        updateFasteners: httpPathPrefix + "updateFasteners.php",
        updateFlashing: httpPathPrefix + "updateFlashing.php",
        updateBase: httpPathPrefix + "updateBase.php",
        updateMembranes: httpPathPrefix + "updateMembraneInventory.php",
        updateWalkways: httpPathPrefix + "updateWalkways.php",
        updateFIELD: httpPathPrefix + "updateField.php",
        updateLAYERS: httpPathPrefix + "updateLayers.php",
        updatePENETRATIONS: httpPathPrefix + "updatePenetrations.php",
        updateTERMINATIONS: httpPathPrefix + "updateTerminations.php",
        updateHVAC: httpPathPrefix + "updateHvac.php",
        updateMEMBRANE: httpPathPrefix + "updateMembraneDesign.php",
        updateROOFBASE: httpPathPrefix + "updateBaseDesign.php",
        insertJob: httpPathPrefix + "insertJob.php",
        insertProposal: httpPathPrefix + "insertProposal.php",
        insertBase: httpPathPrefix + "insertBaseDesign.php",
        insertField: httpPathPrefix + "insertField.php",
        insertLayers: httpPathPrefix + "insertLayers.php",
        insertMembrane: httpPathPrefix + "insertMembraneDesign.php",
        insertPenetrations: httpPathPrefix + "insertPenetrations.php",
        insertTerminations: httpPathPrefix + "insertTerminations.php",
        insertHvac: httpPathPrefix + "insertHvac.php",
        insertInvtFasteners: httpPathPrefix + "insertInvtFasteners.php",
        insertInvtBase: httpPathPrefix + "insertInvtBase.php",
        insertInvtEdging: httpPathPrefix + "insertInvtEdging.php",
        insertInvtFlashing: httpPathPrefix + "insertInvtFlashing.php",
        insertInvtMembranes: httpPathPrefix + "insertInvtMembranes.php",
        insertInvtWalkway: httpPathPrefix + "insertInvtWalkways.php",
        insertInvtAdhesives: httpPathPrefix + "insertInvtAdhesives.php",
        getJob: httpPathPrefix + "getJob.php",
        getDataBase: httpPathPrefix + "getDataBase.php",
        getDataField: httpPathPrefix + "getDataField.php",
        getDataLayers: httpPathPrefix + "getDataLayers.php",
        getDataMembrane: httpPathPrefix + "getDataMembrane.php",
        getDataPenetrations: httpPathPrefix + "getDataPenetrations.php",
        getDataTerminations: httpPathPrefix + "getDataTerminations.php",
        getDataHvac: httpPathPrefix + "getDataHvac.php",
        getAdmin: httpPathPrefix + "getAdmin.php",
        getLibrary: httpPathPrefix + "getLibrary.php",
        getProposal: httpPathPrefix + "getProposal.php",
        updateLib_introduction: httpPathPrefix + "updateLib_introduction.php",
        updateLib_deck: httpPathPrefix + "updateLib_deck.php",
        updateLib_materials: httpPathPrefix + "updateLib_materials.php",
        updateLib_postinstall: httpPathPrefix + "updateLib_postinstall.php",
        updateLib_insulation: httpPathPrefix + "updateLib_insulation.php",
        updateLib_membrane: httpPathPrefix + "updateLib_membrane.php",
        updateLib_exclusions: httpPathPrefix + "updateLib_exclusions.php",
        updateLib_warranty: httpPathPrefix + "updateLib_warranty.php",
        updateProposal_introduction: httpPathPrefix + "updateProposal_introduction.php",
        updateProposal_deck: httpPathPrefix + "updateProposal_deck.php",
        updateProposal_materials: httpPathPrefix + "updateProposal_materials.php",
        updateProposal_postinstall: httpPathPrefix + "updateProposal_postinstall.php",
        updateProposal_insulation: httpPathPrefix + "updateProposal_insulation.php",
        updateProposal_membrane: httpPathPrefix + "updateProposal_membrane.php",
        updateProposal_exclusions: httpPathPrefix + "updateProposal_exclusions.php",
        updateProposal_warranty: httpPathPrefix + "updateProposal_warranty.php"
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
