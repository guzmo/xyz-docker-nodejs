'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($http, $scope) {
    $http.get("http://xyz.softhouse.se/api/buildqueue").success(function(response){
        $scope.allData = response;
        console.log(response);
    });
});