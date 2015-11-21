'use strict';

/**
 * @ngdoc service
 * @name driveBuyApp.registration
 * @description
 * # registration
 * Service in the driveBuyApp.
 */
angular.module('driveBuyApp')
  .service('registration', function ($q, $http) {
    return {
      registerInterest: function(data) {
        var deferred = $q.defer();
        $http.post('http://drive-buy.appspot.com/subscribe',data).success(function(result){
          deferred.resolve(result);
        })
        .error(function(data) {
          console.log('Error registering: ');
          console.error(data);
          deferred.reject(data);
        });
        return deferred.promise;
      }
    }
  });
