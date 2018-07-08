'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp').
config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
  .primaryPalette('purple');
})
  .controller('DashboardCtrl', function ($scope,$http,$mdDialog) {

     var url = 'http://192.168.1.2:1337/todo'; 

    $scope.face = "images/yeoman.png";
    loadList();

    var vm = this;
    vm.loadList = loadList;
    vm.data={};
    vm.destroy = function(id){
      console.log(id);
      $http.delete(url+'/'+id

      ).then(function(rta){
        alert('Eliminado Correctamente')
        console.log(rta);  
      }),
      function(err){
        console.log(err);
      }
    };
    
  
    vm.showAlert=function(data, idx){
      
      var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         templateUrl:'views/formeditar.html',
         locals :{
           data: angular.merge({}, data)
         },
         controller: DialogController,
         controllerAs:'dashboardEdit'
      })
      .then(function(data_){
        //console.log(data_)
        //data = data_;
        $scope.datos[idx] = data_;
      })
      ;
    }

    function DialogController($mdDialog,data){
      var vm = this;
      vm.closeDialog = function() {
        $mdDialog.cancel();
      }
      vm.data = data;

      vm.editarInfo = function(id,titulo,descripcion){        

        $http.put(url+'/'+id,{titulo:titulo,descripcion:descripcion})
        .then(function(rta){
          console.log(rta);
          $mdDialog.hide(rta.data);
          alert('Actualizado correctamente')
        }),
        function(err){
          console.log(err); 
        };
      };
    }

    function loadList(){
      $http.get(url).then(function(rta){
        $scope.datos = rta.data;
        console.log(rta);
      },
      function(err){
        console.log(err);
      });
    }
});
