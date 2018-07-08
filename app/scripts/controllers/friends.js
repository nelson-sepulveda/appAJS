'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:FriendsCtrl
 * @description
 * # FriendsCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
})
.controller('FriendsAppCtrl', function($scope,$http,consumo) {

  var url = 'http://192.168.1.2:1337/todo';
  var vm = this;    
  vm.data = {};
  vm.titulo="hola";
    
  vm.submit= function(){
    console.log(vm.data); 
    $http.post(url,
    vm.data
  ).then(function(rta){
    console.log(rta);
  }),
    function(error){
      console.log(error);
    };
  };

   vm.users=[]; 
   vm.getSubmit=function(){
    $http.get(url).then(function(rta){
      vm.users=rta.data;
      console.log(rta);
    }),
    function(err){
      console.log(err);
    };
   };
});  
