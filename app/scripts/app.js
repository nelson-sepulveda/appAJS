'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module 
 */
angular
  .module('yeomanApp', [  
    'ngMaterial',
    'ui.router',
    'ngResource'
  ])
  .config(function ($stateProvider){

    $stateProvider
      .state('/', {
        name:'main',
        url:'/main',
        templateUrl:'views/main.html',
      })
      .state('about', {
        name:'about',
        url:'/about',
        templateUrl:'views/about.html'
      }).
      state('friends', {
        name:'friends',
        url:'/friends',
        controller:'FriendsAppCtrl',
        controllerAs:'friendsController',
        templateUrl:'views/amigos.html'
      }).
      state('dashboard', {
        name:'dashboard',
        url:'/dashboard',
        controller:'DashboardCtrl',
        controllerAs:'dashboard',
        templateUrl:'views/dashboard.html'
      }).
      state('mensajes', {
        name:'mensajes',
        url:'/mensajes',
        // controller:'FriendsAppCtrl',
        templateUrl:'views/mensajes.html'
      }).
      state('basura', {
        name:'basura',
        url:'/trash',
        // controller:'FriendsAppCtrl',
        templateUrl:'views/trash.html'
      });
  })
  .controller('controlador',function($scope){
    $scope.nombre = "Nelson";
  
    var vm = this;    
    vm.data = {};
    vm.titulo="hola";
    vm.submit= function(){
      console.log(vm.data.nombre); 
    }  
  });
  
