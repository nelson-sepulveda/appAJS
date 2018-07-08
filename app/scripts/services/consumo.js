'use strict';

/**
 * @ngdoc service
 * @name yeomanApp.consumo
 * @description
 * # consumo
 * Factory in the yeomanApp.
 */
angular.module('yeomanApp')
  .factory('consumo', function ($http) {
    
    var user = {
      getUser : function(){
        return $http.get('http://jsonplaceholder.typicode.com/users').success(function(data){
          return data;
        })
        .error(function(err){
          console.log(err);
        });
      }
    };

    return user;
  });
