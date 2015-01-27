'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */


var mytodoAppAboutCtrl = angular.module('mytodoAppAboutCtrl', []);

mytodoAppAboutCtrl.controller('AboutCtrl', ['$scope',
  function ($scope) {
    console.log('AboutCtrl: in')

    $scope.foo = 'Hello!';
    $scope.note = 'Hello!';

    $scope.updateFoo = function (newFoo) {
      console.log('newFoo: '+newFoo);
      $scope.foo = newFoo;
    }

    $scope.callHome = function(message) {
      alert(message);
    }

    $scope.showMessage = function(note) {
      alert(note);
    }
  }
]);
