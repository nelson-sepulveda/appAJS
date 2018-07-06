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
        // controller:'FriendsAppCtrl',
        templateUrl:'views/dashboard.html'
      }).
      state('mensajes', {
        name:'mensajes',
        url:'/mensajes',
        // controller:'FriendsAppCtrl',
        templateUrl:'views/mensajes.html'
      });
  });
