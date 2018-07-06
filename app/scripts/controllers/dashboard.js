'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.imagePath = 'images/yeoman.png';
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  });
  ;
