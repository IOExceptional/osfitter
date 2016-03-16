'use strict';

angular.module('OSFitter', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'about/about.tpl.html',
        controller: 'AboutViewController'
    });
}])
.controller('AboutViewController', ['$scope', function($scope) {
    $scope.doThings = true;
}]);