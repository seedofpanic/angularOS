import angular from '../../node_modules/angular/angular.js';

var osApp = angular.module("osApp", []);

osApp.controller("osAppCtrl", function($scope) {
    $scope.data = {
        id: 1,
        value: 'value'
    }
});
