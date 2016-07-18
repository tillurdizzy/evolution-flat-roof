'use strict';

app.service('DB', ['$http', '$q',function eventQueries($http, $q) {
    var self = this;
    self.ME = "DB: ";
    
   
    var globalPathPrefix = "js/php/";
    var httpPathPrefix = "http/";

    var queryPaths = {
        getRoof: httpPathPrefix + "getRoof.php",
       
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



    return self;
}]);
